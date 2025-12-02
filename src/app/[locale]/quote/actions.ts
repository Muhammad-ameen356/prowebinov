'use server';

import { z } from 'zod';
import { prioritizeQuoteRequest } from '@/ai/flows/prioritize-quote-requests';
import { summarizeQuoteRequest } from '@/ai/flows/summarize-quote-requests';

const quoteSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type QuoteFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitQuoteRequest(
  prevState: QuoteFormState,
  data: FormData
): Promise<QuoteFormState> {
  const formData = Object.fromEntries(data);
  const parsed = quoteSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const { message, name, email, phone } = parsed.data;

    // Use AI to prioritize the request
    const prioritization = await prioritizeQuoteRequest({ projectDescription: message });
    console.log('Quote Priority:', prioritization);

    // Use AI to summarize the request for the admin
    const summary = await summarizeQuoteRequest({ name, email, phone: phone || '', message });
    console.log('Quote Summary:', summary);
    
    // Here you would typically:
    // 1. Save the quote request to your database
    // 2. Send an email notification to the sales team with the summary

    return { message: 'Thank you! Your quote request has been submitted successfully. We will get back to you shortly.' };
  } catch (error) {
    console.error('Error processing quote request:', error);
    return { message: 'An unexpected error occurred. Please try again later.' };
  }
}
