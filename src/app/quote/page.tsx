import { QuoteRequestForm } from '@/components/quote/quote-request-form';

export default function QuotePage() {
  return (
    <section className="container py-12 md:py-24">
      <div className="max-w-xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Request a Quote</h1>
          <p className="text-muted-foreground md:text-xl">
            Tell us about your project, and we'll get back to you with a personalized quote.
          </p>
        </div>
        <QuoteRequestForm />
      </div>
    </section>
  );
}
