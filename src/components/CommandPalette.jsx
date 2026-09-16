import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Terminal, 
  Layers, 
  Sparkles, 
  Sliders, 
  Mail, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  Code2, 
  Palette, 
  X,
  FileText
} from 'lucide-react';
import { sounds } from '../audio/soundEffects';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  onSelectProject, 
  projects, 
  soundEnabled, 
  onToggleSound,
  accentColor,
  onSelectAccent,
  onShowToast
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const themeOptions = [
    { name: 'Cyan Glow', hex: '#00F0FF' },
    { name: 'Electric Violet', hex: '#8B5CF6' },
    { name: 'Emerald Edge', hex: '#10B981' },
    { name: 'Solar Amber', hex: '#F59E0B' }
  ];

  const staticActions = [
    {
      id: 'sec-about',
      title: 'About Sumit & Engineering Philosophy',
      category: 'Navigation',
      icon: Sparkles,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-works',
      title: 'Navigate to Selected Works',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-lab',
      title: 'Navigate to Interactive Bento Lab',
      category: 'Navigation',
      icon: Sparkles,
      action: () => {
        document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-estimator',
      title: 'Open Project Scope & Timeline Calculator',
      category: 'Navigation',
      icon: Sliders,
      action: () => {
        document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-github',
      title: 'View Live GitHub Commits Stream',
      category: 'Navigation',
      icon: Terminal,
      action: () => {
        document.getElementById('github-activity')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-changelog',
      title: 'View Engineering Changelog',
      category: 'Navigation',
      icon: Terminal,
      action: () => {
        document.getElementById('changelog')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'act-copy-email',
      title: 'Copy Direct Email Address',
      category: 'Actions',
      icon: Mail,
      shortcut: 'amitk839170@gmail.com',
      action: () => {
        navigator.clipboard.writeText('amitk839170@gmail.com');
        sounds.playSuccess();
        onShowToast('Copied amitk839170@gmail.com to clipboard!');
        onClose();
      }
    },
    {
      id: 'act-toggle-audio',
      title: soundEnabled ? 'Mute Interface Sound FX' : 'Enable Tactile Sound FX',
      category: 'Preferences',
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => {
        onToggleSound();
        sounds.playSwitch();
        onClose();
      }
    }
  ];

  // Project quick links
  const projectActions = projects.map(p => ({
    id: `proj-${p.id}`,
    title: `Case Study: ${p.title}`,
    subtitle: p.tagline,
    category: 'Case Studies',
    icon: Code2,
    action: () => {
      onSelectProject(p);
      onClose();
    }
  }));

  // Combine and filter
  const allItems = [...staticActions, ...projectActions];
  const filteredItems = allItems.filter(item => {
    const text = (item.title + ' ' + (item.subtitle || '') + ' ' + item.category).toLowerCase();
    return text.includes(query.toLowerCase());
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      sounds.playModalOpen();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation inside palette
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      sounds.playClick();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      sounds.playClick();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        sounds.playClick();
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-obsidian-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-slate-200 transition-all transform scale-100"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-obsidian-850/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command, search case studies, or jump to section..."
            className="w-full bg-transparent border-none outline-none text-sm text-slate-100 placeholder:text-slate-500 font-sans"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-400">
            ESC to close
          </kbd>
        </div>

        {/* Accent switcher shortcut bar */}
        <div className="px-4 py-2 bg-obsidian-950/60 border-b border-white/5 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-mono text-[11px]">
            <Palette className="w-3.5 h-3.5 text-slate-400" />
            Accent Glow:
          </span>
          <div className="flex items-center gap-2">
            {themeOptions.map(theme => (
              <button
                key={theme.hex}
                onClick={() => {
                  onSelectAccent(theme.hex);
                  sounds.playPop();
                }}
                className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
                  accentColor === theme.hex 
                    ? 'bg-white/15 text-white border border-white/20' 
                    : 'text-slate-400 hover:bg-white/5'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.hex }} />
                <span>{theme.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results list */}
        <div className="max-h-[360px] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm font-mono">
              No matching commands or case studies found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    sounds.playClick();
                    item.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-brand-cyan/10 border border-brand-cyan/30 text-white pl-4' 
                      : 'text-slate-300 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-medium truncate">{item.title}</p>
                      {item.subtitle && (
                        <p className="text-[11px] text-slate-400 truncate">{item.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      {item.category}
                    </span>
                    {isSelected && (
                      <kbd className="text-[10px] font-mono text-brand-cyan">↵</kbd>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-obsidian-950 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-white/5 rounded border border-white/10">↑</kbd> <kbd className="px-1 py-0.5 bg-white/5 rounded border border-white/10">↓</kbd> to navigate</span>
            <span><kbd className="px-1 py-0.5 bg-white/5 rounded border border-white/10">↵</kbd> to select</span>
          </div>
          <span>Crafted with Raycast precision</span>
        </div>
      </div>
    </div>
  );
}
