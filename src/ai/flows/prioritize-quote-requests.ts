'use server';

/**
 * @fileOverview A flow to prioritize quote requests based on the project description.
 *
 * - prioritizeQuoteRequest - A function that prioritizes quote requests.
 * - PrioritizeQuoteRequestInput - The input type for the prioritizeQuoteRequest function.
 * - PrioritizeQuoteRequestOutput - The return type for the prioritizeQuoteRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeQuoteRequestInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project provided by the user.'),
});

export type PrioritizeQuoteRequestInput = z.infer<typeof PrioritizeQuoteRequestInputSchema>;

const PrioritizeQuoteRequestOutputSchema = z.object({
  priorityScore: z
    .number()
    .describe(
      'A score between 0 and 1 indicating the priority of the quote request, with 1 being the highest priority.'
    ),
  reason: z.string().describe('The reason for the assigned priority score.'),
});

export type PrioritizeQuoteRequestOutput = z.infer<typeof PrioritizeQuoteRequestOutputSchema>;

export async function prioritizeQuoteRequest(
  input: PrioritizeQuoteRequestInput
): Promise<PrioritizeQuoteRequestOutput> {
  return prioritizeQuoteRequestFlow(input);
}

const prioritizeQuoteRequestPrompt = ai.definePrompt({
  name: 'prioritizeQuoteRequestPrompt',
  input: {schema: PrioritizeQuoteRequestInputSchema},
  output: {schema: PrioritizeQuoteRequestOutputSchema},
  prompt: `You are an AI assistant that helps prioritize incoming quote requests for a web development agency.

  Based on the project description provided by the user, you will assign a priority score between 0 and 1, with 1 being the highest priority.
  Also explain your reasoning for the score, including how well defined the request is, and how likely it is to turn into a real project.

  Project Description: {{{projectDescription}}}
  `,
});

const prioritizeQuoteRequestFlow = ai.defineFlow(
  {
    name: 'prioritizeQuoteRequestFlow',
    inputSchema: PrioritizeQuoteRequestInputSchema,
    outputSchema: PrioritizeQuoteRequestOutputSchema,
  },
  async input => {
    const {output} = await prioritizeQuoteRequestPrompt(input);
    return output!;
  }
);
