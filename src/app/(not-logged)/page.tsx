import { api } from "@/trpc/server";
import Image from "next/image";
import logo from "@/../public/logo-navbar.png";
import { Button } from "@/components/ui/button";
import { HeroHighlightDemo } from "@/components/HeroHighlight";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <div>
      <nav className="-mb-20 flex h-20 items-center justify-between px-16 shadow-sm">
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
      <HeroHighlightDemo />
    </div>
  );
}
