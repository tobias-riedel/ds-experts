import { Expert } from '@prisma/client';
import { z } from 'zod';
import { expertSchema } from '../../../types/expert.schema';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const expertsRouter = router({
  list: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const experts: Expert[] = await prisma.expert.findMany({ where: { isPublic: true }, orderBy: { orderId: 'asc' } });
    return experts;
  }),

  byIdDashboard: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx: { prisma }, input: { id } }) => {
      const expert: Expert = await prisma.expert.findUniqueOrThrow({ where: { id } });
      return expert;
    }),

  listDashboard: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    const experts: Expert[] = await prisma.expert.findMany({ orderBy: { orderId: 'asc' } });
    return experts;
  }),

  create: protectedProcedure.input(expertSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const expert: Expert = await prisma.expert.create({ data: { ...item, id: item.id || undefined } });
    return expert;
  }),

  update: protectedProcedure.input(expertSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const expert: Expert = await prisma.expert.update({
      where: { id: item.id },
      data: { ...item, updatedAt: undefined },
    });
    return expert;
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx: { prisma }, input: { id } }) => {
      const expert: Expert = await prisma.expert.delete({ where: { id } });
      return expert;
    }),
});
