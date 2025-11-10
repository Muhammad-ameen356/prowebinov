'use server';

/**
 * @fileOverview Summarizes quote requests for administrators.
 *
 * - summarizeQuoteRequest - A function that summarizes a quote request.
 * - SummarizeQuoteRequestInput - The input type for the summarizeQuoteRequest function.
 * - SummarizeQuoteRequestOutput - The return type for the summarizeQuoteRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeQuoteRequestInputSchema = z.object({
  name: z.string().describe('The name of the person requesting the quote.'),
  email: z.string().email().describe('The email address of the person requesting the quote.'),
  phone: z.string().describe('The phone number of the person requesting the quote.'),
  message: z.string().describe('The detailed project description from the quote request.'),
});
export type SummarizeQuoteRequestInput = z.infer<typeof SummarizeQuoteRequestInputSchema>;

const SummarizeQuoteRequestOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the quote request details.'),
});
export type SummarizeQuoteRequestOutput = z.infer<typeof SummarizeQuoteRequestOutputSchema>;

export async function summarizeQuoteRequest(input: SummarizeQuoteRequestInput): Promise<SummarizeQuoteRequestOutput> {
  return summarizeQuoteRequestFlow(input);
}

const summarizeQuoteRequestPrompt = ai.definePrompt({
  name: 'summarizeQuoteRequestPrompt',
  input: {schema: SummarizeQuoteRequestInputSchema},
  output: {schema: SummarizeQuoteRequestOutputSchema},
  prompt: `Summarize the following quote request in a concise manner, highlighting key details from the project description.

Name: {{{name}}}
Email: {{{email}}}
Phone: {{{phone}}}
Project Description: {{{message}}}`,
});

const summarizeQuoteRequestFlow = ai.defineFlow(
  {
    name: 'summarizeQuoteRequestFlow',
    inputSchema: SummarizeQuoteRequestInputSchema,
    outputSchema: SummarizeQuoteRequestOutputSchema,
  },
  async input => {
    const {output} = await summarizeQuoteRequestPrompt(input);
    return output!;
  }
);
