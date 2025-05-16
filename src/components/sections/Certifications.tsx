import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  link?: string;
  delay: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  issuer,
  date,
  image,
  description,
  link,
  delay
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="card flex flex-col md:flex-row gap-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(68, 114, 196, 0.2)' 
      }}
    >
      <div className="w-full md:w-1/4 flex justify-center items-center p-4">
        <img 
          src={image} 
          alt={`${name} certification logo`} 
          className="h-16 md:h-20 object-contain" 
        />
      </div>
      
      <div className="w-full md:w-3/4">
        <h3 className="text-xl font-semibold mb-1 text-text-light">{name}</h3>
        <p className="text-text-gray mb-2">{issuer}</p>
        
        <div className="flex items-center gap-2 text-text-gray text-sm mb-3">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        
        <p className="text-text-gray text-sm mb-3">{description}</p>
        
        {link && (
          <motion.a 
            href={link} 
            className="inline-flex items-center gap-1 text-primary-blue hover:text-primary-blueLight transition-colors duration-300 text-sm font-medium"
            whileHover={{ x: 3 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify <ExternalLink size={14} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      name: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "January 2022",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Advanced penetration testing certification demonstrating practical skills in identifying and exploiting vulnerabilities in various systems.",
      link: "#"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "March 2021",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Comprehensive ethical hacking certification covering reconnaissance, network scanning, enumeration, and system hacking techniques.",
      link: "#"
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      date: "June 2022",
      image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Advanced certification covering security and risk management, asset security, security architecture and engineering, and more.",
      link: "#"
    },
    {
      name: "AI Security Professional",
      issuer: "AI Security Alliance",
      date: "November 2023",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Specialized certification in securing AI systems, protecting machine learning models from attacks, and implementing proper AI governance.",
      link: "#"
    },
    {
      name: "Web Application Security Specialist",
      issuer: "SANS Institute",
      date: "April 2021",
      image: "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Specialized certification focusing on web application security testing and securing web technologies against common attack vectors.",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute right-0 top-1/4 w-1/4 h-1/2 bg-circuit bg-cover opacity-5 transform rotate-180" />
      
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="text-lg text-text-gray max-w-3xl">
            Industry-recognized credentials validating my expertise in various cybersecurity domains
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              date={cert.date}
              image={cert.image}
              description={cert.description}
              link={cert.link}
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="card max-w-2xl p-6 text-center">
            <Award size={32} className="text-primary-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-text-light">Continuous Learning</h3>
            <p className="text-text-gray mb-0">
              I regularly pursue new certifications and training to stay ahead of evolving 
              cybersecurity threats and technologies. My commitment to continuous learning ensures 
              that I can provide cutting-edge security expertise to all my clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;