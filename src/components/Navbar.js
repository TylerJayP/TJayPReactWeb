import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['About', 'Projects', 'Resume', 'Contact'];

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('hero')}
          >
            TJP
          </motion.div>

          <div className="nav-links desktop">
            {navItems.map((item) => (
              <motion.button
                key={item}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className={`nav-mobile ${isOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item}
              className="nav-link-mobile"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(item.toLowerCase())}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </motion.nav>

      {/* Floating Mobile Hamburger Menu */}
      <motion.button
        className="mobile-hamburger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </motion.button>
    </>
  );
};

export default Navbar;