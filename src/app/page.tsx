'use client';
import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

// Import game components
import GameContainer from '@/components/game/GameContainer';

// No data needed here - all moved to respective component files

function App() {
  const [coins, setCoins] = useState(0);

  const handleCoinCollect = (amount: number) => {
    setCoins(prev => prev + amount);
  };

  return (
    <div className="min-h-screen font-inter">
      {/* Global container for dark mode and background */}
      <div className="bg-neutral-950 text-neutral-100 transition-colors duration-300 relative">
        {/* Game Container - handles enemies and game mechanics */}
        <GameContainer onCoinCollect={handleCoinCollect} />
        
        {/* Header with nav and coin counter */}
        <Header coins={coins} />
        
        {/* Main content sections */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
