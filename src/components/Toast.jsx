import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export default function Toast({ message, visible, type = 'success' }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-none">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-obsidian-900/95 border border-white/15 text-slate-100 shadow-2xl backdrop-blur-xl">
        {type === 'success' ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        ) : (
          <Info className="w-4 h-4 text-brand-cyan shrink-0" />
        )}
        <span className="text-xs font-mono tracking-tight">{message}</span>
      </div>
    </div>
  );
}
