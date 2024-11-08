// the /emails folder includes all graphic templates
// sendEmail.ts is responsible for handling the email payload and sending it through nodemailer
// pandaEmail.ts acts like an email router, organizing all system emails with their templates and content, sending it to sendEmail

import nodemailer from "nodemailer";
import { env } from "@/env";

type EmailPayload = {
  to: {
    address: string;
    name: string;
  };
  subject: string;
  html: string;
};

const smtpOptions = {
  host: env.EMAIL_SERVER_HOST ?? "sandbox.smtp.mailtrap.io",
  port: parseInt(env.EMAIL_SERVER_PORT ?? "2525"),
  secure: false,
  auth: {
    user: env.EMAIL_SERVER_USER ?? "user",
    pass: env.EMAIL_SERVER_PASSWORD ?? "password",
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  const mail = await transporter.sendMail({
    from: { address: env.EMAIL_FROM, name: env.EMAIL_FROM_NAME },
    ...data,
  });

  if (mail.accepted.length < 1) {
    throw new Error("MagicLink mail rejected");
  }

  return mail;
};
