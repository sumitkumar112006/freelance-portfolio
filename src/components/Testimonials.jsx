import React from 'react';
import { MessageSquare, ShieldCheck, Quote } from 'lucide-react';
import { testimonialsData } from '../data/changelogData';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Peer & Leadership Endorsements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          What Engineering Leaders Say
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((t) => (
          <div 
            key={t.id}
            className="p-6 sm:p-8 rounded-3xl bg-obsidian-900/70 border border-white/10 flex flex-col justify-between space-y-6 backdrop-blur-xl hover:border-white/20 transition-all shadow-xl"
          >
            <div className="space-y-4">
              <Quote className="w-6 h-6 text-slate-600" />
              <p className="text-sm text-slate-300 font-sans leading-relaxed italic">
                "{t.text}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-obsidian-950 border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-brand-cyan shrink-0">
                {t.avatar}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white flex items-center gap-1.5 truncate">
                  <span>{t.name}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                </div>
                <div className="text-xs text-slate-400 truncate">
                  {t.role} • <span className="text-slate-300">{t.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
