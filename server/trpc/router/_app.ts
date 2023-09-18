import { router } from '../trpc';
import { authRouter } from './auth';
import { expertsRouter } from './expert';
import { imagesRouter } from './images';
import { projectsRouter } from './project';

// TODO: refactor paths to single names (From "experts" to "expert")
export const appRouter = router({
  auth: authRouter,
  experts: expertsRouter,
  images: imagesRouter,
  projects: projectsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
