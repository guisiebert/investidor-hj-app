import { Lesson } from "@/data/courses"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function LessonDescription({
  lessonData,
  lessonNumber,
}: {
  lessonData: Lesson
  lessonNumber: number
}) {
  return (
    <Card className="p-4 max-w-[500px]">
      <CardContent className="mt-2 -mb-4 justify-center flex flex-col h-full">
        <CardTitle className="mb-2 text-gray-400">
          Aula 0{lessonNumber + 1}
        </CardTitle>
        <h1 className="text-2xl font-bold">{lessonData.title}</h1>
        <p className="text-muted-foreground">{lessonData.description}</p>
      </CardContent>
    </Card>
  )
}
