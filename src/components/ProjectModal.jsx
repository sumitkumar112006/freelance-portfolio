import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  GitBranch, 
  Terminal,
  ArrowRight
} from 'lucide-react';
import { sounds } from '../audio/soundEffects';

export default function ProjectModal({ project, onClose, onShowToast }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'architecture', 'metrics'

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview & Problem', icon: Layers },
    { id: 'architecture', label: 'System Architecture', icon: Cpu },
    { id: 'metrics', label: 'Benchmark Telemetry', icon: TrendingUp },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-obsidian-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-200 animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 bg-obsidian-850/60 relative">
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-2 pr-12">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan">
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">{project.status}</span>
              <span>•</span>
              <span className="text-slate-500">{project.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 mt-6 p-1 rounded-xl bg-obsidian-950 border border-white/10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    sounds.playClick();
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono transition-all ${
                    isActive 
                      ? 'bg-white/15 text-white shadow-sm border border-white/10' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">The Architectural Challenge</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engineering Feats</h4>
                <div className="space-y-2.5">
                  {project.architecture.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-obsidian-950/80 border border-white/5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tech Ecosystem</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SYSTEM ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Distributed Data Flow Pipeline</h4>
                <p className="text-xs text-slate-400">
                  Sequential event lifecycle from client ingress to edge consensus.
                </p>
              </div>

              {/* Step Architecture Diagram */}
              <div className="space-y-3">
                {project.architecture.diagram.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-obsidian-950 border border-white/10 flex items-start gap-4 relative overflow-hidden"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-mono text-brand-cyan font-bold shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-white font-semibold flex items-center gap-2">
                        {step.stage}
                        {idx < project.architecture.diagram.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-slate-500" />
                        )}
                      </div>
                      <p className="text-xs text-slate-300">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BENCHMARK TELEMETRY */}
          {activeTab === 'metrics' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Verified Production Metrics</h4>
                <p className="text-xs text-slate-400">
                  Real-world load testing telemetry and SLA verifications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-obsidian-950 border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{m.label}</span>
                    <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                      <span>{m.value}</span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <span>Verified:</span>
                      <strong>{m.change}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Links */}
        <div className="p-6 border-t border-white/10 bg-obsidian-950 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <GitBranch className="w-4 h-4 text-brand-cyan" />
            <span>Clean Architecture • Fully Documented</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sounds.playSuccess();
                navigator.clipboard.writeText(project.githubUrl);
                onShowToast('Repository link copied!');
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Copy Repo</span>
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sounds.playPop()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-obsidian-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all"
            >
              <span>Live Instance</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
