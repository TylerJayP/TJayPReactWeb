import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, GraduationCap, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++',
    'HTML/CSS', 'Git', 'MongoDB', 'SQL', 'AWS', 'Docker'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-card">
                <Code className="card-icon" />
                <h3>Passionate Developer</h3>
                <p>
                  I love creating digital experiences that matter. From web applications 
                  to complex algorithms, I enjoy the process of turning ideas into reality 
                  through clean, efficient code.
                </p>
              </div>

              <div className="about-card">
                <GraduationCap className="card-icon" />
                <h3>Computer Science Student</h3>
                <p>
                  Currently finishing my senior year at Utah Valley University, 
                  where I've developed a strong foundation in software engineering, 
                  data structures, and system design.
                </p>
              </div>

              <div className="about-card">
                <Heart className="card-icon" />
                <h3>Problem Solver</h3>
                <p>
                  I thrive on challenges and love finding creative solutions to complex problems. 
                  Whether it's optimizing performance or designing user-friendly interfaces, 
                  I approach each project with curiosity and determination.
                </p>
              </div>
            </motion.div>

            <motion.div className="skills-section" variants={itemVariants}>
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="skill-tag"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
