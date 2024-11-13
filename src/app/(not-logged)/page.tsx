import Image from "next/image";
import logo from "@/../public/logo-navbar.png";

import { Highlight } from "@/components/ui/hero-highlight";
import LoginForm from "@/components/login-form";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default async function Home() {
  return (
    <div className="relative">
      <nav className="absolute flex h-20 w-full items-center justify-center px-16 shadow-sm md:justify-between">
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
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex max-w-2xl flex-col space-y-6">
          <h1 className="text-center text-3xl font-semibold leading-normal md:text-5xl">
            Inicie hoje sua jornada para <br />
            <Highlight className="text-black dark:text-white">
              melhores
            </Highlight>
            investimentos
          </h1>
          <LoginForm />
        </div>
      </div>
      <BackgroundBeams className="-z-10" />
    </div>
  );
}
