import { QuoteRequestForm } from "@/components/quote/quote-request-form";
import { useTranslations } from "next-intl";

export default function QuotePage() {
  const t = useTranslations("quote");

  return (
    <section className="container py-12 md:py-24">
      <div className="max-w-xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
            {t("title")}
          </h1>
          <p className="text-muted-foreground md:text-xl">{t("description")}</p>
        </div>

        <QuoteRequestForm />
      </div>
    </section>
  );
}
