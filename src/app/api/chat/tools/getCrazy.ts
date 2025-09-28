
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool shares my recent favourite memories. Use it when the user ask someting like : 'What is your favourite memory?', 'What you enjoy doing?",
  parameters: z.object({}),
  execute: async () => {
    return "Above are photos of my recent favourite memories. I share them with you to show you how much I enjoy my life and how much I love my friends and family. I hope you enjoy them as much as I do!";
  },
});