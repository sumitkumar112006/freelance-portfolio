import React, { useState } from 'react';
import { 
  Sliders, 
  Layers, 
  Clock, 
  Check, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Cpu,
  Mail,
  Copy
} from 'lucide-react';
import { sounds } from '../audio/soundEffects';

export default function ScopeEstimator({ onShowToast }) {
  const [projectType, setProjectType] = useState('mvp');
  const [timeline, setTimeline] = useState('4-sprints');
  const [selectedAddons, setSelectedAddons] = useState(['vitals', 'audio']);

  const projectTypes = [
    {
      id: 'mern',
      name: 'Full-Stack MERN Web App',
      desc: 'Complete full-cycle web application with React, Node.js, Express, MongoDB, and modern auth.',
      baseSprints: 3,
      deliverables: ['React/Next.js Frontend', 'Node/Express REST API', 'MongoDB Data Tier', 'Responsive UI & Auth']
    },
    {
      id: 'ai-app',
      name: 'AI-Powered Intelligent Platform',
      desc: 'Smart web platform with AI/LLM integrations, data pipelines, and contextual user assistants.',
      baseSprints: 3,
      deliverables: ['AI/LLM Integration', 'Streaming UI Responses', 'Full-Stack Backend', 'Prompt Engineering']
    },
    {
      id: 'hackathon-mvp',
      name: 'Rapid MVP / Hackathon-Velocity',
      desc: 'High-speed 0-to-1 prototype built with relentless focus on what actually works.',
      baseSprints: 1,
      deliverables: ['Working Interactive MVP', 'Core User Flow', 'Live Cloud Deployment', 'Pitch Deck & Demo']
    },
    {
      id: 'react-ui',
      name: 'Modern React Frontend & API Architecture',
      desc: 'Clean modular UI, state management, fast REST integrations, and crisp user micro-interactions.',
      baseSprints: 2,
      deliverables: ['React Components & Hooks', 'Tailwind CSS Layouts', 'REST API Integration', 'Mobile Optimization']
    }
  ];

  const addonsList = [
    { id: 'vitals', name: '100/100 Core Web Vitals Guarantee', desc: 'Sub-50ms FID & Zero Layout Shift' },
    { id: 'audio', name: 'Procedural Web Audio Micro-Synth', desc: 'Self-contained tactile UI sounds' },
    { id: 'offline', name: 'Offline-First CRDT Sync', desc: 'Local IndexedDB + conflict-free sync' },
    { id: 'sec', name: 'Pen-Test & Zero-Trust Auth', desc: 'OWASP Top 10 compliance & encryption' }
  ];

  const toggleAddon = (id) => {
    sounds.playClick();
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentProject = projectTypes.find(p => p.id === projectType) || projectTypes[0];

  // Calculate estimated weeks
  let calculatedWeeks = currentProject.baseSprints * 2;
  if (timeline === 'express') calculatedWeeks = Math.max(2, Math.round(calculatedWeeks * 0.7));
  if (selectedAddons.length > 2) calculatedWeeks += 1;

  const generateEmailLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${currentProject.name}`);
    const body = encodeURIComponent(
      `Hi Sumit,\n\nI'm interested in collaborating on a project:\n\n` +
      `• Project Type: ${currentProject.name}\n` +
      `• Estimated Duration: ~${calculatedWeeks} Weeks (${timeline})\n` +
      `• Selected Add-ons: ${selectedAddons.map(id => addonsList.find(a => a.id === id)?.name).join(', ')}\n\n` +
      `Let's schedule a call to discuss the engineering architecture and timeline.\n\nBest regards,`
    );
    return `mailto:amitk839170@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyScope = () => {
    const summary = `Project Scope Estimate:\nType: ${currentProject.name}\nEstimated Duration: ~${calculatedWeeks} Weeks\nDeliverables:\n- ${currentProject.deliverables.join('\n- ')}\nAdd-ons: ${selectedAddons.map(id => addonsList.find(a => a.id === id)?.name).join(', ')}`;
    navigator.clipboard.writeText(summary);
    sounds.playSuccess();
    onShowToast('Project scope summary copied!');
  };

  return (
    <section id="estimator" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
          <Sliders className="w-3.5 h-3.5" />
          <span>Scope & Timeline Calculator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Estimate Your Project Architecture
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Configure scope deliverables, choose engineering priorities, and generate an actionable sprint blueprint instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Scope Configurator (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Project Type Selection */}
          <div className="space-y-3">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span>01.</span> Select Architecture Focus
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((type) => {
                const isSelected = projectType === type.id;
                return (
                  <div
                    key={type.id}
                    onClick={() => {
                      setProjectType(type.id);
                      sounds.playClick();
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-white/10 border-brand-cyan/60 shadow-glow-sm' 
                        : 'bg-obsidian-900/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-display font-semibold text-white text-sm">{type.name}</h4>
                      {isSelected && <Check className="w-4 h-4 text-brand-cyan" />}
                    </div>
                    <p className="text-xs text-slate-400">{type.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Timeline Pace */}
          <div className="space-y-3">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span>02.</span> Delivery Pace
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'express', label: 'High Velocity', desc: 'Accelerated 2x' },
                { id: 'standard', label: 'Standard Pace', desc: 'Bi-weekly sprints' },
                { id: 'lead', label: 'Advisory / Lead', desc: 'Architecture review' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setTimeline(p.id);
                    sounds.playClick();
                  }}
                  className={`p-3 rounded-2xl border text-left font-mono transition-all ${
                    timeline === p.id 
                      ? 'bg-white/10 border-brand-cyan/60 text-white shadow-sm' 
                      : 'bg-obsidian-900/60 border-white/10 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-xs font-semibold">{p.label}</div>
                  <div className="text-[10px] text-slate-500">{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Add-on Capabilities */}
          <div className="space-y-3">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span>03.</span> Performance & Accessibility Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addonsList.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between gap-3 transition-all ${
                      isChecked 
                        ? 'bg-white/10 border-white/30 text-white' 
                        : 'bg-obsidian-900/40 border-white/5 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    <div className="space-y-0.5 min-w-0">
                      <div className="text-xs font-mono text-slate-200 font-medium truncate">{addon.name}</div>
                      <div className="text-[10px] text-slate-500 truncate">{addon.desc}</div>
                    </div>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      isChecked ? 'bg-brand-cyan border-brand-cyan text-obsidian-950' : 'border-white/20'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Scope Output Card (5 Cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-obsidian-900/90 border border-white/15 p-6 sm:p-8 space-y-6 backdrop-blur-2xl shadow-2xl relative sticky top-24">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider">ESTIMATED ARCHITECTURE</span>
              <h3 className="text-xl font-display font-bold text-white">{currentProject.name}</h3>
            </div>
            <div className="text-right">
              <span className="text-2xl font-display font-extrabold text-white">~{calculatedWeeks}</span>
              <span className="text-xs font-mono text-slate-400 ml-1">Weeks</span>
            </div>
          </div>

          {/* Included Deliverables */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              Core Deliverables
            </div>
            <div className="space-y-2">
              {currentProject.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Add-ons Pill list */}
          {selectedAddons.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono text-slate-400">Included Modules:</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedAddons.map(id => {
                  const add = addonsList.find(a => a.id === id);
                  return (
                    <span key={id} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {add?.name.split(' ')[0]}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Call to Action Buttons */}
          <div className="pt-4 space-y-2.5">
            <a
              href={generateEmailLink()}
              onClick={() => sounds.playPop()}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-obsidian-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all shadow-glow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Draft Scope Inquiry Email</span>
            </a>

            <button
              onClick={handleCopyScope}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-950 hover:bg-obsidian-850 border border-white/10 text-xs font-mono text-slate-300 transition-all"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Scope Summary</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-500 text-center">
            Zero commitment • Direct reply within 24 hours
          </div>
        </div>

      </div>
    </section>
  );
}
