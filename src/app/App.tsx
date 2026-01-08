import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { Toaster } from 'sonner';

export default function App() {
  // Simple state to track active section for highlighting nav
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Toaster position="top-right" theme="dark" />
      <Navbar activeSection={activeSection} />
      
      <main className="container mx-auto px-6 pt-24 md:pt-32">
        <Hero id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>

      <Footer />
    </div>
  );
}
