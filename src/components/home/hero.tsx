import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="container py-8 md:py-16 bg-secondary/50 rounded-lg">
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter max-w-3xl">
          {t("heroTitle")}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          {t("heroDescription")}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild size="lg">
            <Link href="/quote">
              {t("getFreeQuote")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/achievements">{t("ourWork")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
