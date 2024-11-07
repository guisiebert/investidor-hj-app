import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ChartLineIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { links } from "@/data/links"

export function CtaBlock() {
  return (
    <Link href={links.form} target="_blank">
      <Card className="p-4 max-w-[400px] border-2text-gray-100 border-violet-800 hover:bg-gradient-to-r hover:border-black from-violet-800/30 to-red-900">
        <CardContent className="mt-2 gap-4 -mb-4 justify-between flex flex-col h-full">
          <div className="bg-gradient-to-t from-gray-800 to-gray-900 w-9 h-9 rounded flex items-center justify-center">
            <ChartLineIcon />
          </div>
          <h1 className="text-xl font min-w-60">
            Aplique essa estratégia aos seus objetivos.
          </h1>
          <Button
            variant={"outline"}
            className="hover:text-black hover:bg-white"
          >
            Comece hj
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
