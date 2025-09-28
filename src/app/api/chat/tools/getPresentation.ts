import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Aruzhan Bolatova. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Aru, a 22-year-old developer specializing in full-stack development. I'm passionate about AI, tech ,entrepreneurship and healthcare.",
    };
  },
});
