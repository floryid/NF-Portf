import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github as GitHub, Linkedin, Twitter, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      details: 'contact@nofrintoflory.com',
      link: 'mailto:contact@nofrintoflory.com',
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      details: 'Jakarta, Indonesia',
      link: null,
    },
    {
      icon: <MessageSquare size={20} />,
      title: 'Social Media',
      details: 'Follow me on social platforms',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <GitHub size={18} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-background-darker relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-full bg-cyber-grid opacity-5" />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="text-lg text-text-gray max-w-3xl">
            Ready to enhance your cybersecurity posture? Let's discuss how I can help protect your digital assets.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="card h-full shadow-lg border border-background-dark/40 bg-background-dark/80 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-6 text-text-light">Get in Touch</h3>
              <p className="text-text-gray mb-8">
                Whether you need a comprehensive security assessment, bug bounty expertise, or
                consultation on AI security, I'm here to help. Feel free to reach out using the
                contact form or through my social channels.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.5, delay: 0.35 + (index * 0.12), ease: 'easeOut' }}
                  >
                    <div className="w-10 h-10 rounded-full bg-background-dark flex items-center justify-center text-primary-blue shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-text-light">{item.title}</h4>
                      <p className="text-text-gray text-sm">{item.details}</p>
                      {item.link && (
                        <a href={item.link} className="text-primary-blue hover:underline text-sm">{item.link}</a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-blueLight transition-colors duration-300 rounded-full border border-primary-blue/30 p-2 bg-background-dark/60 shadow hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.12), ease: 'easeOut' }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.32, ease: 'easeOut' }}
          >
            <div className="card h-full p-8 shadow-lg border border-background-dark/40 bg-background-dark/80 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-6 text-primary-blue">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
                  >
                    <label className="block text-text-light mb-2 font-medium tracking-wide">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-lg border border-background-dark/60 bg-background-darker text-text-light placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 shadow-sm" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
                  >
                    <label className="block text-text-light mb-2 font-medium tracking-wide">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-lg border border-background-dark/60 bg-background-darker text-text-light placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 shadow-sm" />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, delay: 0.65, ease: 'easeOut' }}
                >
                  <label className="block text-text-light mb-2 font-medium tracking-wide">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-background-dark/60 bg-background-darker text-text-light placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 shadow-sm" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, delay: 0.75, ease: 'easeOut' }}
                >
                  <label className="block text-text-light mb-2 font-medium tracking-wide">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required
                    className="w-full px-4 py-3 rounded-lg border border-background-dark/60 bg-background-darker text-text-light placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 shadow-sm resize-none" />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary-blue text-white font-semibold text-lg shadow-md hover:bg-primary-blueLight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, delay: 0.85, ease: 'easeOut' }}
                  disabled={submitted}
                >
                  {submitted ? 'Thank you!' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;