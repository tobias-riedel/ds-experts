import { env } from '@env/server.mjs';
import { joinUsSchema as formSchema } from '@schema/joinUs.schema';
import sgMail from '@sendgrid/mail';
import multer from 'multer';
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import { z } from 'zod';
import { sanitizeHtml } from '../../utils/mail';

const allowedMethods = ['POST'];
const allowedUploadFileMimeTypes = ['application/pdf'];

sgMail.setApiKey(env.SENDGRID_API_KEY);

const JoinUsMaxFileSize = env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE ?? 8;
const maxUploadedFileSize = JoinUsMaxFileSize * 1024 * 1024;

const from = env.JOIN_US_MAIL_ADDRESS_FROM;
const to = env.JOIN_US_MAIL_ADDRESS_TO;

type FormValue = z.infer<typeof formSchema>;

const uploadFilter = function (_: unknown, file: Express.Multer.File, cb: multer.FileFilterCallback): void {
  const acceptFile = allowedUploadFileMimeTypes.includes(file.mimetype);

  if (acceptFile) {
    cb(null, true);
  } else {
    return cb(new Error('Only .pdf files allowed!'));
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: uploadFilter,
});

// FIXME: use util.promisify instead
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: Error | unknown) => (result instanceof Error ? reject(result) : resolve(result)));
  });
}

export const handler = async (req: NextApiRequest, res: NextApiResponse<{ error?: string | object; msg?: string }>) => {
  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    await runMiddleware(req, res, upload.single('file'));
  } catch (e) {
    console.log('File upload error:', e);
    return res.status(400).json({ error: (e as Error).message });
  }

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

  const { file: uploadedFile } = req as unknown as { file: Express.Multer.File };

  if (uploadedFile?.size > maxUploadedFileSize) {
    return res.status(413).json({
      error: `Uploaded file is too large. Only ${JoinUsMaxFileSize} MB is allowed.`,
    });
  }

  const { firstName6g234: firstName, name90ad0f: name, emailfd80e: email, subject, text } = payload;

  try {
    const formattedText = sanitizeHtml(text);

    const attachments = uploadedFile
      ? [
          {
            content: Buffer.from(uploadedFile.buffer).toString('base64'),
            filename: uploadedFile.originalname,
            type: 'application/pdf',
            disposition: 'attachment',
          },
        ]
      : [];

    const mail = {
      to,
      from,
      subject: `Bewerbungsformular ${subject}`,
      text,
      html: `<b>Von:</b> Bewerbungsformular<br /> 
<b>Vorname:</b> ${firstName} <br /> 
<b>Name:</b> ${name} <br /> 
<b>eMail:</b> ${email} <br /> 
<b>Betreff:</b> ${subject} <br /> 
<b>Anfrage:</b> ${formattedText} `,
      attachments,
    };

    const response = await sgMail.send(mail);
    console.log(response);
    return res.status(200).json({ msg: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: JSON.stringify(error), msg: 'Error processing payload' });
  }
};

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export default handler;
