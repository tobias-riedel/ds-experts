import { $Enums, Project } from '@prisma/client';
import { z } from 'zod';
import { projectSchema } from '@schema/project.schema';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const projectsRouter = router({
  list: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const projects: Project[] = await prisma.project.findMany({
      where: { visibility: $Enums.Visibility.PUBLIC },
      orderBy: { orderId: 'asc' },
    });
    return projects;
  }),

  byIdDashboard: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx: { prisma }, input: { id } }) => {
      const project: Project | null = await prisma.project.findUnique({ where: { id } });
      return project;
    }),

  listDashboard: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    const projects: Project[] = await prisma.project.findMany({ orderBy: { orderId: 'asc' } });
    return projects;
  }),

  create: protectedProcedure.input(projectSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const project: Project = await prisma.project.create({ data: { ...item, id: item.id || undefined } });
    return project;
  }),

  update: protectedProcedure.input(projectSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const project: Project = await prisma.project.update({ where: { id: item.id }, data: item });
    return project;
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx: { prisma }, input: { id } }) => {
      const project: Project = await prisma.project.delete({ where: { id } });
      return project;
    }),
});
