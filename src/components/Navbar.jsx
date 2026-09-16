import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Search, 
  Command, 
  Menu, 
  X, 
  Palette,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { sounds } from '../audio/soundEffects';

export default function Navbar({ 
  onOpenCommandPalette, 
  soundEnabled, 
  onToggleSound, 
  accentColor, 
  onSelectAccent,
  onShowToast
}) {
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const themeOptions = [
    { name: 'Cyan', hex: '#00F0FF' },
    { name: 'Violet', hex: '#8B5CF6' },
    { name: 'Emerald', hex: '#10B981' },
    { name: 'Amber', hex: '#F59E0B' }
  ];

  // Update clock every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      }) + ' UTC+5:30');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Bento Lab', href: '#lab' },
    { label: 'Stack Radar', href: '#radar' },
    { label: 'Scope Estimator', href: '#estimator' },
    { label: 'Live GitHub', href: '#github-activity' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    sounds.playClick();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 lg:px-8 py-3.5 backdrop-blur-xl bg-obsidian-950/75 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Monogram & Status Indicator */}
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            sounds.playPop();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-obsidian-850 border border-white/15 text-slate-100 font-mono font-bold text-xs shadow-inner group-hover:border-brand-cyan/60 transition-colors">
            <span className="text-brand-cyan">S</span>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm tracking-tight text-slate-100 group-hover:text-white transition-colors flex items-center gap-1.5">
              Sumit
              <span className="text-[10px] font-mono font-normal px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-brand-cyan">
                Full-Stack & AI
              </span>
            </span>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1 rounded-full bg-obsidian-900/90 border border-white/10 text-xs text-slate-400 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Tools & Telemetry Dock */}
        <div className="flex items-center gap-2.5">
          
          {/* Live Telemetry Clock */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-obsidian-900/60 border border-white/5 text-[11px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{time || '19:20 UTC+5:30'}</span>
          </div>

          {/* Sound Synthesizer Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              sounds.playSwitch();
            }}
            title={soundEnabled ? 'Mute micro-interaction sound effects' : 'Enable tactile micro-interaction sounds'}
            className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1.5 ${
              soundEnabled 
                ? 'bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan shadow-glow-sm' 
                : 'bg-obsidian-900 border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-1.5 bg-brand-cyan animate-pulse"></span>
                  <span className="w-0.5 h-3 bg-brand-cyan animate-pulse delay-75"></span>
                  <span className="w-0.5 h-2 bg-brand-cyan animate-pulse delay-150"></span>
                </div>
              </>
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Theme Accent Picker */}
          <div className="relative">
            <button
              onClick={() => {
                setThemeDropdownOpen(!themeDropdownOpen);
                sounds.playClick();
              }}
              title="Change Ambient Glow Accent"
              className="p-2 rounded-lg bg-obsidian-900 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all flex items-center"
            >
              <Palette className="w-3.5 h-3.5" />
            </button>

            {themeDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-36 bg-obsidian-900 border border-white/15 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                onClick={() => setThemeDropdownOpen(false)}
              >
                <div className="text-[10px] font-mono text-slate-400 px-2 py-1 uppercase tracking-wider">
                  Glow Accent
                </div>
                {themeOptions.map(t => (
                  <button
                    key={t.hex}
                    onClick={() => {
                      onSelectAccent(t.hex);
                      sounds.playPop();
                      onShowToast(`Accent switched to ${t.name}`);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      accentColor === t.hex ? 'bg-white/15 text-white' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{t.name}</span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.hex }}></span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Raycast-style Command Palette Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCommandPalette();
            }}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-obsidian-900 border border-white/15 text-xs text-slate-300 hover:border-white/30 hover:text-white transition-all shadow-sm group"
          >
            <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-cyan transition-colors" />
            <span className="hidden sm:inline text-[11px] font-sans text-slate-400">Search</span>
            <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-400 group-hover:text-slate-200">
              <Command className="w-2.5 h-2.5" />K
            </kbd>
          </button>

          {/* Direct Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-medium text-white transition-all shadow-inner hover:shadow-glow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3 h-3 text-slate-300" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-obsidian-900 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-white/10 space-y-2 pb-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="block w-full text-center px-4 py-2 mt-2 rounded-lg bg-white/10 text-white font-medium text-sm"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
