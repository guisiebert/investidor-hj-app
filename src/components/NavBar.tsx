import { LogOutIcon, UserCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/data/links";
export default function NavBar() {
  return (
    <nav className="mx-auto my-8 flex h-10 max-w-6xl items-center justify-between">
      <div className="flex w-1/3 gap-2 font-semibold text-gray-300">
        <Link href={"/"}>
          <Button variant={"link"}>Início</Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"link"}>Jornadas</Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"link"}>Calculadora</Button>
        </Link>
      </div>

      <div className="h-full w-1/3">
        <Image
          className="h-full w-auto object-contain" // <<<< THIS IS THE MAGIC
          src={"/logo-navbar.png"}
          width={100}
          height={100}
          alt="Investidor Hoje Logo"
          priority
        />
      </div>

      <div className="flex flex-row items-center gap-2">
        <Link href={links.form} target="_blank">
          <Button className="bg-violet-600 font-semibold text-white hover:bg-violet-700">
            Invista hoje
          </Button>
        </Link>
        <UserCircle2 />
        <LogOutIcon />
      </div>
    </nav>
  );
}
