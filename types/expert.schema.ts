import { z } from 'zod';

// TODO: implement zod-prisma-generator: https://github.com/CarterGrimmeisen/zod-prisma or
// https://www.npmjs.com/package/prisma-zod-generator
export const expertSchema = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.string(),
  img: z.string().optional().nullish(),
  startedAt: z.string(),
  endedAt: z.string().optional().nullish(),
  isPublic: z.boolean().optional().default(false),
  orderId: z.number().optional().nullish().default(0),
  slug: z.string().optional().nullish(),
  createdAt: z.date().optional().nullish().default(new Date()),
  updatedAt: z.date().optional().nullish().default(new Date()),
});
