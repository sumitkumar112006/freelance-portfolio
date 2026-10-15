import React, { useState } from 'react';
import { 
  Layers, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Star, 
  Sparkles, 
  Zap,
  CheckCircle,
  Eye
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { sounds } from '../audio/soundEffects';

export default function ProjectShowcase({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Mouse spotlight handler on hover
  const handleMouseMove = (e, cardId) => {
    const card = document.getElementById(`proj-card-${cardId}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="works" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
            <Layers className="w-3.5 h-3.5" />
            <span>Selected Production Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Flagship Engineering Works
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Engineered from ground zero for maximum throughput, sub-millisecond responsiveness, and architectural clarity.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-obsidian-900 border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                sounds.playClick();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === cat 
                  ? 'bg-white/15 text-white shadow-sm font-semibold' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`proj-card-${project.id}`}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onClick={() => {
              sounds.playClick();
              onSelectProject(project);
            }}
            className="spotlight-card rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 cursor-pointer group shadow-2xl hover:scale-[1.01]"
          >
            {/* Card Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-brand-cyan">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300 px-2 py-0.5 rounded-md bg-amber-500/10">
                    <Star className="w-3 h-3 fill-amber-300" />
                    {project.stars}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10">
                    {project.status}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>

              <p className="text-sm text-slate-300 line-clamp-2">
                {project.tagline}
              </p>
            </div>

            {/* Metrics Snapshot (SaaS Style) */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-obsidian-950/80 border border-white/5">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{m.label}</div>
                  <div className="text-base font-display font-bold text-white flex items-center gap-1.5">
                    <span>{m.value}</span>
                    <span className="text-[10px] font-mono font-normal text-emerald-400">{m.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Badges & Inspect Trigger */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-slate-400 text-[11px]">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-1.5 py-0.5 rounded bg-white/5 text-slate-500 text-[11px]">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <span className="flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors">
                <Eye className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Deep Dive</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
