import { Project } from '@prisma/client';
import { projectSchema } from '@schema/project.schema';
import { z } from 'zod';
import { listAllProjects, listProjects } from '../shared/project';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const projectsRouter = router({
  list: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const projects: Project[] = await listProjects(prisma);
    return projects;
  }),

  byIdDashboard: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx: { prisma }, input: { id } }) => {
      const project: Project | null = await prisma.project.findUnique({ where: { id } });
      return project;
    }),

  listDashboard: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    const projects: Project[] = await listAllProjects(prisma);
    return projects;
  }),

  create: protectedProcedure.input(projectSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const { experts, ...payload } = item;

    return await prisma.$transaction(async (tx) => {
      const project: Project = await tx.project.create({
        data: { ...payload, id: undefined },
      });

      await tx.expertsInProjects.createMany({
        data: experts?.map((expert) => ({ ...expert, projectId: project.id })) ?? [],
      });

      return project;
    });
  }),

  update: protectedProcedure.input(projectSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const { experts, ...payload } = item;

    return prisma.$transaction(async (tx) => {
      const project: Project = await tx.project.update({ where: { id: payload.id }, data: payload });

      await tx.expertsInProjects.deleteMany({ where: { projectId: payload.id } });
      experts?.length && (await tx.expertsInProjects.createMany({ data: experts ?? [] }));

      return project;
    });
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx: { prisma }, input: { id } }) => {
      const project: Project = await prisma.project.delete({ where: { id } });
      return project;
    }),
});
