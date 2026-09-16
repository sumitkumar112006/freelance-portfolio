import React from 'react';
import { Terminal, GitCommit, GitBranch, Sparkles } from 'lucide-react';
import { changelogData } from '../data/changelogData';
import { sounds } from '../audio/soundEffects';

export default function ExperienceLog() {
  return (
    <section id="changelog" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
          <Terminal className="w-3.5 h-3.5" />
          <span>Engineering Milestones & Releases</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Career Git Log & Releases
        </h2>
        <p className="text-slate-400 max-w-xl text-sm sm:text-base">
          A continuous timeline of architectural deployments, open-source primitives, and performance breakthroughs.
        </p>
      </div>

      {/* Changelog Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
        {changelogData.map((item, index) => (
          <div key={index} className="relative group">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-obsidian-950 border border-white/20 text-brand-cyan shadow-md group-hover:border-brand-cyan transition-colors">
              <GitCommit className="w-3.5 h-3.5" />
            </div>

            {/* Content Box */}
            <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-white/20 transition-all space-y-3 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-white/10">
                    {item.version}
                  </span>
                  <span className="text-xs font-mono text-brand-cyan px-2 py-0.5 rounded bg-brand-cyan/10">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                  <span>commit <code className="text-slate-400">{item.hash}</code></span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-display font-bold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
