import { Card } from "@/components/ui/card"

export function BrandingBlock() {
  // bg-gradient-to-tr from-red-100 to-white
  return (
    <Card className="col-span-2 flex flex-col justify-center h-32 rounded-xl p-6 text-white">
      <h1 className=" font-semibold text-2xl">Investir é agora.</h1>
      <h1 className=" font-bold text-3xl">Crescer é hj.</h1>
    </Card>
  )
}
