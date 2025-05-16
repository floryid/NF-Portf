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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="text-lg text-text-gray max-w-3xl">
            Ready to enhance your cybersecurity posture? Let's discuss how I can help protect your digital assets.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card h-full">
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="w-10 h-10 rounded-full bg-background-dark flex items-center justify-center text-primary-blue">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-text-light">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-text-gray hover:text-primary-blue transition-colors duration-300"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-text-gray">{item.details}</p>
                      )}
                      
                      {item.title === 'Social Media' && (
                        <div className="flex mt-2 gap-3">
                          {socialLinks.map((social, idx) => (
                            <motion.a
                              key={idx}
                              href={social.href}
                              aria-label={social.label}
                              className="text-text-gray hover:text-primary-blue transition-colors duration-300"
                              whileHover={{ y: -3, scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {social.icon}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-text-light">Send Me a Message</h3>
              
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-secondary-green/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-secondary-green" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-light mb-2">Message Sent!</h4>
                  <p className="text-text-gray">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-text-light mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-background-dark border border-primary-blue/20 focus:border-primary-blue text-text-light outline-none transition duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-text-light mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-background-dark border border-primary-blue/20 focus:border-primary-blue text-text-light outline-none transition duration-300"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-text-light mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-background-dark border border-primary-blue/20 focus:border-primary-blue text-text-light outline-none transition duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="Security Assessment">Security Assessment</option>
                      <option value="Bug Bounty">Bug Bounty</option>
                      <option value="AI Security">AI Security</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-text-light mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-background-dark border border-primary-blue/20 focus:border-primary-blue text-text-light outline-none transition duration-300"
                      placeholder="Write your message here..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="btn btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <Send size={16} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;