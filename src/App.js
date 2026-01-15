import { useEffect, useState } from 'react';
import './App.css';
// import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import portfolioData from './portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('skills'); // Changed from 'about' to 'skills'
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      // case 'about':
      //   return <About data={portfolioData.personal} />;
      case 'education':
        return <Education data={portfolioData.education} />;
      case 'skills':
        return <Skills data={portfolioData.skills} />;
      case 'certifications':
        return <Certifications data={portfolioData.certifications} />;
      case 'projects':
        return <Projects data={portfolioData.projects} />;
      case 'experience':
        return <Experience data={portfolioData.experience} />;
      case 'contact':
        return <Contact emailConfig={portfolioData.emailConfig} />;
      default:
        return <Skills data={portfolioData.skills} />; // Changed from About to Skills
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Hero data={portfolioData.personal} setActiveSection={setActiveSection} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="container mx-auto px-6 py-20">
        {renderSection()}
      </div>

      <Footer name={portfolioData.personal.name} />
    </div>
  );
}

export default App;