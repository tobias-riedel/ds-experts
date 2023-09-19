import { HONEYPOT_MSG } from '@consts/misc';
import { z } from 'zod';

export const joinUsSchema = z.object({
  firstName: z.string().max(0, HONEYPOT_MSG).optional(),
  name: z.string().max(0, HONEYPOT_MSG).optional(),
  email: z.string().max(0, HONEYPOT_MSG).optional(),
  firstName6g234: z.string(),
  name90ad0f: z.string(),
  emailfd80e: z.string().email(),
  subject: z.string(),
  text: z.string(),
});
