import { type Course, courses } from "@/data/courses";
import Content from "./content";
import { notFound } from "next/navigation";

export default async function VideoPlayerPage({
  params,
}: {
  params: Promise<{
    courseSlug: string;
  }>;
}) {
  const { courseSlug } = await params;

  const courseData = courses.find((course) => course.slug === courseSlug);

  if (!courseData) {
    notFound();
  }

  return <Content courseData={courseData} />;
}
