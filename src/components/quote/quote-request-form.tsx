'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitQuoteRequest, type QuoteFormState } from '@/app/[locale]/quote/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const initialState: QuoteFormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations('quote.quoteForm');
  
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {t('submit')}
    </Button>
  );
}

export function QuoteRequestForm() {
  const [state, formAction] = useActionState(submitQuoteRequest, initialState);
  const { toast } = useToast();
  const t = useTranslations('quote.quoteForm');

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          title: t('toast.error'),
          description: state.message + ': ' + state.issues.join(', '),
          variant: 'destructive',
        });
      } else if (state.message.includes('success')) {
        toast({
          title: t('toast.success'),
          description: state.message,
        });
      } else {
        toast({
          title: t('toast.error'),
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast, t]);

  return (
    <Card>
      <form action={formAction}>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="name">{t('name')}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t('namePlaceholder')}
              required
              defaultValue={state.fields?.name}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t('email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              required
              defaultValue={state.fields?.email}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t('phone')}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t('phonePlaceholder')}
              defaultValue={state.fields?.phone}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t('message')}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t('messagePlaceholder')}
              className="min-h-[150px]"
              required
              defaultValue={state.fields?.message}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
