import { motion } from 'framer-motion';
import { Download, MapPin, Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo, stats } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-20 blur-xl" />
              {/* Image */}
              <div className="relative glass-card p-2 overflow-hidden">
                <img src={personalInfo.profileImage} alt={personalInfo.name}
                  className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400" />
                {personalInfo.email}
              </span>
            </div>

            {/* Bio */}
            <div className="prose prose-invert prose-lg">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 text-center hover:border-primary-500/30 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Resume Download */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.4 }} className="mt-8">
              <a href={personalInfo.resumeUrl} download className="btn-primary inline-flex items-center gap-2">
                <Download size={18} /> Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
