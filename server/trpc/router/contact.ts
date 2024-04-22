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
    const formattedText = sanitizeHtml(input.text);

    const mail = {
      to,
      from,
      subject: `Kontaktformular ${input.subject}`,
      text: input.text,
      html: `<b>Von:</b> Kontaktformular<br /> 
<b>Vorname:</b> ${input.firstName} <br /> 
<b>Name:</b> ${input.name} <br /> 
<b>eMail:</b> ${input.email} <br /> 
<b>Betreff:</b> ${input.subject} <br /> 
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
