import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WorkShowcase from './components/WorkShowcase';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectAPPProject from './components/ProjectAPPPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Routes>
            {/* Home route with all sections */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <WorkShowcase />
                  <Projects />
                  <Experience />
                  <Skills />
                  <Achievements />
                  <Certifications />
                  <Contact />
                </>
              }
            />

            {/* Individual Routes (Optional) */}
            <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-showcase" element={<WorkShowcase />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />

            {/* Demo Project Route */}
            <Route path="/ProjectAPPPage" element={<ProjectAPPProject />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
