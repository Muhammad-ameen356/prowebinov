import { Hero } from '@/components/home/hero';
import { FeaturesSection } from '@/components/home/features-section';
import { ServicesSection } from '@/components/home/services-section';
import { CtaSection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-16">
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <CtaSection />
    </div>
  );
}
