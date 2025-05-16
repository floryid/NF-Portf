import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Shield, 
  Bug, 
  Lock, 
  Server, 
  BrainCircuit, 
  Smartphone 
} from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link?: string;
  delay: number;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  category,
  link,
  delay,
  icon
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="glowing-border rounded-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="card h-full flex flex-col relative z-10">
        <div 
          className="h-48 bg-cover bg-center rounded-t-lg mb-4 overflow-hidden" 
          style={{ backgroundImage: `url(${image})` }}
        />
        
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary-blue">
              {icon}
            </span>
            <span className="text-sm uppercase text-text-gray tracking-wider">
              {category}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-text-light">{title}</h3>
          <p className="text-text-gray mb-4 text-sm">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-background-dark text-text-gray"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {link && (
          <motion.a 
            href={link} 
            className="inline-flex items-center gap-1 text-primary-blue hover:text-primary-blueLight transition-colors duration-300 text-sm font-medium"
            whileHover={{ x: 3 }}
          >
            View Project <ExternalLink size={14} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI Model Security Audit",
      description: "Comprehensive security assessment of machine learning models vulnerable to adversarial attacks, identifying and mitigating potential exploits.",
      image: "/images/audit.jpg",
      technologies: ["TensorFlow", "PyTorch", "Python", "Adversarial ML"],
      category: "AI Security",
      link: "#",
      icon: <BrainCircuit size={20} />
    },
    {
      title: "Banking App Penetration Test",
      description: "Discovered critical vulnerabilities in a major banking application's authentication system, preventing potential data breaches.",
      image: "/images/websec.jpg",
      technologies: ["OWASP", "Burp Suite", "JWT Analysis", "API Security"],
      category: "Web Security",
      link: "#",
      icon: <Lock size={20} />
    },
    {
      title: "IoT Device Firmware Analysis",
      description: "Reverse engineered smart home device firmware to identify and patch remote code execution vulnerabilities affecting millions of devices.",
      image: "/images/IOT.jpg",
      technologies: ["IDA Pro", "Ghidra", "C/C++", "ARM Assembly"],
      category: "IoT Security",
      link: "#",
      icon: <Smartphone size={20} />
    },
    {
      title: "Cloud Infrastructure Security Review",
      description: "Conducted comprehensive security assessment of AWS infrastructure, identifying and remediating misconfigurations and access control issues.",
      image: "/images/clud.jpg",
      technologies: ["AWS", "CloudFormation", "IAM", "S3", "Lambda"],
      category: "Cloud Security",
      link: "#",
      icon: <Server size={20} />
    },
    {
      title: "Bug Bounty Critical Vulnerability",
      description: "Discovered and responsibly disclosed a critical authentication bypass vulnerability in a major tech company's platform.",
      image: "/images/BugBounty.jpg",
      technologies: ["Web Hacking", "Authentication", "API Security"],
      category: "Bug Bounty",
      link: "#",
      icon: <Bug size={20} />
    },
    {
      title: "Secure Coding Workshop",
      description: "Developed and delivered secure coding workshops for development teams, focusing on OWASP Top 10 and defensive programming techniques.",
      image: "/images/SecurityTraining.jpg",
      technologies: ["OWASP", "SAST/DAST", "DevSecOps", "Training"],
      category: "Security Training",
      link: "#",
      icon: <Shield size={20} />
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background-darker relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-cyber-grid opacity-5" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="text-lg text-text-gray max-w-3xl">
            Explore my projects and security research across various domains
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              category={project.category}
              link={project.link}
              delay={0.1 + (index * 0.1)}
              icon={project.icon}
            />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-text-gray mb-6">
            Due to confidentiality agreements, some projects cannot be publicly disclosed. 
            <br />Contact me to discuss my expertise in more detail.
          </p>
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;