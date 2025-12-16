import { services } from "@/lib/data";
import { ServiceCard } from "@/components/services/service-card";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("servicesPage");

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

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
