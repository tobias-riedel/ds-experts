import { prisma as clientPrisma } from '@db/client';
import { $Enums, Expert, Prisma, PrismaClient, PrismaPromise, Project } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export type ProjectWithExperts = Project & { experts: { expert: Partial<Expert> }[] };

export const listProjects = (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = clientPrisma
): PrismaPromise<Project[]> => {
  return prisma.project.findMany({
    where: { visibility: $Enums.Visibility.PUBLIC },
    orderBy: { orderId: 'asc' },
  });
};

export const listProjectsWithExperts = (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = clientPrisma
): PrismaPromise<ProjectWithExperts[]> => {
  const projects = prisma.project.findMany({
    where: { visibility: $Enums.Visibility.PUBLIC },
    orderBy: { orderId: 'asc' },
    include: {
      experts: {
        include: { expert: { select: { firstName: true, lastName: true, img: true, orderId: true } } },
        orderBy: { expert: { orderId: 'asc' } },
      },
    },
  });

  return projects;
};

export const listAllProjects = (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = clientPrisma
): PrismaPromise<Project[]> => {
  return prisma.project.findMany({
    orderBy: { orderId: 'asc' },
  });
};
