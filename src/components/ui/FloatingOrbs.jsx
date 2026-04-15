import { motion } from 'framer-motion';

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 dark:from-blue-500/20 to-purple-500/30 dark:to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Medium orb - bottom left */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-cyan-500/25 dark:from-cyan-500/15 to-blue-500/25 dark:to-blue-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Small orb - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/20 dark:from-purple-500/10 to-pink-500/20 dark:to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* AI-themed floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-1 h-1 bg-cyan-600 dark:bg-cyan-400 rounded-full"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </div>
  );
}
