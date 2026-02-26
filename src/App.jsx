import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Background3D from './components/Background3D';
import Learning from './components/Learning';
import KeyFindings from './components/KeyFindings';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Learning />
    <Projects />
    <Experience />
    <Certifications />
    <Contact />
  </>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--color-electric-blue)', transformOrigin: '0%', zIndex: 1000 }}
      />

      <Background3D />
      <Navigation />

      <main style={{ position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<KeyFindings />} />
        </Routes>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--card-border)', background: 'var(--color-darker)', position: 'relative', zIndex: 10 }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Rakesh Mohan Sahu. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
