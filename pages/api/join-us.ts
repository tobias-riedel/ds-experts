import sgMail from "@sendgrid/mail";
import { sanitizeHtml } from "../../utils/mail";
import * as multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("attachment");

sgMail.setApiKey(process?.env?.SENDGRID_API_KEY);

const to = process?.env?.JOIN_US_MAIL_ADDRESS_FROM;
const from = process?.env?.JOIN_US_MAIL_ADDRESS_TO;

export default async (req, res) => {
  console.log("Body::", req.body);

  const {
    firstname: honeyFirstname,
    name: honeyName,
    email: honeyEmail,
    firstname6g234: firstname,
    name90ad0f: name,
    emailfd80e: email,
    telephone,
    subject,
    text,
    cv,
  } = req.body;

  // const fileInfo = req.file;
  // console.log("file::", firstname);

  const now = new Date().toISOString();
  // Exit on honeypot activation
  if (honeyFirstname || honeyName || honeyEmail) {
    console.log(`[${now}] Honeypot triggered: ${JSON.stringify(req.body)}`);
    res.status(412).send({ msg: "Honeypot triggered" });
    return;
  }

  if (!firstname || !name || !email || !text) {
    console.log(
      `[${now}] Submitted data incomplete: ${JSON.stringify(req.body)}`
    );
    res.status(400).send({ msg: "Submitted data incomplete" });
    return;
  }

  const formattedText = sanitizeHtml(text);

  const msg = {
    to,
    from,
    subject: `Bewerbungsformular ${subject}`,
    text,
    html: `<b>Von:</b> Bewerbungsformular <br /> 
<b>Vorname:</b> ${firstname} <br /> 
<b>Name:</b> ${name} <br /> 
<b>eMail:</b> ${email} <br /> 
<b>Telefon:</b> ${telephone} <br /> 
<b>Betreff:</b> ${subject} <br /> 
<b>Anfrage:</b> ${formattedText} `,
  };

  try {
    // const response = await sgMail.send(msg);
    // console.log(response);
    res.status(200).send({ msg: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }

    res.status(500).send({ msg: "Error processing payload" });
  }
};
