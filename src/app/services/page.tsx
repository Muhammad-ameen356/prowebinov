import { services } from '@/lib/data';
import { ServiceCard } from '@/components/services/service-card';

export default function ServicesPage() {
  return (
    <section className="container py-12 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Our Services</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
          We offer a wide range of services to help your business succeed online. From web development to marketing, we have you covered.
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
