export type Lesson = {
  title: string
  duration?: string
  description?: string
  youTubeId: string
}

export type Course = {
  title: string
  slug: string
  lessons: Lesson[]
}

export const courses: Course[] = [
  {
    title: "CsF - Comprar sem Financiar",
    slug: "csf",
    lessons: [
      {
        title: "Onde você chegará com essa jornada?",
        youTubeId: "iDtP5cNxzrc",
        duration: "5:30",
        description:
          "Um financiamento possui custos ocultos que você provavelmente não conhece. Aprenda como calculá-los nessa aula.",
      },
      {
        title: "O cenário financeiro do Brasil",
        youTubeId: "5x1OI_Adlz8",
        duration: "9:32",
        description:
          "Um financiamento possui custos ocultos que você provavelmente não conhece. Aprenda como calculá-los nessa aula.",
      },
      {
        title: "Calculando o custo real do financiamento",
        youTubeId: "-fDnlY_FhNo",
        duration: "5:15",
        description:
          "Um financiamento possui custos ocultos que você provavelmente não conhece. Aprenda como calculá-los nessa aula.",
      },
      {
        title: "Comprar realmente é melhor que alugar?",
        youTubeId: "4fq_C1sdlM4",
        duration: "2:40",
        description:
          "Um financiamento possui custos ocultos que você provavelmente não conhece. Aprenda como calculá-los nessa aula.",
      },
      {
        title: "Estratégia A+C",
        youTubeId: "KT-gOefNa7I",
        duration: "8:55",
        description:
          "Um financiamento possui custos ocultos que você provavelmente não conhece. Aprenda como calculá-los nessa aula.",
      },
      {
        title: "Vantagens da estratégia",
        youTubeId: "U2w8RjyBftY",
        duration: "5:30",
        description:
          "Um financiamento possui custos ocultos que você provavelmente não conhece. Aprenda como calculá-los nessa aula.",
      },
      {
        title: "Como aplicar ao seu objetivo",
        youTubeId: "XXYxoZObRlk",
        duration: "1:32",
        description:
          "Um financiamento possui custos ocultos que você provavelmente não conhece. Aprenda como calculá-los nessa aula.",
      },
    ],
  },
]
