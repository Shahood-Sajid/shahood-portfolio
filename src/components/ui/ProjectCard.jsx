import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card overflow-hidden group hover:border-primary-500/30 transition-all duration-300">
      
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img src={project.image} alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-primary-500/10 text-primary-400 rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-400 transition-colors">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <Code size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
