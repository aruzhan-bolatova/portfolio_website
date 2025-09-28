
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Aru doing sports",
  parameters: z.object({}),
  execute: async () => {
    return "Here my best pictures of Aru doing sports! My favourite sports are volleyball and muay thai.";
  },
});