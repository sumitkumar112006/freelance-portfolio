import React from 'react';
import { 
  ArrowDown, 
  Terminal, 
  Sparkles, 
  Zap, 
  Command, 
  Sliders, 
  ShieldCheck, 
  GitCommit,
  ArrowUpRight,
  Cpu,
  Globe,
  Trophy,
  Brain,
  Layers
} from 'lucide-react';
import Canvas3D from './Canvas3D';
import { sounds } from '../audio/soundEffects';

export default function Hero({ onOpenCommandPalette, accentColor }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 px-4 lg:px-8 overflow-hidden">
      
      {/* Background radial ambient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ background: accentColor }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Craft Copy & Actions */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-white/15 text-xs font-mono backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">Open for Full-Stack & AI Roles / Collaborations</span>
            <span className="text-slate-600">/</span>
            <span className="text-brand-cyan text-[11px]">Bangalore • UTC+5:30</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
            Turning ideas into scalable products with{' '}
            <span className="gradient-text-accent">Full-Stack & AI.</span>
          </h1>

          {/* Value Prop / Subheadline */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Hey, I’m <strong className="text-white font-semibold">Sumit</strong> — a Full-Stack Developer & AI enthusiast. 
            I build responsive web interfaces, robust backend architectures, and intelligent AI-powered solutions that solve real problems.
          </p>

          {/* Quote Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-obsidian-900 border border-white/10 text-xs font-mono text-slate-400">
            <span className="text-brand-cyan">“</span>
            <span>Code is my tool. Curiosity is my advantage. Building is what I enjoy.</span>
            <span className="text-brand-cyan">”</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                sounds.playClick();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-obsidian-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all shadow-glow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore My Story & Stack</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#github-activity"
              onClick={(e) => {
                e.preventDefault();
                sounds.playClick();
                document.getElementById('github-activity')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 border border-white/15 text-slate-200 font-medium text-xs tracking-wide hover:border-white/30 transition-all hover:scale-[1.02]"
            >
              <GitCommit className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Live GitHub Stream</span>
            </a>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenCommandPalette();
              }}
              className="flex items-center gap-2 px-3.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white font-mono text-xs transition-all"
            >
              <Command className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>
          </div>

          {/* Social and quick proof tags */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Smart India Hackathon</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-cyan" />
              <span>MERN & Modern Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-indigo-400" />
              <span>AI & LLM Integration</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D WebGL Canvas */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[480px] rounded-3xl bg-obsidian-900/60 border border-white/10 p-2 shadow-2xl backdrop-blur-xl group overflow-hidden">
            
            {/* Top terminal-style bar */}
            <div className="absolute top-3 left-4 z-20 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 text-[10px] font-mono text-slate-500">canvas://interactive-physics.glsl</span>
            </div>

            {/* Three.js Canvas */}
            <Canvas3D accentColor={accentColor} />

            {/* Bottom hint overlay */}
            <div className="absolute bottom-3 inset-x-4 z-20 flex items-center justify-between px-3 py-1.5 rounded-lg bg-obsidian-950/80 border border-white/10 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-brand-cyan" />
                Mouse Parallax & Impulse Physics
              </span>
              <span className="text-slate-500">60 FPS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Telemetry KPI Bar */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-obsidian-900/50 border border-white/5 space-y-1">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Hackathon Experience</div>
          <div className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
            <span>SIH Builder</span>
            <span className="text-[10px] font-mono font-normal text-amber-400 px-1.5 py-0.5 rounded bg-amber-500/10">36h Sprint</span>
          </div>
          <div className="text-[11px] text-slate-400">Rapid High-Pressure Delivery</div>
        </div>

        <div className="p-4 rounded-xl bg-obsidian-900/50 border border-white/5 space-y-1">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Full-Stack Core</div>
          <div className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
            <span>MERN & Node</span>
            <span className="text-[10px] font-mono font-normal text-brand-cyan px-1.5 py-0.5 rounded bg-cyan-500/10">React</span>
          </div>
          <div className="text-[11px] text-slate-400">Full-Cycle Web Architecture</div>
        </div>

        <div className="p-4 rounded-xl bg-obsidian-900/50 border border-white/5 space-y-1">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">AI & Intelligence</div>
          <div className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
            <span>AI / LLMs</span>
            <span className="text-[10px] font-mono font-normal text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-500/10">ML</span>
          </div>
          <div className="text-[11px] text-slate-400">Intelligent Data Pipelines</div>
        </div>

        <div className="p-4 rounded-xl bg-obsidian-900/50 border border-white/5 space-y-1">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Problem Solving</div>
          <div className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
            <span>DSA Rigor</span>
            <span className="text-[10px] font-mono font-normal text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10">Optimized</span>
          </div>
          <div className="text-[11px] text-slate-400">Algorithmic Efficiency</div>
        </div>
      </div>
    </section>
  );
}
