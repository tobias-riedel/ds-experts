import { AllowedImageDirs, getImages } from '@utils/images';
import { protectedProcedure, router } from '../trpc';

export const imagesRouter = router({
  listTeam: protectedProcedure.query(async () => {
    return getImages(AllowedImageDirs.TEAM);
  }),

  listReferences: protectedProcedure.query(async () => {
    return getImages(AllowedImageDirs.REFERENCES);
  }),
});
