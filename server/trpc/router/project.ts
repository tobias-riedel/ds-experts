import { Project } from '@prisma/client';
import { z } from 'zod';
import { projectSchema } from '../../../types/project.schema';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const projectsRouter = router({
  list: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const projects: Project[] = await prisma.project.findMany({
      where: { isPublic: true },
      orderBy: { orderId: 'asc' },
    });
    return projects;
  }),

  byIdDashboard: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx: { prisma }, input: { id } }) => {
      const expert: Project = await prisma.project.findUniqueOrThrow({ where: { id } });
      return expert;
    }),

  listDashboard: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    const experts: Project[] = await prisma.project.findMany({ orderBy: { orderId: 'asc' } });
    return experts;
  }),

  create: protectedProcedure.input(projectSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const expert: Project = await prisma.project.create({ data: { ...item, id: item.id || undefined } });
    return expert;
  }),

  update: protectedProcedure.input(projectSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const expert: Project = await prisma.project.update({ where: { id: item.id }, data: item });
    return expert;
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx: { prisma }, input: { id } }) => {
      const expert: Project = await prisma.project.delete({ where: { id } });
      return expert;
    }),
});
