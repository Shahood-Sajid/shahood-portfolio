import { motion } from 'framer-motion';
import { ExternalLink, Star, Clock, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects, upworkProfile } from '@/data/content';

export default function Portfolio() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Portfolio" subtitle="Featured projects and work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 md:p-8 mt-8 hover:border-primary-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center">
                <span className="text-3xl">&#x1F7E2;</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Upwork Profile</h3>
                <p className="text-neutral-500 dark:text-neutral-400">Freelance Platform</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="text-center">
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  <Star size={16} fill="currentColor" />
                  <span className="text-xl font-bold">{upworkProfile.jobSuccess}%</span>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">Job Success</span>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 text-primary-400 mb-1">
                  <Clock size={16} />
                  <span className="text-xl font-bold">{upworkProfile.totalHours}+</span>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">Hours</span>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 text-green-400 mb-1">
                  <Briefcase size={16} />
                  <span className="text-xl font-bold">{upworkProfile.completedJobs}</span>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">Jobs</span>
              </div>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium border border-green-500/20">
                {upworkProfile.badge}
              </span>
            </div>

            <a href={upworkProfile.profileUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2">
              View Profile <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
