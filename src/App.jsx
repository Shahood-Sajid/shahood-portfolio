import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import FloatingOrbs from '@/components/ui/FloatingOrbs';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950">
      {/* Global animated background */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
        <FloatingOrbs />
      </div>
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        
        <Footer />
      </div>
      <ScrollToTop />
      <ScrollProgress />
    </div>
  );
}

export default App;
