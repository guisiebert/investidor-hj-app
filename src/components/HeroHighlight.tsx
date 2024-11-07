"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import OutlineButton from "@/components/ui/outline-button";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="flex flex-col items-center gap-4">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-white md:text-4xl lg:text-5xl lg:leading-snug"
      >
        Inicie hoje mesmo sua <br />
        <Highlight className="text-black dark:text-white">
          aceleração patrimonial
        </Highlight>
      </motion.h1>
      <OutlineButton text="Acessar" url="/dashboard" />
    </HeroHighlight>
  );
}
