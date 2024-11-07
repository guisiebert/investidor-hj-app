import React from "react";
import { Course, courses } from "@/data/courses";
import Content from "./content";

export default function VideoPlayerPage({
  params: { courseSlug },
}: {
  params: {
    courseSlug: string;
  };
}) {
  const courseData = courses.filter(
    (course) => course.slug === courseSlug,
  )[0] as Course;

  return <Content courseData={courseData} />;
}
