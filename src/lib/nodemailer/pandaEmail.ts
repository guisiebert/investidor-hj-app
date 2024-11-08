// the /emails folder includes all graphic templates used by
// sendEmail.ts is responsible for handling the email payload and sending it through nodemailer
// pandaEmail.ts acts like an email router, organizing all system emails with their templates and content, sending it to sendEmail

import { sendEmail } from "@/lib/nodemailer/sendEmail";
import { render } from "@react-email/render";
import MagicLinkEmail from "emails/tw-magic-link";

type Recipient = {
  address: string;
  name: string;
};

export const pandaEmail = {
  // Each method here represents an automatic email sent from the system

  // Magic Link
  async magicLink(recipient: Recipient, login_link: string) {
    const mail = await sendEmail({
      subject: "Seu login no InvestidorHJ",
      html: await render(
        // GUI: There was no "await" before
        MagicLinkEmail({
          user_email: recipient.address,
          login_link,
        }),
      ),
      to: recipient,
    });

    if (mail.rejected.length > 0) {
      throw new Error("MagicLink mail rejected");
    }

    return mail;
  },
};
