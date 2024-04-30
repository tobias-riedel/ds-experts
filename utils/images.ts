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

  const filenames = fs.readdirSync(dir, { recursive: true });

  const images = filenames
    .filter((name) => typeof name == 'string')
    .map((name) => path.join('/', dirRelativeToPublicFolder, name as string).replaceAll('\\', '/'))
    .filter((path) => path.match(allowedFileExtensionsRegex));

  console.log('Loaded images:', images?.length);

  return images;
};
