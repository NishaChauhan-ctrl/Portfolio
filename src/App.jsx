import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar'; // Make sure path matches your folder structure
import Home from './sections/Home';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatImUpTo from './components/WhatImUpTo';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <Home />
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ marginTop: "2.5rem" }}>The Human Behind the Code 🦉</h2>
          <About />
        </motion.section>

        <motion.section
          id="resume"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ marginTop: "2.5rem" }}>The Day Job Journey 📋</h2>
          <Resume />
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ marginTop: "2.5rem" }}>Things I’ve Built (and Broken) 🛠️</h2>
          <Projects />
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ marginTop: "2.5rem" }}>Say Hi! ✉️</h2>
          <Contact />
        </motion.section>
      </main>
      <WhatImUpTo />
      <Footer />
    </div>
  );
}

export default App;
