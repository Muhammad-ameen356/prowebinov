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

const initialState: QuoteFormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Submit Request
    </Button>
  );
}

export function QuoteRequestForm() {
  const [state, formAction] = useActionState(submitQuoteRequest, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          title: 'Error',
          description: state.message + ': ' + state.issues.join(', '),
          variant: 'destructive',
        });
      } else if (state.message.includes('success')) {
         toast({
          title: 'Success',
          description: state.message,
        });
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);


  return (
    <Card>
      <form action={formAction}>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required defaultValue={state.fields?.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required defaultValue={state.fields?.email} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" defaultValue={state.fields?.phone} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project, your goals, and your budget."
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
