import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-6 flex ${centered ? 'justify-center' : ''}`}>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full" />
      </div>
    </motion.div>
  );
}
