'use client';

import { motion } from 'framer-motion';
import { Award, Code, GraduationCap, Mail, MessageSquare, Sparkles, Heart, Star } from 'lucide-react';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery }) => {
  // Suggested questions that the user can click on
  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      text: 'Who are you?',
      gradient: 'from-purple-500 to-pink-500',
      hoverGradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: <Code className="h-5 w-5" />,
      text: 'What projects have you worked on?',
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: 'What are your skills?',
      gradient: 'from-emerald-500 to-teal-500',
      hoverGradient: 'from-emerald-600 to-teal-600'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: 'How can I contact you?',
      gradient: 'from-orange-500 to-red-500',
      hoverGradient: 'from-orange-600 to-red-600'
    },
  ];

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const sparkleVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-8 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 text-purple-400/30"
        variants={sparkleVariants}
        animate="animate"
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
      <motion.div 
        className="absolute top-20 right-16 text-blue-400/30"
        variants={sparkleVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <Star className="h-4 w-4" />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-20 text-pink-400/30"
        variants={sparkleVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <Heart className="h-5 w-5" />
      </motion.div>

      {/* Welcome message */}
      <motion.div className="mb-10 text-center relative z-10" variants={itemVariants}>
        <motion.div
          className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200/20"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ✨ Digital Twin Activated
          </span>
        </motion.div>
        <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
          I'm Aru's Digital Twin
        </h2>
        <p className="text-muted-foreground/80 mx-auto max-w-md text-lg leading-relaxed">
          Your personal AI assistant ready to explore my portfolio and answer your questions.
        </p>
      </motion.div>

      {/* Suggested questions */}
      <motion.div
        className="w-full max-w-lg space-y-4"
        variants={containerVariants}
      >
        {suggestedQuestions.map((question, index) => (
          <motion.button
            key={index}
            className={`group relative flex w-full items-center rounded-2xl p-4 transition-all duration-300 hover:shadow-xl overflow-hidden border border-white/10 backdrop-blur-sm`}
            onClick={() => submitQuery(question.text)}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
            }}
          >
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${question.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Icon with gradient background */}
            <div className={`relative z-10 mr-4 rounded-xl p-3 bg-gradient-to-r ${question.gradient} shadow-lg`}>
              <span className="text-white">
                {question.icon}
              </span>
            </div>
            
            {/* Text */}
            <span className="relative z-10 text-left font-medium text-foreground group-hover:text-foreground/90 transition-colors">
              {question.text}
            </span>
            
            {/* Hover arrow */}
            <motion.div 
              className="relative z-10 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.button>
        ))}
      </motion.div>

      {/* Bottom hint */}
      <motion.p 
        className="mt-8 text-sm text-muted-foreground/60 text-center"
        variants={itemVariants}
      >
        Or ask me anything about Aru's experience and projects
      </motion.p>
    </motion.div>
  );
};

export default ChatLanding;
