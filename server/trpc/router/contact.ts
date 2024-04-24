import { env } from '@env/server.mjs';
import { contactSchema } from '@schema/contact.schema';
import sgMail from '@sendgrid/mail';
import { sanitizeHtml } from '@utils/mail';
import { publicProcedure, router } from '../trpc';

sgMail.setApiKey(env.SENDGRID_API_KEY);

const from = env.CONTACTS_MAIL_ADDRESS_FROM;
const to = env.CONTACTS_MAIL_ADDRESS_TO;

export const contactRouter = router({
  sendMail: publicProcedure.input(contactSchema).mutation(async ({ input }) => {
    const { firstName6g234: firstName, name90ad0f: name, emailfd80e: email, subject, text } = input;
    const formattedText = sanitizeHtml(text);

    const mail = {
      to,
      from,
      subject: `Kontaktformular ${subject}`,
      text: text,
      html: `<b>Von:</b> Kontaktformular<br /> 
<b>Vorname:</b> ${firstName} <br /> 
<b>Name:</b> ${name} <br /> 
<b>eMail:</b> ${email} <br /> 
<b>Betreff:</b> ${subject} <br /> 
<b>Anfrage:</b> ${formattedText} `,
    };

    try {
      const response = await sgMail.send(mail);
      console.log(response);

      return { msg: 'eMail sent succesfully' };
    } catch (error) {
      console.error('Error sending contact mail:', error);
    }
  }),
});
