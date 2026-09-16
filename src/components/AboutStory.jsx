import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Code2, 
  Brain, 
  Trophy, 
  Flame, 
  ArrowRight, 
  Lightbulb, 
  Workflow, 
  Compass,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';
import { sounds } from '../audio/soundEffects';

export default function AboutStory() {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef(null);

  // Trigger entrance when the cards actually enter the viewport,
  // and reset when scrolled out of view so it replays smoothly every time!
  useEffect(() => {
    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small micro-delay ensures DOM paint has registered initial hidden state
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, 50);
        } else {
          // Reset when scrolled away so scrolling back re-triggers incoming animation
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.12, // Fires when 12% of the cards container is visible
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Replay entrance animation
  const handleReplayEntrance = (e) => {
    if (e) e.stopPropagation();
    sounds.playModalOpen();
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 70);
  };

  return (
    <section 
      id="about" 
      className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12 overflow-x-clip"
    >
      
      {/* Header with smooth slide-in & motion blur from top */}
      <div 
        style={isVisible ? { animationDelay: '100ms' } : {}}
        className={`space-y-3 transition-all duration-500 ease-out ${
          isVisible 
            ? 'animate-slide-blur-down opacity-100' 
            : 'opacity-0 -translate-y-8 blur-md'
        }`}
      >
        <div 
          onClick={handleReplayEntrance}
          title="Click to replay entrance animation"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan cursor-pointer hover:border-brand-cyan/40 hover:bg-white/10 transition-all duration-300 group select-none"
        >
          <Compass className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-180 text-brand-cyan" />
          <span>The Philosophy & Background</span>
          <span className="text-[10px] text-slate-500 group-hover:text-brand-cyan transition-colors flex items-center gap-1 pl-1 border-l border-white/10">
            <RotateCcw className="w-2.5 h-2.5" />
            replay
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Beyond Just Writing Code
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base font-normal">
          Turning ideas into products that people can actually use, with rapid execution and continuous curiosity.
        </p>
      </div>

      {/* Main Narrative Bento Layout (Directly observed for viewport entrance) */}
      <div 
        ref={cardsRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-h-[450px]"
      >
        
        {/* Left Column: Comes smoothly from the LEFT with Motion Blur & Smooth Shake */}
        <div 
          style={isVisible ? { animationDelay: '150ms' } : {}}
          className={`lg:col-span-7 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl relative overflow-hidden ${
            isVisible 
              ? 'animate-slide-blur-left opacity-100' 
              : 'opacity-0 -translate-x-32 blur-lg pointer-events-none'
          }`}
        >
          {/* Ambient background glow accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="space-y-4 relative z-10">
            
            <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
              <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
              <span>HEY, I'M SUMIT</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
              Full-Stack Developer & AI enthusiast who enjoys turning ideas into products that people can actually use.
            </h3>

            <div className="space-y-3 text-sm text-slate-300 font-sans leading-relaxed">
              <p>
                I started with web development, building interfaces and applications with <strong className="text-white font-medium">React, JavaScript, Node.js, and modern backend technologies</strong>.
              </p>
              <p>
                Over time, I became more interested in what happens <span className="text-brand-cyan font-medium">beyond the UI</span> — how products are architected, how data flows through systems, and how AI can make software more intelligent and useful.
              </p>
              <p className="text-slate-400">
                Today, I’m actively exploring the intersection of <strong className="text-slate-200">Full-Stack Development and AI/ML</strong>, while continuously improving my problem-solving skills through <strong className="text-slate-200">Data Structures & Algorithms (DSA)</strong> and real-world projects.
              </p>
            </div>
          </div>

          {/* Bottom Highlight Quote */}
          <div className="p-4 rounded-2xl bg-obsidian-950 border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <p className="text-xs font-mono text-slate-200 italic">
                "Code is my tool. Curiosity is my advantage. Building is what I enjoy."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Cards come smoothly from the RIGHT with Motion Blur & Smooth Shake */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          
          {/* Card A: Hackathon Dual Badges */}
          <div 
            style={isVisible ? { animationDelay: '300ms' } : {}}
            className={`rounded-3xl bg-gradient-to-br from-amber-500/10 via-obsidian-900/90 to-obsidian-950 border border-amber-500/20 p-6 space-y-4 shadow-xl backdrop-blur-xl relative ${
              isVisible 
                ? 'animate-slide-blur-right opacity-100' 
                : 'opacity-0 translate-x-32 blur-lg pointer-events-none'
            }`}
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-mono font-semibold">
                <Trophy className="w-3.5 h-3.5" />
                <span>Hackathon Tested</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">High-Pressure Execution</span>
            </div>

            {/* Hackathon 1: Smart India Hackathon */}
            <div className="p-3 rounded-2xl bg-obsidian-950/80 border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Smart India Hackathon
                </span>
                <span className="text-amber-400">36h National Sprint</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">
                Turned complex problem statements into functional, pitched software under extreme timeline pressure.
              </p>
            </div>

            {/* Hackathon 2: Hack-2-Win at CGC */}
            <div className="p-3 rounded-2xl bg-obsidian-950/80 border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-brand-cyan" />
                  Hack-2-Win @ CGC
                </span>
                <span className="text-brand-cyan">24h Hackathon</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">
                24-hour sprint at Chandigarh Group of Colleges (CGC) shipping rapid 0-to-1 full-stack solutions.
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans italic border-t border-white/10 pt-2">
              "Building under pressure taught me something college never could: <strong className="text-amber-200 font-medium not-italic">a good idea means very little until you turn it into a working product.</strong>"
            </p>
          </div>

          {/* Card B: Core Engineering Focus Matrix */}
          <div 
            style={isVisible ? { animationDelay: '450ms' } : {}}
            className={`rounded-3xl bg-obsidian-900/80 border border-white/10 p-5 space-y-3 shadow-xl backdrop-blur-xl ${
              isVisible 
                ? 'animate-slide-blur-right opacity-100' 
                : 'opacity-0 translate-x-32 blur-lg pointer-events-none'
            }`}
          >
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Workflow className="w-3.5 h-3.5 text-brand-cyan" />
              <span>What Drives My Building</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-obsidian-950 border border-white/5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>End-to-End MERN & Full-Stack Systems</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-obsidian-950 border border-white/5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span>AI Integration & Intelligent Data Flows</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-obsidian-950 border border-white/5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>DSA Rigor & Algorithmic Problem Solving</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
