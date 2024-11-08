import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HelloName } from "./dashboard-components/hello-name";
import { CtaBlockDashboard } from "./dashboard-components/cta-block-dashboard";
import { IgBlockDashboard } from "./dashboard-components/ig-block-dashboard";
import { BrandingBlock } from "./dashboard-components/branding-block";
import { CsfBlockDashboard } from "./dashboard-components/jornada-csf-block";
import { AceleraBlockDashboard } from "./dashboard-components/jornada-acelera-block";
import { auth } from "@/server/auth";

export default async function BentoGridDemo() {
  const session = await auth();
  return (
    <div className="flex flex-col gap-4">
      <BentoGrid className="mx-auto max-w-4xl px-4">
        <BrandingBlock />

        <HelloName userName={session?.user.name} />

        <BentoGridItem
          header={<CsfBlockDashboard />}
          title={"Jornada CsF - Comprar sem Financiar"}
          description={
            "Descubra os segredos para driblar os altos custos do financiamento."
          }
          className="sm:col-span-4 md:col-span-4"
        />

        <BentoGridItem
          header={<AceleraBlockDashboard />}
          title={"Aceleração Patrimonial"}
          description="EM BREVE: Jornada SpeedUP - Aceleração Patrimonial"
          className="opacity-40 sm:col-span-2 md:col-span-2"
        />

        <IgBlockDashboard />

        <CtaBlockDashboard />
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);
const items = [
  // {
  //   header: <Skeleton />,
  //   title: "Jornada Aceleração Patrimonial",
  //   description: "Em breve",
  //   //   "Understand the impact of effective communication in our lives.",
  //   // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Conteúdo Social",
  //   description: "Join the quest for understanding and enlightenment.",
  //   header: <Skeleton />,
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Conteúdo Social",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Invista HJ",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <CtaBlock />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
