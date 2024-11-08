import { api } from "@/trpc/server";
import Image from "next/image";
import logo from "@/../public/logo-navbar.png";

import { Highlight } from "@/components/ui/hero-highlight";
import LoginForm from "@/components/login-form";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <div className="relative">
      <nav className="absolute flex h-20 items-center justify-between px-16 shadow-sm">
        <div className="flex items-center">
          <Image
            className="h-8 w-auto"
            alt="Logo"
            src={logo}
            width={220}
            height={48}
          />
        </div>
      </nav>
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-tr from-red-950 to-violet-950">
        <div className="flex max-w-2xl flex-col space-y-8">
          <h1 className="text-center text-5xl font-semibold">
            Inicie hoje mesmo sua <br />
            <Highlight className="text-black dark:text-white">
              aceleração patrimonial
            </Highlight>
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
