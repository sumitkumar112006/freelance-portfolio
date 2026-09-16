import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Activity, 
  Cpu, 
  Globe, 
  Sliders, 
  Music, 
  Terminal, 
  Layers, 
  Check, 
  Copy, 
  Play, 
  Radio,
  Zap,
  Clock
} from 'lucide-react';
import { techRadarData } from '../data/techRadarData';
import { sounds } from '../audio/soundEffects';

export default function BentoGrid({ onShowToast, accentColor }) {
  // --- Card 1: Interactive Component Lab State ---
  const [btnVariant, setBtnVariant] = useState('glow'); // 'glow', 'glass', 'neon'
  const [btnRadius, setBtnRadius] = useState('rounded-xl'); // 'rounded-none', 'rounded-xl', 'rounded-full'
  const [btnSize, setBtnSize] = useState('md'); // 'sm', 'md', 'lg'
  const [btnCopied, setBtnCopied] = useState(false);

  // --- Card 2: Tech Radar State ---
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [selectedSkill, setSelectedSkill] = useState(techRadarData.categories[0].skills[0]);

  // --- Card 4: Global Edge Map State ---
  const [selectedNode, setSelectedNode] = useState('mumbai');
  const edgeNodes = [
    { id: 'mumbai', name: 'Mumbai (BOM)', ping: '4.2ms', status: 'Optimal', x: '68%', y: '52%', traffic: '340k req/s' },
    { id: 'frankfurt', name: 'Frankfurt (FRA)', ping: '21.8ms', status: 'Active', x: '49%', y: '34%', traffic: '520k req/s' },
    { id: 'tokyo', name: 'Tokyo (NRT)', ping: '18.4ms', status: 'Active', x: '84%', y: '38%', traffic: '410k req/s' },
    { id: 'sf', name: 'San Francisco (SFO)', ping: '14.1ms', status: 'Optimal', x: '20%', y: '36%', traffic: '680k req/s' },
    { id: 'singapore', name: 'Singapore (SIN)', ping: '11.5ms', status: 'Optimal', x: '74%', y: '60%', traffic: '290k req/s' }
  ];

  // Generated code for Component Lab
  const generateComponentCode = () => {
    let classes = 'inline-flex items-center gap-2 font-medium transition-all ';
    if (btnSize === 'sm') classes += 'px-3 py-1.5 text-xs ';
    if (btnSize === 'md') classes += 'px-5 py-2.5 text-sm ';
    if (btnSize === 'lg') classes += 'px-6 py-3.5 text-base ';
    classes += `${btnRadius} `;
    if (btnVariant === 'glow') classes += 'bg-cyan-400 text-black shadow-glow-cyan hover:scale-[1.02]';
    if (btnVariant === 'glass') classes += 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/15';
    if (btnVariant === 'neon') classes += 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 shadow-[0_0_15px_rgba(0,240,255,0.4)]';

    return `<Button\n  variant="${btnVariant}"\n  radius="${btnRadius.replace('rounded-', '')}"\n  className="${classes.trim()}"\n>\n  <span>Deploy to Edge</span>\n  <Zap className="w-4 h-4" />\n</Button>`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateComponentCode());
    sounds.playSuccess();
    setBtnCopied(true);
    onShowToast('Component JSX copied to clipboard!');
    setTimeout(() => setBtnCopied(false), 2000);
  };

  const activeCategoryData = techRadarData.categories.find(c => c.id === activeCategory) || techRadarData.categories[0];
  const currentNode = edgeNodes.find(n => n.id === selectedNode) || edgeNodes[0];

  return (
    <section id="lab" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Engineering Sandbox</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          The Craft Lab & Telemetry Matrix
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Test live design system primitives, inspect distributed infrastructure telemetry, and explore deep stack proficiencies in real time.
        </p>
      </div>

      {/* 4-Card SaaS Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* CARD 1: Interactive Component Lab (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base">Synthetix Component Sandbox</h3>
                <p className="text-xs text-slate-400 font-mono">Real-time reactive props & JSX output</p>
              </div>
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-all"
            >
              {btnCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{btnCopied ? 'Copied' : 'Copy JSX'}</span>
            </button>
          </div>

          {/* Interactive Live Canvas Area */}
          <div className="relative h-44 rounded-2xl bg-obsidian-950/80 border border-white/5 flex items-center justify-center p-6 overflow-hidden grid-lines">
            <div className="absolute top-2 left-3 text-[10px] font-mono text-slate-500">LIVE RENDER VIEWPORT</div>
            
            {/* The live reactive button */}
            <button
              onClick={() => {
                sounds.playPop();
                onShowToast('Simulated microsecond deployment triggered!');
              }}
              className={`inline-flex items-center gap-2 font-medium transition-all transform active:scale-95 ${
                btnSize === 'sm' ? 'px-3 py-1.5 text-xs' :
                btnSize === 'md' ? 'px-5 py-2.5 text-sm' :
                'px-7 py-3.5 text-base'
              } ${btnRadius} ${
                btnVariant === 'glow' ? 'bg-brand-cyan text-obsidian-950 font-bold shadow-glow-cyan hover:brightness-110' :
                btnVariant === 'glass' ? 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/15 shadow-inner' :
                'border border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
              }`}
            >
              <span>Deploy to Edge</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>

          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10 text-xs">
            {/* Variant Selector */}
            <div className="space-y-1.5">
              <label className="text-slate-400 font-mono text-[11px]">Variant</label>
              <div className="flex gap-1.5 p-1 rounded-lg bg-obsidian-950 border border-white/5">
                {['glow', 'glass', 'neon'].map(v => (
                  <button
                    key={v}
                    onClick={() => {
                      setBtnVariant(v);
                      sounds.playClick();
                    }}
                    className={`flex-1 py-1 rounded text-center capitalize font-mono text-[11px] transition-all ${
                      btnVariant === v ? 'bg-white/15 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Radius Selector */}
            <div className="space-y-1.5">
              <label className="text-slate-400 font-mono text-[11px]">Border Radius</label>
              <div className="flex gap-1.5 p-1 rounded-lg bg-obsidian-950 border border-white/5">
                {[
                  { label: 'Sharp', val: 'rounded-none' },
                  { label: 'Curved', val: 'rounded-xl' },
                  { label: 'Pill', val: 'rounded-full' }
                ].map(r => (
                  <button
                    key={r.val}
                    onClick={() => {
                      setBtnRadius(r.val);
                      sounds.playClick();
                    }}
                    className={`flex-1 py-1 rounded text-center font-mono text-[11px] transition-all ${
                      btnRadius === r.val ? 'bg-white/15 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-1.5">
              <label className="text-slate-400 font-mono text-[11px]">Scale</label>
              <div className="flex gap-1.5 p-1 rounded-lg bg-obsidian-950 border border-white/5">
                {['sm', 'md', 'lg'].map(s => (
                  <button
                    key={s}
                    onClick={() => {
                      setBtnSize(s);
                      sounds.playClick();
                    }}
                    className={`flex-1 py-1 rounded text-center uppercase font-mono text-[11px] transition-all ${
                      btnSize === s ? 'bg-white/15 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: Real-time Telemetry & Studio Station (5 Cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Radio className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base">Studio Live Stream</h3>
                <p className="text-xs text-slate-400 font-mono">Current telemetry & active focus</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              ONLINE
            </span>
          </div>

          <div className="space-y-4">
            {/* Now Coding */}
            <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-white/5 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-brand-cyan" />
                Active Engineering Focus
              </div>
              <p className="text-xs font-mono text-slate-200">
                Building Zero-Copy WebAssembly SIMD pipeline for edge KV consensus.
              </p>
            </div>

            {/* Music / Audio Telemetry */}
            <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">SPOTIFY SIMULATOR</div>
                  <div className="text-xs font-semibold text-white">Max Richter — Path 5 (delta)</div>
                </div>
              </div>

              {/* Animated visualizer bars */}
              <div className="flex items-end gap-1 h-5">
                <span className="w-1 bg-brand-cyan rounded-full animate-[pulse_1s_ease-in-out_infinite] h-3"></span>
                <span className="w-1 bg-brand-cyan rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-5"></span>
                <span className="w-1 bg-brand-cyan rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-2"></span>
                <span className="w-1 bg-brand-cyan rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-4"></span>
              </div>
            </div>

            {/* Heap & Environment */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-obsidian-950/60 border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400">V8 HEAP LOAD</span>
                <div className="text-slate-200 font-bold">28.4 MB / 1.4 GB</div>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-950/60 border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400">LOCAL CLOCK</span>
                <div className="text-slate-200 font-bold">GMT+5:30 (Bangalore)</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-400 border-t border-white/10 pt-3 flex items-center justify-between">
            <span>Terminal Shell: zsh / tmux</span>
            <span className="text-emerald-400">All Nodes Green</span>
          </div>
        </div>

        {/* CARD 3: Architecture & Tech Radar (7 Cols) */}
        <div id="radar" className="lg:col-span-7 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base">Full-Stack Tech Radar</h3>
                <p className="text-xs text-slate-400 font-mono">Verified proficiencies & architecture standards</p>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex p-1 rounded-xl bg-obsidian-950 border border-white/5">
              {techRadarData.categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCategory(c.id);
                    setSelectedSkill(c.skills[0]);
                    sounds.playClick();
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === c.id 
                      ? 'bg-white/15 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {c.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Skill List with Progress Gauges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeCategoryData.skills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => {
                    setSelectedSkill(skill);
                    sounds.playClick();
                  }}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-white/10 border-brand-cyan/50 shadow-glow-sm' 
                      : 'bg-obsidian-950/60 border-white/5 hover:border-white/15 hover:bg-obsidian-950'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{skill.experience}</span>
                  </div>

                  {/* Meter Bar */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-cyan to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 mt-2 truncate">
                    {skill.highlight}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Selected Skill Deep Dive Detail */}
          <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-white/10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-brand-cyan">Selected:</span>
              <strong className="text-white font-semibold">{selectedSkill.name}</strong>
              <span className="text-slate-500">—</span>
              <span className="text-slate-300">{selectedSkill.highlight}</span>
            </div>
            <span className="text-emerald-400 font-bold shrink-0">{selectedSkill.level}%</span>
          </div>
        </div>

        {/* CARD 4: Global Distributed Edge Topology (5 Cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-brand-cyan">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base">Global Edge Anycast</h3>
                <p className="text-xs text-slate-400 font-mono">Interactive distributed node telemetry</p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-400">48 PoPs</span>
          </div>

          {/* Interactive Node Map */}
          <div className="relative h-44 rounded-2xl bg-obsidian-950 border border-white/5 overflow-hidden flex items-center justify-center">
            {/* World grid lines background */}
            <div className="absolute inset-0 grid-lines opacity-40"></div>

            {/* Glowing Edge Node Pins */}
            {edgeNodes.map(node => (
              <button
                key={node.id}
                onClick={() => {
                  setSelectedNode(node.id);
                  sounds.playPop();
                }}
                style={{ top: node.y, left: node.x }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
              >
                <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    selectedNode === node.id ? 'bg-brand-cyan' : 'bg-white/40'
                  }`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${
                    selectedNode === node.id ? 'bg-brand-cyan' : 'bg-slate-400'
                  }`}></span>
                </span>
                <span className="hidden group-hover:block absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-obsidian-900 border border-white/10 text-[9px] font-mono text-slate-200 whitespace-nowrap z-20 shadow-lg">
                  {node.name}
                </span>
              </button>
            ))}

            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-500">
              Click any node pin to inspect metrics
            </div>
          </div>

          {/* Selected Node Telemetry Card */}
          <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                {currentNode.name}
              </span>
              <span className="text-brand-cyan font-bold">{currentNode.ping} RTT</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
              <span>Traffic Ingress: {currentNode.traffic}</span>
              <span className="text-emerald-400">{currentNode.status}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
