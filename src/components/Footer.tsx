import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  CircuitBoard
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:contact@nofrintoflory.com', label: 'Email' },
  ];

  return (
    <footer className="bg-background-darker py-12 border-t border-primary-blue/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.a
              href="#hero"
              className="flex items-center gap-2 text-2xl font-bold text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CircuitBoard className="text-primary-blue" />
              <span>Nofrinto Flory</span>
            </motion.a>
            <p className="text-text-gray mb-4 max-w-md">
              Cybersecurity expert and bug hunter with expertise in AI security. Helping
              organizations protect their digital assets through expertise and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-text-gray hover:text-primary-blue transition-colors duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-light">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Certifications', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-text-gray hover:text-primary-blue transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-light">Contact</h3>
            <ul className="space-y-2 text-text-gray">
              <li>Email: contact@nofrintoflory.com</li>
              <li>Location: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-blue/10 mt-8 pt-8 text-center text-text-gray">
          <p>&copy; {currentYear} Nofrinto Flory. All rights reserved.</p>
          <p className="text-sm mt-2">
            Designed with <span className="text-secondary-green">❤</span> and secure code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;