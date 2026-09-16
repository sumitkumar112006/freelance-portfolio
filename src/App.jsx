import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStory from './components/AboutStory';
import BentoGrid from './components/BentoGrid';
import ProjectShowcase from './components/ProjectShowcase';
import ProjectModal from './components/ProjectModal';
import ScopeEstimator from './components/ScopeEstimator';
import ExperienceLog from './components/ExperienceLog';
import GitHubActivity from './components/GitHubActivity';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import { projectsData } from './data/projectsData';
import { sounds } from './audio/soundEffects';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [accentColor, setAccentColor] = useState('#00F0FF');
  const [toast, setToast] = useState({ message: '', visible: false, type: 'success' });

  // Update root CSS variable when accent changes
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
    
    // Hex to RGB for glow opacity
    const hex = accentColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    document.documentElement.style.setProperty('--accent-glow', `${r}, ${g}, ${b}`);
  }, [accentColor]);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, visible: true, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 2800);
  };

  const handleToggleSound = () => {
    const enabled = sounds.toggleSound();
    setSoundEnabled(enabled);
    showToast(enabled ? 'Tactile sound FX enabled' : 'Interface audio muted', 'info');
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100 font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
      
      {/* Background Grid Lines & Noise Pattern */}
      <div className="fixed inset-0 grid-lines pointer-events-none opacity-60 z-0" />
      <div className="fixed inset-0 bg-noise pointer-events-none opacity-40 z-0" />

      {/* Main App Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation */}
        <Navbar 
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          accentColor={accentColor}
          onSelectAccent={setAccentColor}
          onShowToast={showToast}
        />

        {/* Main Content Sections */}
        <main className="flex-1 space-y-8">
          <Hero 
            onOpenCommandPalette={() => setCommandPaletteOpen(true)}
            accentColor={accentColor}
          />

          <AboutStory />
          
          <ProjectShowcase 
            onSelectProject={(proj) => {
              setSelectedProject(proj);
              sounds.playModalOpen();
            }}
          />

          <BentoGrid 
            onShowToast={showToast}
            accentColor={accentColor}
          />

          <ScopeEstimator 
            onShowToast={showToast}
          />

          <GitHubActivity 
            onShowToast={showToast}
          />

          <ExperienceLog />

          <Testimonials />
        </main>

        {/* Footer */}
        <ContactFooter 
          onShowToast={showToast}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

      </div>

      {/* Deep-dive Case Study Drawer */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShowToast={showToast}
      />

      {/* Raycast-style Command Palette */}
      <CommandPalette 
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(proj) => {
          setSelectedProject(proj);
          sounds.playModalOpen();
        }}
        projects={projectsData}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        accentColor={accentColor}
        onSelectAccent={setAccentColor}
        onShowToast={showToast}
      />

      {/* Notification Toast */}
      <Toast 
        message={toast.message}
        visible={toast.visible}
        type={toast.type}
      />

    </div>
  );
}
