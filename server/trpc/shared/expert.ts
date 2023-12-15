import { prisma as clientPrisma } from '@db/client';
import { PrismaClient, Prisma, $Enums, Expert, PrismaPromise } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const listExperts = (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = clientPrisma
): PrismaPromise<Expert[]> => {
  return prisma.expert.findMany({
    where: { visibility: $Enums.Visibility.PUBLIC },
    orderBy: { orderId: 'asc' },
  });
};
