import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { links } from "@/data/links"
import { ChartLineIcon } from "lucide-react"
import Link from "next/link"

export function CtaBlockDashboard() {
  return (
    <Link className="col-span-4" target="_blank" href={links.form}>
      <Card className=" p-4 border-2text-gray-100 border-violet-800 hover:bg-gradient-to-r hover:border-black from-violet-800/30 to-red-900">
        <CardContent className="mt-2 gap-4 -mb-4 justify-between flex flex-col h-full">
          <div className="bg-gradient-to-t from-gray-800 to-gray-900 w-9 h-9 rounded flex items-center justify-center">
            <ChartLineIcon />
          </div>
          <div className="">
            <h1 className="text-xl font-bold min-w-60">
              Quer uma estratégia personalizada <br /> para seus objetivos?
            </h1>
            <p className="">
              Entre em contato com nosso time e desenvolveremos <br /> a
              estratégia perfeita para seus planos pessoais.
            </p>
          </div>

          <Button
            variant={"outline"}
            className="hover:text-black hover:bg-white"
          >
            Sim, quero agendar uma reunião
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
