import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/content';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formState,
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300 hover:text-primary-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <Mail className="text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500">Email</p>
                  <p>{personalInfo.email}</p>
                </div>
              </a>

              {personalInfo.phone && (
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Phone className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 dark:text-neutral-500">Phone</p>
                    <p>{personalInfo.phone}</p>
                  </div>
                </a>
              )}

              <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500">Location</p>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {personalInfo.availability}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="glass-card p-6 md:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden><label>Don't fill: <input name="bot-field" /></label></p>

              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name" 
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com" 
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message} 
                  onChange={handleChange} 
                  required 
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project..." 
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 mb-4">
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 mb-4">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
