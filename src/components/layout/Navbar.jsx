import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, scrollToSection } from '@/lib/utils';
import { personalInfo, navLinks, socialLinks } from '@/data/content';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section
      const sections = navLinks.map(link => link.href);
      sections.unshift('hero');
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-black/10 dark:border-white/10' : 'bg-transparent'
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => handleNavClick('hero')} className="text-xl md:text-2xl font-bold gradient-text">
            {personalInfo.name.split(' ')[0]}<span className="text-neutral-500 dark:text-neutral-400">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => handleNavClick(link.href)}
                className={cn(
                  "transition-colors text-sm font-medium",
                  activeSection === link.href
                    ? "text-primary-400"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                )}>
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="transition-colors text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                <Github size={20} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="transition-colors text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                <Linkedin size={20} />
              </a>
            )}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-lg border-b bg-white/95 dark:bg-neutral-950/95 border-black/10 dark:border-white/10">
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "py-2 text-left font-medium",
                    activeSection === link.href
                      ? "text-primary-400"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  )}>
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
