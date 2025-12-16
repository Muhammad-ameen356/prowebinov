import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-8 md:py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
          {t("title")}
        </h2>

        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl my-4">
          {t("description")}
        </p>

        <Button asChild size="lg">
          <Link href="/quote">{t("button")}</Link>
        </Button>
      </div>
    </section>
  );
}
