import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ClockAlert, PlayCircle } from "lucide-react";
// import thumb from "@/assets/construct.jpg";

export function AceleraBlockDashboard() {
  return (
    <Card className="group relative flex h-40 flex-col items-center justify-center overflow-hidden">
      {/* <Link href="/jornada/csf" className="absolute inset-0 z-20" /> */}
      <Image
        layout="fill"
        objectFit="cover"
        alt=""
        src={"/thumbnails/construct.jpg"}
        className="z-0 transition-opacity duration-300 group-hover:opacity-20"
        quality={90}
      />
      <div className="z-10 flex w-full items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ClockAlert size={20} strokeWidth={1} className="text-white" />
        Em breve
      </div>
    </Card>
  );
}
