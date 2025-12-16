import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/achievements/project-card";
import { useTranslations } from "next-intl";

export default function AchievementsPage() {
  const t = useTranslations("achievementsPage");

  return (
    <section className="container py-12 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
          {t("title")}
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
