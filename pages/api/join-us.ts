import multer from "multer";

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: "./public/uploads",
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });

// const apiRoute = createRouter({
//   onError(error, req, res) {
//     res
//       .status(501)
//       .json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// apiRoute.use(upload.array("theFiles"));

// apiRoute.post((req, res) => {
//   res.status(200).json({ data: "success" });
// });

// export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };

import sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { InferType, object, string, ValidationError } from "yup";
import { sanitizeHtml } from "../../utils/mail";

const allowedMethods = ["POST"];

sgMail.setApiKey(process?.env?.SENDGRID_API_KEY);

const HONEYPOT_MSG = "Honeypot triggered";
const to = process?.env?.JOIN_US_MAIL_ADDRESS_FROM;
const from = process?.env?.JOIN_US_MAIL_ADDRESS_TO;

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

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

export default async (
  req: NextApiRequest,
  res: NextApiResponse<{ error?: string | any; msg?: string }>
) => {
  if (!allowedMethods.includes(req?.method) || req.method == "OPTIONS") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  const body = typeof req.body === "object" ? req.body : JSON.parse(req.body);
  let payload: FormValue;
  try {
    payload = await formSchema.validate(body);
  } catch (validationError: unknown) {
    console.log("Validation failed::", validationError);

    return res.status(400).json({
      error: (validationError as ValidationError).errors,
    });
  }

  const {
    firstName6g234: firstName,
    name90ad0f: name,
    emailfd80e: email,
    subject,
    text,
  } = payload;

  try {
    const formattedText = sanitizeHtml(text);

    const msg = {
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

    // TODO: Re-enable after proper upload implementation
    // const response = await sgMail.send(msg);
    // console.log(response);
    res.status(200).json({ msg: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }

    res.status(500).json({ msg: "Error processing payload" });
  }
};
