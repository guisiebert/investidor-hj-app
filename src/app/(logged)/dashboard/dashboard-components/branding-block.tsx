import { Card } from "@/components/ui/card";

export function BrandingBlock() {
  // bg-gradient-to-tr from-red-100 to-white
  return (
    <Card className="col-span-2 hidden h-32 flex-col justify-center rounded-xl p-6 text-white sm:flex">
      <h1 className="text-xl font-semibold md:text-2xl">Investir é agora.</h1>
      <h1 className="text-2xl font-bold md:text-3xl">Crescer é hj.</h1>
    </Card>
  );
}
