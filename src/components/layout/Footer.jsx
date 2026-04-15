import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import { personalInfo, navLinks, socialLinks } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              {personalInfo.name.split(' ')[0]}<span className="text-neutral-400 dark:text-neutral-400">.</span>
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              {personalInfo.title} based in {personalInfo.location}.<br />
              {personalInfo.availability}
            </p>
          </div>

          <div>
            <h4 className="text-neutral-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => scrollToSection(link.href)}
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm text-left">
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-neutral-900 dark:text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
                  <Github size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
                  <Linkedin size={20} />
                </a>
              )}
              {socialLinks.upwork && (
                <a href={socialLinks.upwork} target="_blank" rel="noopener noreferrer"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
            <a href={`mailto:${personalInfo.email}`} className="text-neutral-500 dark:text-neutral-400 hover:text-primary-400 text-sm mt-4 block">
              {personalInfo.email}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex justify-center items-center">
          <p className="text-neutral-400 dark:text-neutral-500 text-sm">© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
