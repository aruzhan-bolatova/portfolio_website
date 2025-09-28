import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Foodify',
    description:
      "Foodify 🍽️ – Your personal foodie compass! Discover top-rated eats around NYU Manhattan with a swipe. Foodify fuses Yelp and Google reviews, smart filters, and map views to help you explore, curate, and share restaurant “playlists” your way. Swipe, save, and savor.",
    techStack: [
      'Firebase',
      'FastAPI',
      'React',
      'TailwindCSS',
      'shadcn-ui',
      'Yelp API',
      'Google Maps API',
      'Google Places API',
    ],
    date: '2024',
    links: [
      {
        name: 'Website',
        url: 'https://foodify.pro/',
      },
      {
        name: 'Pitch Deck',
        url: 'https://drive.google.com/file/d/1YsIEyg6Vuu-0r58LjF7s29zNFYIjghhv/view?usp=sharing',
      },
      {
        name: 'Backend Repository',
        url: 'https://github.com/ffang0224/ppds-team-5',
      },
      {
        name: 'Frontend Repository',
        url: 'https://github.com/ffang0224/foodify-app',
      },
    ],
    images: [
      {
        src: '/foodify1.png',
        alt: 'Foodify login page',
      },
      {
        src: '/foodify2.png',
        alt: 'Foodify landing page',
      },
      {
        src: '/foodify3.png',
        alt: 'Foodify User Lists page',
      },
      {
        src: '/foodify4.png',
        alt: 'Tinder-style Discover page',
      },
      {
        src: '/foodify5.png',
        alt: 'Connect with foodies page',
      },
      {
        src: '/foodify6.png',
        alt: 'Tailored list of restaurants',
      },
    ],
  },
  {
    title: 'Take Your Vitamins',
    description:
      "Take Your Vitamins 💊 – Your personalized vitamin companion! Track your daily intake, set goals, and stay on top of your health. Take Your Vitamins is a fun and interactive way to manage your vitamins and supplements.",
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'shadcn-ui', 'Vercel AI SDK', 'OpenAI API', 'Langchain'],
    date: '2025',
    links: [
      {
        name: 'Website',
        url: '',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aruzhan-bolatova/TakeYourVitamins.git',
      },
      {
        name: 'Pitch Deck',
        url: 'https://drive.google.com/file/d/1SX1GtY8rVxDCUjKjE_Gtjp8W-DEp_fV-/view?usp=sharing',
      }
    ],
    images: [
      {
        src: '/tyv1.png',
        alt: 'Take Your Vitamins landing page',
      },
      {
        src: '/tyv2.png',
        alt: 'Take Your Vitamins comparison page',
      },
      {
        src: '/tyv3.png',
        alt: 'Take Your Vitamins comparison page',
      },
      {
        src: '/tyv4.png',
        alt: 'Take Your Vitamins comparison page',
      },
    ],
  },
  {
    title: 'Voxy',
    description: "Voxy is an augmentative and alternative communication tool for speech-impaired kids with AI layer for interaction analysis and real-time vocabulary suggestions. Won the Special Recognition Award in NYUAD Slush'D AI Hackathon for 'Voxy' project, resulting in Top 15 out of 100+ teams.",
    techStack: [
      'Next.js',
      'MongoDB',
      'Mongoose',
      'TailwindCSS',
      'OpenAI API'
    ],
    date: '2025',
    links: [
      {
        name: 'Website',
        url: '',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aruzhan-bolatova/Voxy-SlushD-Hackathon.git',
      },
      {
        name: 'Hackathon Pitch Deck',
        url: 'https://youtu.be/uN4RCoi4ndI'
      },
      {
        name: 'Youtube Video - Demo',
        url: 'https://youtu.be/vzWKcHTsUKw?si=gOhA0bQ-kOS8ctsW',
      }
    ],
    images: [
      {
        src: '/voxy1.png',
        alt: 'Landing Page of Voxy',
      },
      {
        src: '/voxy2.png',
        alt: 'Routine Builder Page of Voxy',
      },
      {
        src: '/voxy3.png',
        alt: 'Alternative Communication Tool Page of Voxy',
      },
      {
        src: '/voxy4.png',
        alt: 'AI Interaction Analysis Page of Voxy and Chatbot',
      },
      {
        src: '/voxy5.png',
        alt: 'Special Recognition Award of Voxy',
      },
    ],
  },
  {
    title: 'GradSearch',
    description:
      'GradSearch is a job matching platform that allows employers to post entry-level jobs and users apply for them. It has JobAI Chatbot for job suggestions based on user profile and can also assist with job application process. Developed this project alone for education purposes to learn Node.js and Express.js.',
    techStack: ['Node.js', 'Express.js', 'Next.js', 'TypeScript', 'MongoDB', 'TailwindCSS', 'shadcn-ui'],
    date: '2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aruzhan-bolatova/job-matching-portal.git',
      },
      {
        name: 'Youtube Video - Demo',
        url: 'https://youtu.be/ljjoKwz0eK4',
      }
    ],
    images: [
      {
        src: '/gradsearch1.png',
        alt: 'GradSearch Landing Page',
      },
      {
        src: '/gradsearch2.png',
        alt: 'GradSearch Browse Jobs Page',
      },
      {
        src: '/gradsearch3.png',
        alt: 'GradSearch Job Application Page',
      },
      {
        src: '/gradsearch4.png',
        alt: 'GradSearch Employer Dashboard',
      },
      {
        src: '/gradsearch5.png',
        alt: 'GradSearch Post Job Page',
      },
    ],
  },
  {
    title: 'Games Catalogue',
    description:
      "Games Catalogue is compilation of my favorite games and their details. Developed this project alone for education purposes to Python and Processing.",
    techStack: [
      'Python',
      'Processing'
    ],
    date: '2022',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/aruzhan-bolatova/my_games.github.io.git',
      }
    ],
    images: [
      {
        src: '/game1.png',
        alt: 'Datai landing page',
      },
      {
        src: '/game2.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/game3.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/game4.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/game5.png',
        alt: 'Datai chatbot',
      }
    ],
  },
  {
    title: 'BeFit Chatbot',
    description:
    "BeFit is an AI-powered personal health chatbot that provides reliable nutrition and exercise recommendations. By integrating OpenAI’s LLM with the Edamam B2B API, BeFit ensures that users receive accurate, evidence-based insights tailored to their dietary and fitness needs.",
    techStack: ['Python', 'JavaScript', 'TypeScript', 'Docker', 'OnDemand', 'Edamam B2B API'],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aruzhan-bolatova/Befit_Chatbot.git',
      },
      {
        name: 'Demo Video',
        url: 'https://drive.google.com/file/d/1PsJyeNMLKFv2lh7asG-jKV4hNOKBpjVg/view?usp=sharing',
      }
    ],
    images: [
      {
        src: '/befit1.png',
        alt: 'BeFit Chatbot page',
      },
      {
        src: '/befit2.png',
        alt: 'BeFit Chatbot: Nutrition page',
      },
      {
        src: '/befit3.png',
        alt: 'BeFit Chatbot: Physical Activity page',
      }
    ],
  },
  {
    title: 'Old Portfolio',
    description:
      'My previous traditional portfolio built with vanilla HTML, CSS and JS with GSAP animations for a smooth and interactive user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    date: '2022',
    links: [
      {
        name: 'Website',
        url: ' https://aruzhan-bolatova.github.io/my-portfolio.github.io/',
      },
      {
        name: 'GitHub',
        url: ' https://github.com/aruzhan-bolatova/my-portfolio.github.io.git',
      },
    ],
    images: [
      {
        src: '/oldport1.png',
        alt: 'Old Portfolio landing page',
      },
      {
        src: '/oldport2.png',
        alt: 'Old Portfolio projects',
      },
      {
        src: '/oldport3.png',
        alt: 'Old Portfolio projects',
      }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Full-Stack Project',
    title: 'Foodify',
    src: '/app_image.jpg',
    content: <ProjectContent project={{ title: 'Foodify' }} />,
  },
  {
    category: 'Full-Stack Project',
    title: 'Take Your Vitamins',
    src: '/tyvpreview.png',
    content: <ProjectContent project={{ title: 'Take Your Vitamins' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Voxy',
    src: '/voxy-preview.png',
    content: <ProjectContent project={{ title: 'Voxy' }} />,
  },
  {
    category: 'Full-Stack Project',
    title: 'GradSearch',
    src: '/gradsearch-preview.png',
    content: <ProjectContent project={{ title: 'GradSearch' }} />,
  },
  {
    category: 'Game Development',
    title: 'Games Catalogue',
    src: '/gamepreview.png',
    content: <ProjectContent project={{ title: 'Games Catalogue' }} />,
  },
  {
    category: 'Hackathon Project',
    title: 'BeFit Chatbot',
    src: '/befit-preview.png',
    content: <ProjectContent project={{ title: 'BeFit Chatbot' }} />,
  },
  {
    category: 'Web Development',
    title: 'Old Portfolio',
    src: '/oldport1.png',
    content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  },
];
