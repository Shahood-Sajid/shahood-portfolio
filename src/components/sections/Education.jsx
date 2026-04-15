import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { education } from '@/data/content';

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Education" subtitle="Academic background and qualifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div key={edu.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300 group">
              
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                <GraduationCap className="text-primary-400" size={24} />
              </div>

              {/* Degree & Institution */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{edu.degree}</h3>
              <p className="text-primary-400 font-medium mb-4">{edu.institution}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {edu.startYear} - {edu.endYear}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} />
                  {edu.location}
                </span>
              </div>

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="pt-4 border-t border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    <Award size={14} className="text-primary-400" />
                    Highlights
                  </div>
                  <ul className="space-y-1">
                    {edu.achievements.map((item, i) => (
                      <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300 flex items-start gap-2">
                        <span className="text-primary-400">*</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
