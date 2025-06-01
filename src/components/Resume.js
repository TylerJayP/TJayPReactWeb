import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Printer, Mail, Phone, Github, Linkedin } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // For now, this will just print. In a real app, you'd generate a PDF
    window.print();
  };

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
    <section className="resume-section" ref={ref}>
      <div className="container">
        <motion.div
          className="resume-actions no-print"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="action-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
          >
            <Download size={20} />
            Download PDF
          </motion.button>
          <motion.button
            className="action-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
          >
            <Printer size={20} />
            Print Resume
          </motion.button>
        </motion.div>

        <motion.div
          className="resume-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.header className="resume-header" variants={itemVariants}>
            <h1 className="resume-name">Tyler Jay Perkins</h1>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>tylerjayp12@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>801-699-3941</span>
              </div>
              <div className="contact-item">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </div>
              <div className="contact-item">
                <Github size={16} />
                <span>GitHub</span>
              </div>
            </div>
          </motion.header>

          {/* Education */}
          <motion.section className="resume-section-content" variants={itemVariants}>
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <h3>Bachelor of Science - Computer Science</h3>
              <div className="item-details">
                <span className="institution">Utah Valley University, Orem, UT</span>
                <span className="date">Expected Graduation: Spring 2026</span>
              </div>
            </div>
            <div className="education-item">
              <h3>Associate of Science - Computer Science</h3>
              <div className="item-details">
                <span className="institution">Utah Valley University, Orem, UT</span>
                <span className="date">Aug. 2023 - Aug. 2024, GPA 3.45</span>
              </div>
              <ul className="achievements">
                <li>Awarded Certificate of Completion - Programmer (Aug 2024)</li>
              </ul>
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section className="resume-section-content" variants={itemVariants}>
            <h2 className="section-title">Non-Technical Experience</h2>
            <div className="experience-item">
              <h3>Manager</h3>
              <div className="item-details">
                <span className="company">K1Speed, Sandy, UT</span>
                <span className="date">Dec 2023 - Current</span>
              </div>
              <ul className="responsibilities">
                <li>Collaborate with upper management to analyze performance metrics and implement growth initiatives.</li>
                <li>Manage customer concerns and escalations to ensure retention and guest satisfaction.</li>
                <li>Assist in inventory management, sales tracking, and financial reporting.</li>
                <li>Develop and execute targeted marketing strategies to increase customer acquisition.</li>
              </ul>
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section className="resume-section-content" variants={itemVariants}>
            <h2 className="section-title">Personal Projects</h2>
            
            <div className="project-item">
              <h3>Personal Mood Journal Web Application</h3>
              <div className="project-link">
                <Github size={14} />
                <span>Repository: https://github.com/TylerJayP/MoodJournal</span>
              </div>
              <ul className="project-details">
                <li>Developing a responsive mood tracking web application with photo upload capabilities and interactive data visualizations.</li>
                <li>Implemented client-side state management using React Context API and Local Storage for data persistence.</li>
                <li>Built a user interface featuring calendar views, filtering functionality, and real-time dashboard analytics.</li>
                <li>Created an AI-powered mood insights feature to analyze user patterns and provide personalized recommendations.</li>
                <li>Designed an authentication system with login/signup pages (frontend implementation complete).</li>
                <li>Planned Enhancement: Backend development using C# ASP.NET with MySQL database for secure user authentication and persistent data storage.</li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Rocket League AI Bot</h3>
              <ul className="project-details">
                <li>Developing an autonomous Rocket League agent using RLGym, a Python reinforcement learning environment.</li>
                <li>Training an AI bot to learn game mechanics, positioning, and strategic decision-making through reinforcement learning algorithms.</li>
                <li>Implementing reward systems and training loops to optimize bot performance.</li>
                <li>Exploring deep reinforcement learning techniques to create an agent capable of advanced Rocket League gameplay.</li>
              </ul>
            </div>
          </motion.section>

          {/* Technical Skills */}
          <motion.section className="resume-section-content" variants={itemVariants}>
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-content">
              <p>
                <strong>Proficient with:</strong> C#, C++, HTML, CSS, JavaScript, React, and Git
              </p>
              <p>
                <strong>Familiar with:</strong> Python, MySQL, C, and AWS Amplify
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
