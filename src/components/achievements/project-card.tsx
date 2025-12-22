"use client";

import Image from "next/image";
import type { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <Card className="overflow-hidden group">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={t(project.titleKey)}
          data-ai-hint={project.imageHint}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle>{t(project.titleKey)}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>{t(project.descriptionKey)}</CardDescription>
      </CardContent>
    </Card>
  );
}
