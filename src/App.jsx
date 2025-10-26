import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar';
import HeroSection from './components/Sections/HeroSection';
import SkillsSection from './components/Sections/SkillsSection';
import ProjectSection from './components/Sections/ProjectSection';

const App = () => {
  return (
    <ThemeProvider>
      <div className = "pb-[100vh]">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
       
      </div>
    </ThemeProvider>
    
  );
};

export default App;