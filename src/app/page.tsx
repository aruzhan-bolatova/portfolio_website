'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, Menu, X, File, Download} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Presentation } from '@/components/presentation';
import AllProjects from '@/components/projects/AllProjects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Resume from '@/components/resume';
import Experience from '@/components/experience';
import Education from '@/components/education';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        if (section === 'home') return window.scrollY < 100;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded-full border bg-white/80 backdrop-blur-lg dark:bg-neutral-900/80 dark:border-neutral-700">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 px-4 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-black text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 rounded-full"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          {isOpen && (
            <div className="absolute top-14 left-0 right-0 bg-white/90 backdrop-blur-lg rounded-2xl border shadow-lg dark:bg-neutral-900/90 dark:border-neutral-700">
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  const router = useRouter();

  const goToChat = () => router.push('/chat');

  // Animation variants
  const fadeInUp = { 
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };

  const staggerContainer = { 
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    // Preload chat assets
    const img = new window.Image();
    img.src = '/memoji-landing.png';
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-10">
        {/* Internship Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => router.push('/chat?query=' + encodeURIComponent('Are you looking for an internship?'))}
            className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Looking for a talent?
          </button>
        </div>

        {/* Main Hero Content */}
        <motion.div
          className="flex flex-col items-center text-center pt-50"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Name with Photo in Between */}
          <motion.div variants={fadeInUp} className="mb-8 flex-col">
            {/* Name and Photo on One Line */}
            <div className="flex items-end justify-center">
              {/* First Name */}
              <h1 className="text-8xl font-bold sm:text-8xl md:text-8xl lg:text-8xl">
                ARUZHAN BOLATOVA
              </h1>
              
              {/* Profile Photo */}
              {/* <div className="relative h-60 w-60 sm:h-60 sm:w-60 md:h-60 md:w-60">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/aru-landing.png"
                    alt="Aruzhan Bolatova"
                    width={500}
                    height={700}
                    priority
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div> */}
              
              {/* Last Name */}
                  {/* <h1 className="text-8xl font-bold sm:text-8xl md:text-8xl lg:text-8xl">
                 BOLATOVA
              </h1> */}
            </div>
            
            <div className="flex mb-4 justify-between w-full">
              <h3 className="text-muted-foreground text-xl"> 22 years old</h3>
              <h3 className="text-muted-foreground text-xl"> Abu Dhabi, UAE</h3>
            </div>
            
            {/* Title and Details */}
            {/* <h2 className="text-secondary-foreground text-3xl font-semibold md:text-3xl">
              Computer Science Student at NYU Abu Dhabi
            </h2> */}
          </motion.div>

          {/* Code Block */}
          <motion.div variants={fadeInUp} className="mb-12 w-full max-w-2xl">
            <div className="rounded-lg bg-neutral-900 p-6 text-left font-mono text-sm shadow-xl border border-neutral-700">
              <div className="flex items-center mb-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-neutral-100 leading-relaxed">
<span className="text-blue-400">const</span> <span className="text-yellow-300">Aruzhan</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span> <br />
  <span className="text-green-300">   from</span><span className="text-white">:</span> <span className="text-red-300">"Kazakhstan🇰🇿"</span><span className="text-white">,</span> <br />
  <span className="text-green-300">   pronouns</span><span className="text-white">:</span> <span className="text-red-300">"she"</span> <span className="text-purple-400">|</span> <span className="text-red-300">"her"</span><span className="text-white">,</span> <br />
  <span className="text-green-300">   code</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-yellow-300">TypeScript</span><span className="text-white">,</span> <span className="text-yellow-300">Javascript</span><span className="text-white">,</span><span className="text-yellow-300">Python</span><span className="text-white">,</span> <span className="text-yellow-300">C/C++</span><span className="text-white">,</span> <span className="text-yellow-300">Python</span><span className="text-white">, </span><span className="text-yellow-300">HTML/CSS</span><span className="text-white">],</span><br/>
  <span className="text-green-300">   favFrameworks</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-yellow-300">Next.js</span><span className="text-white">,</span> <span className="text-yellow-300">React</span><span className="text-white">,</span> <span className="text-yellow-300">React Native</span><span className="text-white">,</span> <span className="text-yellow-300">Flask</span><span className="text-white">,</span> <span className="text-yellow-300">FastAPI</span><span className="text-white">],</span><br/>
  <span className="text-green-300">   databases</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-yellow-300">PostgreSQL</span><span className="text-white">,</span> <span className="text-yellow-300">MySQL</span><span className="text-white">,</span> <span className="text-yellow-300">MongoDB</span><span className="text-white">,</span> <span className="text-yellow-300">Firebase</span><span className="text-white">],</span><br/>
  <span className="text-green-300">   DevOps</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-yellow-300">Git</span><span className="text-white">,</span> <span className="text-yellow-300">Docker</span><span className="text-white">,</span> <span className="text-yellow-300">Render</span><span className="text-white">,</span> <span className="text-yellow-300">GCP</span><span className="text-white">],</span><br/>
<span className="text-white">{'}'}</span>
              </pre>
            </div>
          </motion.div>

          {/* Action Buttons Row */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Chat with Digital Twin Button */}
              <button
                onClick={goToChat}
                className="bouton-talk group relative"
              >
                <span className="flex items-center justify-center px-6 py-3 text-lg font-medium text-black border-2 border-black rounded-full overflow-hidden transition-all duration-500 ease-out hover:border-[rgba(53,53,240,0.2)] hover:bg-gradient-to-r hover:from-[#B4B4DD] hover:via-[#B9C9E7] hover:to-[#BAE8E5] transform hover:scale-105">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with my Digital Twin
                </span>
              </button>

              {/* Download Resume Button */}
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume_aru.pdf';
                  link.download = 'resume_aru.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bouton-talk group relative"
              >
                <span className="flex items-center justify-center px-6 py-3 text-lg font-medium text-black border-2 border-black rounded-full overflow-hidden transition-all duration-500 ease-out hover:border-[rgba(53,53,240,0.2)] hover:bg-gradient-to-r hover:from-[#B4B4DD] hover:via-[#B9C9E7] hover:to-[#BAE8E5] transform hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </span>
              </button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen py-20 px-4 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">
              Get to know me better
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Presentation />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl mb-4">My Projects</h2>
            <p className="text-muted-foreground text-lg">
              Explore my work and creations
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AllProjects />
          </motion.div>
        </div>
      </section>

       {/* Experience Section */}
       <section id="experience" className="relative min-h-screen py-20 px-4 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl mb-4">My Work Experience</h2>
            <p className="text-muted-foreground text-lg">
              A glimpse of my work journey and achievements
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Experience />
          </motion.div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="relative min-h-screen py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl mb-4">My Education</h2>
            <p className="text-muted-foreground text-lg">
              Academic journey and professional certifications
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Education />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl mb-4">My Skills</h2>
            <p className="text-muted-foreground text-lg">
              Technologies and expertise I work with
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Skills />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen py-20 px-4 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Let's connect and work together
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </div>
      </section>
      <section id="resume" className="relative min-h-screen py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Resume />
          </motion.div>
        </div>
      </section>

      <FluidCursor />
    </div>
  );
}
