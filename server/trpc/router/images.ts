import fs from 'fs';
import path from 'path';
import { protectedProcedure, router } from '../trpc';

enum AllowedImageDirs {
  TEAM = 'images/team',
  REFERENCES = 'images/references',
}

const allowedApiToImageDirMap = new Map([
  ['teams', 'images/team'],
  ['references', 'images/references'],
]);

allowedApiToImageDirMap.keys();

const allowedFileExtensionsRegex = /\.(png|jpg|jpeg|webp)$/i;

const getImages = (folder: AllowedImageDirs): string[] => {
  const dirRelativeToPublicFolder = folder ?? '.';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames
    .map(name => path.join('/', dirRelativeToPublicFolder, name).replaceAll('\\', '/'))
    .filter(path => path.match(allowedFileExtensionsRegex));

  console.log('Loaded images:', images?.length);

  return images;
};

export const imagesRouter = router({
  listTeam: protectedProcedure.query(async () => {
    return getImages(AllowedImageDirs.TEAM);
  }),

  listReferences: protectedProcedure.query(async () => {
    return getImages(AllowedImageDirs.REFERENCES);
  }),
});
