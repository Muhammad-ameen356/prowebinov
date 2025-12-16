import { Zap, ShieldCheck, BarChart } from "lucide-react";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations("home");

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: t("features.technology.title"),
      description: t("features.technology.description"),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: t("features.customer.title"),
      description: t("features.customer.description"),
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: t("features.results.title"),
      description: t("features.results.description"),
    },
  ];

  return (
    <section className="container py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="bg-primary/10 p-4 rounded-full">{feature.icon}</div>
            <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
