import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Download } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import { personalInfo, socialLinks } from '@/data/content';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5" />

      <motion.div className="container-custom relative z-10 text-center"
        variants={containerVariants} initial="hidden" animate="visible">
        
        <motion.p variants={itemVariants} className="text-primary-400 font-medium mb-4 text-lg">
          Hello, I'm
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl text-neutral-600 dark:text-neutral-300 font-light mb-6">
          {personalInfo.title}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Building exceptional digital experiences with modern technologies.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button onClick={() => scrollToSection('portfolio')} className="btn-primary flex items-center gap-2">
            View My Work <ArrowDown size={18} />
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn-secondary">
            Get In Touch
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200">
              <GithubIcon size={24} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200">
              <LinkedinIcon size={24} />
            </a>
          )}
          {socialLinks.upwork && (
            <a href={socialLinks.upwork} target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200">
              <ExternalLink size={24} />
            </a>
          )}
          {personalInfo.resumeUrl && (
            <a href={personalInfo.resumeUrl} download
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Download size={24} />
            </a>
          )}
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
        <button onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={20} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
