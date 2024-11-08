import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChartLineIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/data/links";

export function CtaBlock() {
  return (
    <Link href={links.form} target="_blank">
      <Card className="border-2 border-black bg-gradient-to-r from-violet-800/30 to-red-900 p-4 text-gray-100 hover:border-violet-800 md:max-w-[400px]">
        <CardContent className="-mb-4 mt-2 flex h-full flex-col justify-between gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-gradient-to-t from-gray-800 to-gray-900">
            <ChartLineIcon />
          </div>
          <h1 className="font min-w-60 text-xl">
            Aplique essa estratégia aos seus objetivos.
          </h1>
          <Button
            variant={"outline"}
            className="hover:bg-white hover:text-black"
          >
            Comece hj
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
