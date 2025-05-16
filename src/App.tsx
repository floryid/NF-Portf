import React from 'react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import { useGSAP } from './hooks/useGSAP';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useGSAP();
  useSmoothScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="cyber-bg min-h-screen text-text-light"
    >
      <ParticlesBackground />
      <Layout>
        <Hero />
        <About />
        <Portfolio />
        <Certifications />
        <Contact />
      </Layout>
    </motion.div>
  );
}

export default App;