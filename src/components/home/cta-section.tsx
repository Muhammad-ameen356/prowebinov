import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl my-4">
          Let's talk about how we can help you achieve your goals. Request a free, no-obligation quote today.
        </p>
        <Button asChild size="lg">
          <Link href="/quote">Request a Quote</Link>
        </Button>
      </div>
    </section>
  );
}
