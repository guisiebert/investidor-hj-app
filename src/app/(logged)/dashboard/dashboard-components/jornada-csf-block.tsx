import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
// import thumb from "@/assets/csf-thumb.jpg";
import { Button } from "@/components/ui/button";

export function CsfBlockDashboard() {
  return (
    <Card className="group relative flex h-40 flex-col items-center justify-center overflow-hidden">
      <Link href="/jornada/csf" className="absolute inset-0 z-20" />
      <Image
        layout="fill"
        objectFit="cover"
        alt=""
        src={"/thumbnails/csf-thumb.jpg"}
        className="z-0 transition-opacity duration-300 group-hover:opacity-20"
        quality={90}
      />
      <div className="z-10 flex w-full items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <PlayCircle size={40} strokeWidth={1} className="text-white" />
        <Button variant={"link"} className="font-semibold text-white">
          Ir para jornada
        </Button>
      </div>
    </Card>
  );
}
