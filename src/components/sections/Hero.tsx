import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Bug, Lock } from 'lucide-react';
import RobotAvatar from '../RobotAvatar';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient">Nofrinto Flory</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-text-light mb-6">
              Cybersecurity Expert & Bug Hunter
            </h2>
            <p className="text-text-gray text-lg mb-8 max-w-lg">
              Securing the digital frontier with advanced expertise in cybersecurity, 
              vulnerability detection, and AI-powered security solutions. Helping organizations 
              protect their most valuable digital assets.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#portfolio"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Portfolio
              </motion.a>
              <motion.a 
                href="#contact"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { icon: <Shield size={24} />, label: 'Cyber Security', color: 'text-primary-blue' },
                { icon: <Bug size={24} />, label: 'Bug Hunting', color: 'text-secondary-green' },
                { icon: <Lock size={24} />, label: 'AI Security', color: 'text-accent-purple' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                >
                  <div className={`${item.color} mb-2`}>
                    {item.icon}
                  </div>
                  <p className="text-text-light text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing effects behind the avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue via-secondary-green to-accent-purple opacity-20 blur-xl animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary-blue via-secondary-green to-accent-purple opacity-10 blur-md animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              
              {/* Robot avatar container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary-blue/50 bg-background-darker flex items-center justify-center shadow-lg z-10">
                <RobotAvatar />
              </div>
              
              {/* Circuitry pattern overlay */}
              <div className="absolute inset-0 rounded-full bg-circuit bg-cover opacity-30 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-light animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a href="#about" aria-label="Scroll to About section">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;