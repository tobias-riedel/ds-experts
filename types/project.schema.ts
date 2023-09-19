import { z } from 'zod';

// TODO: implement zod-prisma-generator: https://github.com/CarterGrimmeisen/zod-prisma or
// https://www.npmjs.com/package/prisma-zod-generator
export const projectSchema = z.object({
  id: z.string().optional(),
  partnerName: z.string(),
  projectName: z.string(),
  city: z.string(),
  locationLat: z.number().optional().nullish(),
  locationLong: z.number().optional().nullish(),
  startedAt: z.string().optional().nullish(),
  endedAt: z.string().optional().nullish(),
  img: z.string().optional().nullish(),
  description: z.string().optional().nullish(),
  isPublic: z.boolean().optional().default(false),
  orderId: z.number().optional().nullish().default(0),
  slug: z.string().optional().nullish(),
});
