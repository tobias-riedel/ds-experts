import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import { sanitizeHtml } from "../../utils/mail";

const transporter = {
  auth: { api_key: process.env.SENDGRID_API_KEY },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));
const to = process.env.JOIN_US_MAIL_ADDRESS_FROM;
const from = process.env.JOIN_US_MAIL_ADDRESS_TO;

export default async (req, res) => {
  // console.log(req.body)
  const { firstname, name, email, number, subject, text } = req.body;

  const formattedText = sanitizeHtml(text);

  const data = {
    to,
    from,
    subject: `Bewerbung ${subject}`,
    text,
    html: `
            <b>Von:</b> Bewerbungsformular <br /> 
            <b>Vorname:</b> ${firstname} <br /> 
            <b>Name:</b> ${name} <br /> 
            <b>eMail:</b> ${email} <br /> 
            <b>Telefon:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${formattedText} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
