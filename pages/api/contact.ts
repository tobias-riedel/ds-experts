import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { InferType, object, string, ValidationError } from 'yup';
import { env } from '../../env/server.mjs';
import { sanitizeHtml } from '../../utils/mail';

const allowedMethods = ['POST'];

sgMail.setApiKey(env.SENDGRID_API_KEY);

const HONEYPOT_MSG = 'Honeypot triggered';
const to = env.CONTACTS_MAIL_ADDRESS_FROM;
const from = env.CONTACTS_MAIL_ADDRESS_TO;

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

export const handler = async (req: NextApiRequest, res: NextApiResponse<{ error?: string | object; msg?: string }>) => {
  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
  let payload: FormValue;
  try {
    payload = await formSchema.validate(body);
  } catch (validationError: unknown) {
    console.log('Validation failed:', validationError);

    return res.status(400).json({
      error: (validationError as ValidationError).errors,
    });
  }

  const { firstName6g234: firstName, name90ad0f: name, emailfd80e: email, subject, text } = payload;

  try {
    const formattedText = sanitizeHtml(text);

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
    };

    const response = await sgMail.send(mail);
    console.log(response);
    res.status(200).json({ msg: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }

    res.status(500).json({ msg: 'Error processing payload' });
  }
};

export default handler;
