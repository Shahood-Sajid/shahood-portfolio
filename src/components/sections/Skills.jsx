import { motion } from 'framer-motion';
import { Code, Wrench, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { skills } from '@/data/content';

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                <Code className="text-primary-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Technical</h3>
            </div>
            <div className="space-y-4">
              {skills.technical.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-neutral-700 dark:text-neutral-300">{skill.name}</span>
                    <span className="text-neutral-400 dark:text-neutral-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                <Wrench className="text-primary-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <span key={tool} className="skill-badge">{tool}</span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                <Users className="text-primary-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Soft Skills</h3>
            </div>
            <div className="space-y-3">
              {skills.soft.map((skill, index) => (
                <motion.div key={skill} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <span className="w-2 h-2 bg-primary-400 rounded-full" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
