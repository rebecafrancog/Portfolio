import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div 
          className="text-purple-400 font-bold text-xl tracking-wider cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          PORTFOLIO
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 bg-gray-900/50 p-1 rounded-full border border-gray-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-purple-600 rounded-full"
                  transition={{ type: 'spring', duration: 0.6 }}
                  style={{ zIndex: -1 }}
                />
              )}
              {item.name}
            </button>
          ))}
        </div>

        {/* Social Icons & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-gray-400">
            <a href="https://linkedin.com/in/rebecafrancog" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com/rebecafrancog" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Github size={20} /></a>
            <a href="https://instagram.com/rebecafranco" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Instagram size={20} /></a>
          </div>

          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-900 p-4"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-2 ${
                  activeSection === item.id ? 'text-purple-400' : 'text-gray-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            {/* Socials for Mobile */}
            <div className="flex gap-4 pt-4 border-t border-gray-800">
              <a href="https://linkedin.com/in/rebecafrancog" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><Linkedin size={20} /></a>
              <a href="https://github.com/rebecafrancog" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><Github size={20} /></a>
              <a href="https://instagram.com/rebecafranco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><Instagram size={20} /></a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
