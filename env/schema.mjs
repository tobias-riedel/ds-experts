// @ts-check
import { z } from 'zod';

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NEXTAUTH_SECRET: process.env.NODE_ENV === 'production' ? z.string().min(1) : z.string().min(1).optional(),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string() : z.string().url()
  ),
  AZURE_AD_CLIENT_ID: z.string(),
  AZURE_AD_CLIENT_SECRET: z.string(),
  AZURE_AD_TENANT_ID: z.string(),

  SENDGRID_API_KEY: z.string({ required_error: 'Mail API key is required' }),
  CONTACTS_MAIL_ADDRESS_FROM: z.string({ required_error: 'Contacts FROM mail address is required' }).email(),
  CONTACTS_MAIL_ADDRESS_TO: z.string({ required_error: 'Contacts TO mail address is required' }).email(),
  JOIN_US_MAIL_ADDRESS_FROM: z.string({ required_error: 'Join Us FROM mail address is required' }).email(),
  JOIN_US_MAIL_ADDRESS_TO: z.string({ required_error: 'Join Us TO mail address is required' }).email(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string(),
  NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE: z.number(),
  NEXT_PUBLIC_SHOW_PROJECT_DATE_DAYS: z.boolean(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE: +(process.env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE ?? '8'),
  NEXT_PUBLIC_SHOW_PROJECT_DATE_DAYS: process.env.NEXT_PUBLIC_SHOW_PROJECT_DATE_DAYS === 'true',
};
