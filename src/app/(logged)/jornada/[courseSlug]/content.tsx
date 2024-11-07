"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoPlayer } from "@/components/VideoPlayer";
import { LessonDescription } from "@/components/LessonDescription";
import { CtaBlock } from "@/components/CtaBlock";
import { Course, courses } from "@/data/courses";

export default function Content({ courseData }: { courseData: Course }) {
  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl">
        <main className="space-y-4">
          {/* CONTENT DIV */}
          <div className="flex gap-4">
            {/* VIDEO AND DESCRIPTION */}
            <div className="w-full">
              {/* VIDEO CARD */}
              <Card className="mb-8 bg-card">
                <CardContent className="p-4">
                  <VideoPlayer
                    videoId={courseData.lessons[currentLesson]!.youTubeId}
                  />
                </CardContent>
              </Card>

              {/* DESCRIPTION + CTA */}
              <div className="flex gap-4">
                <LessonDescription
                  lessonData={courseData.lessons[currentLesson]!}
                  lessonNumber={currentLesson}
                />

                <CtaBlock />
              </div>
            </div>

            {/* LESSONS MENU */}
            <Card className="w-[400px] border-none bg-gray-900/50">
              <CardHeader>
                <CardTitle className="text-lg">Conteúdo da Jornada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {courseData.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-2 ${
                      index === currentLesson
                        ? "border border-green-500/20 bg-green-500/10"
                        : "hover:bg-white/5"
                    } cursor-pointer transition-colors`}
                    onClick={() => setCurrentLesson(index)}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span
                          className={`text-xs ${
                            index === currentLesson
                              ? "text-green-500"
                              : "text-gray-400"
                          }`}
                        >
                          Sessão {index + 1}
                        </span>
                        <h3
                          className={`text-sm font-medium ${
                            index === currentLesson ? "text-green-500" : ""
                          }`}
                        >
                          {lesson.title}
                        </h3>
                      </div>
                      <span className="text-xs text-gray-400">
                        {lesson.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
