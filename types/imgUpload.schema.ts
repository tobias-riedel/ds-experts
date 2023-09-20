import { z } from 'zod';

export const imgUploadSchema = z.object({
  fileName: z.string(),
  destination: z.string(),
});
