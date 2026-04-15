import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/data/content';
import { formatDateRange } from '@/lib/utils';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-neutral-50 dark:border-neutral-950 z-10" />

                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 md:p-8 hover:border-primary-500/30 hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">{exp.title}</h3>
                        <p className="text-primary-400 font-medium mt-1">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} />
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
