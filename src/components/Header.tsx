import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, CircuitBoard } from 'lucide-react';

const navItems = [
  { title: 'Home', href: '#hero' },
  { title: 'About', href: '#about' },
  { title: 'Portfolio', href: '#portfolio' },
  { title: 'Certifications', href: '#certifications' },
  { title: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-dark/90 backdrop-blur-md py-4 shadow-md'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.a
          href="#hero"
          className="flex items-center gap-2 text-2xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CircuitBoard className="text-primary-blue" />
          <span>Nofrinto Flory</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-text-light hover:text-primary-blue transition-colors duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {item.title}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-text-light hover:text-primary-blue transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background-darker/95 flex flex-col items-center justify-center z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-4 text-text-light hover:text-primary-blue transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="text-xl text-text-light hover:text-primary-blue transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  {item.title}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn btn-primary mt-4"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;