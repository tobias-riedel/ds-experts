import sgMail from "@sendgrid/mail";
import { sanitizeHtml } from "../../utils/mail";

sgMail.setApiKey(process?.env?.SENDGRID_API_KEY);

const to = process?.env?.CONTACTS_MAIL_ADDRESS_FROM;
const from = process?.env?.CONTACTS_MAIL_ADDRESS_TO;

export default async (req, res) => {
  const {
    firstname: honeyFirstname,
    name: honeyName,
    email: honeyEmail,
    firstname6g234: firstname,
    name90ad0f: name,
    emailfd80e: email,
    subject,
    text,
  } = req.body;

  // Exit on honeypot activation
  if (honeyFirstname || honeyName || honeyEmail) {
    const now = new Date().toISOString();
    console.log(`[${now}] Honeypot triggered: ${JSON.stringify(req.body)}`);
    res.status(412).send({ msg: "Honeypot triggered" });
    return;
  }

  const formattedText = sanitizeHtml(text);

  const msg = {
    to,
    from,
    subject: `Kontaktformular ${subject}`,
    text,
    html: `<b>Von:</b> Kontaktformular <br /> 
<b>Vorname:</b> ${firstname} <br /> 
<b>Name:</b> ${name} <br /> 
<b>eMail:</b> ${email} <br /> 
<b>Betreff:</b> ${subject} <br /> 
<b>Anfrage:</b> ${formattedText} `,
  };

  try {
    const response = await sgMail.send(msg);
    console.log(response);
    res.status(200).send({ msg: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }

    res.status(500).send({ msg: "Error processing payload" });
  }
};
