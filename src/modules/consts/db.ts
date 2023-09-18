// These set of option prevents tRPC calls from running into a "maximum update depth exceeded" error when used in the
// same component as a useFormikContext calls.
export const TRPC_FORMIK_CACHE_OPTS = { keepPreviousData: true, cacheTime: 100 };
