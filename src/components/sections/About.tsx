import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Code, 
  Cpu, 
  Shield, 
  Bug, 
  BrainCircuit
} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Penetration Testing', level: 95, color: 'primary-blue' },
    { name: 'Vulnerability Assessment', level: 90, color: 'accent-purple' },
    { name: 'AI Security', level: 85, color: 'secondary-green' },
    { name: 'Reverse Engineering', level: 80, color: 'primary-blue' },
    { name: 'Web Application Security', level: 92, color: 'accent-purple' },
    { name: 'Network Security', level: 88, color: 'secondary-green' },
  ];

  const statsData = [
    { value: '5+', label: 'Years Experience', icon: <Award size={24} /> },
    { value: '100+', label: 'Bugs Found', icon: <Bug size={24} /> },
    { value: '30+', label: 'Clients Protected', icon: <Shield size={24} /> },
    { value: '15+', label: 'AI Security Audits', icon: <BrainCircuit size={24} /> },
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-circuit bg-cover opacity-5" />
      
      <div className="container-custom">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-text-gray max-w-3xl">
            Experienced cybersecurity specialist and professional bug hunter with a passion for AI security
          </p>
        </motion.div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-blue">Background</h3>
            <div className="space-y-4 text-text-gray">
              <p>
                I am a dedicated cybersecurity expert with over 5 years of experience in identifying and mitigating 
                security vulnerabilities across various platforms and technologies. My expertise in bug hunting and 
                pentesting has helped numerous organizations secure their digital assets and protect sensitive data.
              </p>
              <p>
                With a deep understanding of AI and machine learning, I specialize in detecting security flaws in 
                AI-powered systems and developing strategies to enhance their resilience against emerging threats.
              </p>
              <p>
                I hold multiple industry certifications and actively contribute to the cybersecurity community 
                through responsible disclosure programs and security research publications.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 card"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(68, 114, 196, 0.3)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="flex justify-center mb-2 text-primary-blue">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-text-light">{stat.value}</h4>
                  <p className="text-sm text-text-gray">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-blue">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="mb-4"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-text-light">{skill.name}</span>
                    <span className="text-text-gray">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background-darker rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-blue">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Python', 'JavaScript', 'Burp Suite', 'Metasploit', 
                  'OWASP ZAP', 'Wireshark', 'TensorFlow', 'PyTorch',
                  'Docker', 'AWS', 'Kali Linux', 'IDA Pro'
                ].map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-background-darker border border-primary-blue/30 text-sm text-text-gray"
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: 'rgba(68, 114, 196, 0.8)',
                      boxShadow: '0 0 5px rgba(68, 114, 196, 0.5)' 
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 1 + (index * 0.05) }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;