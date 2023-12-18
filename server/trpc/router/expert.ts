import { Expert } from '@prisma/client';
import { expertSchema } from '@schema/expert.schema';
import { z } from 'zod';
import { listAllExperts, listExperts } from '../shared/expert';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const expertsRouter = router({
  list: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const experts: Expert[] = await listExperts(prisma);
    return experts;
  }),

  byIdDashboard: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx: { prisma }, input: { id } }) => {
      const expert: Expert | null = await prisma.expert.findUnique({ where: { id } });
      return expert;
    }),

  listDashboard: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    const experts: Expert[] = await listAllExperts(prisma);
    return experts;
  }),

  create: protectedProcedure.input(expertSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const { projects, ...payload } = item;

    const expert: Expert = await prisma.expert.create({
      data: {
        ...payload,
        id: payload.id || undefined,
      },
    });

    await prisma.expertsInProjects.createMany({
      data: projects?.map((project) => ({ ...project, expertId: expert.id })) ?? [],
    });

    return expert;
  }),

  update: protectedProcedure.input(expertSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const { projects, ...payload } = item;

    const expert: Expert = await prisma.expert.update({
      where: { id: payload.id },
      data: {
        ...payload,
        updatedAt: undefined,
      },
    });

    await prisma.expertsInProjects.deleteMany({ where: { expertId: payload.id } });
    await prisma.expertsInProjects.createMany({ data: projects ?? [] });

    return expert;
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx: { prisma }, input: { id } }) => {
      const expert: Expert = await prisma.expert.delete({ where: { id } });
      return expert;
    }),
});
