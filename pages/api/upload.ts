import { imgUploadSchema as formSchema } from '@schema/imgUpload.schema';
import fs from 'fs';
import multer from 'multer';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import { resolve } from 'path';
import { promisify } from 'util';
import { z } from 'zod';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const DEFAULT_UPLOAD_DIR = 'images/uploads';
const allowedApiToImageDirMap = new Map([
  ['teams', 'images/team'],
  ['references', 'images/references'],
]);

type FormValue = z.infer<typeof formSchema>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const multerUpload = promisify(upload.single('file'));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await multerUpload(req as any, res as any);

  const { file: uploadedFile } = req as unknown as { file: Express.Multer.File };

  try {
    let body;
    try {
      body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
    } catch (parseErr) {
      console.log('Body parse error:', parseErr);
      return res.status(500).json({ error: JSON.stringify(parseErr) });
    }

    let payload: FormValue;
    try {
      payload = formSchema.parse(body);
    } catch (validationError: unknown) {
      console.log('Validation failed:', validationError);

      return res.status(400).json({
        error: JSON.stringify(validationError, null, 2),
      });
    }

    if (!uploadedFile) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // File was successfully uploaded
    const { originalname, buffer } = uploadedFile;
    const ext = originalname.substring(originalname.lastIndexOf('.'));
    const fileName = payload.fileName + ext;
    const fileDestination = allowedApiToImageDirMap.get(payload.destination) ?? DEFAULT_UPLOAD_DIR;
    const filePath = resolve('./public', fileDestination, fileName);

    fs.writeFile(filePath, buffer, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error writing file' });
      }

      return res.status(200).json({ path: `/uploads/${fileName}`, originalname });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
