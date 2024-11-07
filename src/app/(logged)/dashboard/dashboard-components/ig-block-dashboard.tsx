import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
// import thumb from "@/assets/consorcio-e-investimento.jpg";
import { links } from "@/data/links";

export function IgBlockDashboard() {
  return (
    <Card className="group relative flex flex-col items-center justify-center overflow-hidden md:col-span-2">
      <Link
        href={links.ig_post}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
      >
        <span className="sr-only">View on Instagram</span>
      </Link>
      <Image
        layout="fill"
        objectFit="cover"
        alt=""
        src={"/thumbnails/consorcio-e-investimento.jpg"}
        className="z-0 transition-opacity duration-300 group-hover:opacity-20"
        quality={90}
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <PlayCircle
          size={60}
          strokeWidth={1}
          className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      </div>
      <CardContent className="relative z-10 flex h-full w-full items-end justify-center gap-2">
        <p className="pb-4 font-semibold text-white">@canseideconsorcio</p>
      </CardContent>
    </Card>
  );
}
