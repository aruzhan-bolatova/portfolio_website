'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, time } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  type: 'internship' | 'full-time' | 'part-time' | 'freelance';
  description: string;
  technologies: string[];
  achievements?: string[];
  companyUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    position: 'Software Engineering Intern',
    company: 'Panio',
    location: 'Dubai, UAE (remote)',
    period: 'Summer 2025',
    type: 'internship',
    description: 'Starting from empty GitHub repo, contributed to building AI-driven health solutions by developing scalable backend systems, automation pipelines, and R&D tools.',
    technologies: ['React Native', 'Flask (Python)', 'PostgreSQL - SQLAlchemy', 'GraphQL', 'Docker', 'LangChain', 'n8n', 'Cursor IDE'],
    achievements: [
      'Built backend modules to parse unstructured medical data with OCR and AI-powered processing.',
      'Engineered an AI engine with LangChain to deliver tailored health insights from longitudinal data.',
      'Designed multi-agent automation for bug triaging, product feedback, and task routing.'
    ],
    companyUrl: 'https://panio.io/'
  },
  {
    id: '2',
    position: 'Health Tech Data & ML Intern',
    company: 'Bequalise',
    location: 'Milan, Italy (remote)',
    period: 'Summer 2025',
    type: 'internship',
    description: 'Worked on wearable health technology by developing data pipelines, ML algorithms, and intuitive mobile interfaces for patient monitoring.',
    technologies: ['React Native', 'TypeScript', 'TensorFlow Lite'],
    achievements: [
      'Built multi-sensor data pipelines in TypeScript for real-time respiratory and postural analysis',
      'Engineered algorithms for real-time respiratory and postural analysis using peak detection, FFT, and Kalman filtering',
      'Built intuitive mobile app interfaces to visualize model outputs and longitudinal data'
    ],
    companyUrl: 'https://www.bequalise.com/'
  },
  {
    id: '3',
    position: 'Undergraduate Researcher',
    company: 'Computational Biology and Bioinformatics Lab',
    location: 'Abu Dhabi, UAE',
    period: 'Mar 2025 - Present',
    type: 'part-time',
    description: 'Lead senior thesis on endometriosis ML-based screening using microbiome data.',
    technologies: ['Python Weka Wrapper', 'QIIME2', 'sra-tools', 'fastx', 'scikit-learn', 'scikit-bio', 'pandas', 'matplotlib', 'seaborn'],
    achievements: [
      'Designed predictive ML models to identify microbiome-based biomarkers.',
      'Conducted comprhensive literature review on microbiome-endometriosis associations and ML applications in clinical diagnostics',
      'Processed and analyzed 16S rRNA sequencing data and associated clinical metadata using SRA and FastX tools',
    ]
  },
  {
    id: '4',
    position: 'Data Analyst Intern',
    company: 'Ministry of Digital Development, Innovation and Aerospace Industries of Kazakhstan',
    location: 'Astana, Kazakhstan',
    period: 'Summer 2024',
    type: 'internship',
    description: 'Improved e-government systems serving 10M+ users by optimizing performance, data quality, and compliance.',
    technologies: ['JMeter', 'JVM Profiling', 'SQL', 'Pandas', 'Excel'],
    achievements: [
      'Reduced portal response time by 4% by diagnosing and resolving system bottlenecks.',
      'Streamlined quarterly report reviews, cutting time by 7% with automated SQL and Python workflows.',
      'Ensured 100% compliance across 5+ national systems by auditing and validating datasets.'
    ],
    companyUrl: 'https://www.gov.kz/memleket/entities/maidd?lang=en'
  }
];

const typeColors = {
  'internship': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'full-time': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'part-time': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'freelance': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
};

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            className="relative mb-12 md:mb-16"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 top-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden md:block shadow-lg"></div>

            {/* Experience Card */}
            <div className="md:ml-20">
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 hover:border-l-purple-500">
                <CardHeader className="">
                  <div className="flex flex-wrap items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                        {experience.position}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{experience.company}</span>
                        {experience.companyUrl && (
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${typeColors[experience.type]} border-0 text-xs font-medium px-3 py-1`}>
                      {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  {experience.achievements && experience.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-green-500 font-bold mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.technologies.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}

        {/* Timeline End */}
        <div className="absolute left-6 bottom-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-10 hidden md:block shadow-lg"></div>
      </motion.div>
    </div>
  );
};

export default Experience;