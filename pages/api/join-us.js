import sgMail from "@sendgrid/mail";
import { sanitizeHtml } from "../../utils/mail";

sgMail.setApiKey(process?.env?.SENDGRID_API_KEY);

const to = process?.env?.JOIN_US_MAIL_ADDRESS_FROM;
const from = process?.env?.JOIN_US_MAIL_ADDRESS_TO;

export default async (req, res) => {
  // console.log(req.body)
  const { firstname, name, email, number, subject, text } = req.body;

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
<b>Telefon:</b> ${number} <br /> 
<b>Betreff:</b> ${subject} <br /> 
<b>Anfrage:</b> ${formattedText} `,
  };

  try {
    const response = await sgMail.send(msg);
    console.log(response);
    res.status(200).send({ msg: "Email send successfully" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }

    res.status(500).send({ msg: "Error proccessing charge" });
  }
};
