import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship or job I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Duration**: Full-time employment 
- 🌍 **Location**: Preferably **UAE** or anywhere in the **Europe or USA** if visa is sponsored
- 🧑‍💻 **Focus**: AI development, full-stack web apps, SaaS, agentic workflows
- 🛠️ **Preferred Stack**: Python, React/Next.js, Tailwind CSS, TypeScript, Langchain, SQL/NoSQL etc.
- 💼 **Visa**: I hold Kazakhstani citizenship and UAE residency so I might require visa sponsorship for other countries*
- ✅ **What I bring**: Real experience in software development, AI and ML, and in R&D projects
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: ab10028@nyu.edu  
- LinkedIn: [linkedin.com/in/aruzhan-bolatova](https://www.linkedin.com/in/aruzhan-bolatova/)
- GitHub: [github.com/aruzhan-bolatova](https://github.com/aruzhan-bolatova)

Let's build cool stuff together ✌️
    `;
  },
});
