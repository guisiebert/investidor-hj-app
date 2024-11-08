import { env } from "@/env";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface MagicLinkEmailProps {
  user_email?: string;
  login_link?: string;
}

export default function MagicLinkEmail({
  user_email,
  login_link,
}: MagicLinkEmailProps) {
  const previewText = `Aqui está seu acesso ao InvestidorHJ`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eee] bg-slate-100 p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={"https://investidorhj.vercel.app/email-header.png"}
                width="auto"
                height="50"
                alt="Investidor HJ logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Seu link para <strong>login</strong> no{" "}
              <strong>Investidor HJ</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">Olá,</Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Aqui está o link que você solicitou para acessar a plataforma do
              <strong> Investidor HJ</strong> como {user_email}.
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center text-lg font-semibold text-white no-underline"
                href={login_link}
              >
                Fazer login no Investidor HJ
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              Se quiser fazer login em um dispositivo diferente, copie e cole a
              URL abaixo em seu navegador:{" "}
            </Text>
            <Text className="w-96 break-words text-[11px] leading-[14px]">
              <Link href={login_link} className="text-blue-600 no-underline">
                {login_link}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Caso não tenha solicitado este email, você pode ignorá-lo com
              segurança.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

MagicLinkEmail.PreviewProps = {
  user_email: "guigo@example.com",
  login_link:
    "http://localhost:3000/api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=13986156c9aab64e3e0d5209a7ba0c56944a4b4940fd2a5c30de116a0b74d262&email=someone%40gmail.com",
} as MagicLinkEmailProps;
