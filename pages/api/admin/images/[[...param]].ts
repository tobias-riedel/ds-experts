import { getServerAuthSession } from '@server/common/get-server-auth-session';
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// FIXME: Secure API
const allowedMethods = ['GET'];

const allowedApiToImageDirMap = new Map([
  ['teams', 'images/team'],
  ['references', 'images/references'],
]);

const allowedFileExtensionsRegex = /\.(png|jpg|jpeg|webp)$/i;

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ error?: string | object; msg?: string } | string[]>
) => {
  // TODO: Use API router for restricted APIs
  const session = await getServerAuthSession({ req, res });
  if (!session?.user) {
    return res.status(401).json({ error: `401 Unauthorized` });
  }

  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  const { param } = req.query;
  const apiUrl = param?.[0] as string;
  const isSoloItemRequest = !!apiUrl;

  if (!isSoloItemRequest || !allowedApiToImageDirMap.has(apiUrl)) {
    return res.status(404).json({ msg: 'Image API not found' });
  }

  const dirRelativeToPublicFolder = allowedApiToImageDirMap.get(apiUrl) ?? '.';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  try {
    const filenames = fs.readdirSync(dir);

    const images = filenames
      .map(name => path.join('/', dirRelativeToPublicFolder, name).replaceAll('\\', '/'))
      .filter(path => path.match(allowedFileExtensionsRegex));

    console.log('Loaded images:', images?.length);

    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: JSON.stringify(error), msg: 'Error loading images' });
  }
};

export default handler;
