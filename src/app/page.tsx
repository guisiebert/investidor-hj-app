import { auth } from "@/server/auth";
import { api } from "@/trpc/server";
import Image from "next/image";
// import logo from "@/assets/HJ-logo-v1.png";
import logo from "@/../public/logo-navbar.png";
import { Button } from "@/components/ui/button";
import { HeroHighlightDemo } from "@/components/HeroHighlight";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
  }

  return (
    <div>
      <nav className="flex h-20 items-center justify-between px-16 shadow-sm">
        <div className="flex items-center">
          <Image
            className="h-8 w-auto"
            alt="Logo"
            src={logo}
            width={220}
            height={48}
          />
        </div>
        <Button variant="outline">Login</Button>
      </nav>
      <HeroHighlightDemo />
    </div>
  );
}
