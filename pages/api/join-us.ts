import multer from 'multer';

import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import { InferType, object, string, ValidationError } from 'yup';
import { sanitizeHtml } from '../../utils/mail';

const allowedMethods = ['POST'];
const allowedUploadFileMimeTypes = ['application/pdf'];

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const JoinUsMaxFileSize = +(process.env.NEXT_PUBLIC_JOIN_US_MAX_FILE_SIZE ?? '8');
const maxUploadedFileSize = JoinUsMaxFileSize * 1024 * 1024;

const HONEYPOT_MSG = 'Honeypot triggered';
const to = process.env.JOIN_US_MAIL_ADDRESS_FROM;
const from = process.env.JOIN_US_MAIL_ADDRESS_TO;

const formSchema = object({
  firstName: string().max(0, HONEYPOT_MSG),
  name: string().max(0, HONEYPOT_MSG),
  email: string().max(0, HONEYPOT_MSG),
  firstName6g234: string().required(),
  name90ad0f: string().required(),
  emailfd80e: string().email().required(),
  subject: string().required(),
  text: string().required(),
});

type FormValue = InferType<typeof formSchema>;

const uploadFilter = function (_, file: Express.Multer.File, cb: multer.FileFilterCallback): void {
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

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const handler = async (req: NextApiRequest, res: NextApiResponse<{ error?: string | object; msg?: string }>) => {
  if (!allowedMethods.includes(req?.method) || req.method == 'OPTIONS') {
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
    return res.status(500).json({ error: parseErr });
  }

  let payload: FormValue;
  try {
    payload = await formSchema.validate(body);
  } catch (validationError: unknown) {
    console.log('Validation failed:', validationError);

    return res.status(400).json({
      error: (validationError as ValidationError).errors,
    });
  }

  const { file: uploadedFile } = req as { file: Express.Multer.File };

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
      subject: `Kontaktformular ${subject}`,
      text,
      html: `<b>Von:</b> Kontaktformular<br /> 
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
    if (error.response) {
      console.error(error.response.body);
    }

    return res.status(500).json({ msg: 'Error processing payload' });
  }
};

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export default handler;
