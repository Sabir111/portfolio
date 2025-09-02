import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const { isDark } = useTheme();
  
  return (
    <Router>
      <motion.div 
        className="min-h-screen relative overflow-hidden theme-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Global background pattern */}
        <motion.div
          className={`fixed inset-0 opacity-30 ${isDark ? 'bg-pattern-dots' : 'bg-pattern-grid'}`}
          animate={{ opacity: isDark ? 0.1 : 0.05 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Global cosmic background */}
        <motion.div
          className="fixed inset-0 cosmic-bg"
          animate={{ opacity: isDark ? 0.4 : 0.2 }}
          transition={{ duration: 0.8 }}
        />
        
        <div className="relative z-10">
          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </motion.div>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
