import { $Enums, Expert } from '@prisma/client';
import { expertSchema } from '@schema/expert.schema';
import { z } from 'zod';
import { listAllExperts, listExperts } from '../shared/expert';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const expertsRouter = router({
  list: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const experts: Expert[] = await listExperts(prisma);
    return experts;
  }),

  count: protectedProcedure
    .input(z.object({ visibility: z.nativeEnum($Enums.Visibility) }))
    .query(async ({ ctx: { prisma }, input: { visibility } }) => {
      const count = await prisma.expert.count({ where: { visibility } });
      return count;
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

    return prisma.$transaction(async (tx) => {
      const expert: Expert = await tx.expert.create({
        data: {
          ...payload,
          id: undefined,
        },
      });

      await tx.expertsInProjects.createMany({
        data: projects?.map((project) => ({ ...project, expertId: expert.id })) ?? [],
      });

      return expert;
    });
  }),

  update: protectedProcedure.input(expertSchema).mutation(async ({ ctx: { prisma }, input: item }) => {
    const { projects, ...payload } = item;

    return prisma.$transaction(async (tx) => {
      const expert: Expert = await tx.expert.update({
        where: { id: payload.id },
        data: {
          ...payload,
          updatedAt: undefined,
        },
      });

      await tx.expertsInProjects.deleteMany({ where: { expertId: payload.id } });
      projects?.length && (await tx.expertsInProjects.createMany({ data: projects ?? [] }));

      return expert;
    });
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx: { prisma }, input: { id } }) => {
      const expert: Expert = await prisma.expert.delete({ where: { id } });
      return expert;
    }),
});
