import fs from 'fs';
import path from 'path';

export enum AllowedImageDirs {
  TEAM = 'images/team',
  REFERENCES = 'images/references',
}

const allowedFileExtensionsRegex = /\.(png|jpg|jpeg|webp)$/i;

export const getImages = (folder: AllowedImageDirs): string[] => {
  const dirRelativeToPublicFolder = folder ?? '.';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames
    .map((name) => path.join('/', dirRelativeToPublicFolder, name).replaceAll('\\', '/'))
    .filter((path) => path.match(allowedFileExtensionsRegex));

  console.log('Loaded images:', images?.length);

  return images;
};
