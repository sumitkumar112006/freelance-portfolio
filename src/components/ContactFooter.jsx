import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Terminal, 
  Heart,
  Sparkles
} from 'lucide-react';
import { sounds } from '../audio/soundEffects';

export default function ContactFooter({ onShowToast, onOpenCommandPalette }) {
  const [copied, setCopied] = useState(false);
  const email = 'amitk839170@gmail.com';
  const githubUrl = 'https://github.com/sumitkumar112006';
  const linkedinUrl = 'https://www.linkedin.com/in/sumit-kumar-48998b345/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    sounds.playSuccess();
    setCopied(true);
    onShowToast('Copied email to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="pt-20 pb-12 px-4 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* High-Impact Contact Terminal CTA */}
      <div className="rounded-3xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-white/15 p-8 sm:p-12 relative overflow-hidden shadow-2xl backdrop-blur-2xl">
        <div className="absolute top-0 right-0 p-32 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Initiate Direct Connection</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Ready to build high-scale, AI & full-stack software together?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl">
            Currently open for Full-Stack, AI integration, and Software Engineering roles, freelance builds, and collaborative projects.
          </p>

          {/* Interactive Email Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-obsidian-950 border border-white/15 text-xs sm:text-sm font-mono text-slate-200">
              <span className="truncate mr-3">{email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${email}?subject=Collaboration%20Inquiry%20with%20Sumit`}
              onClick={() => sounds.playPop()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-obsidian-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all shadow-glow-sm"
            >
              <span>Send Direct Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span>© 2026 Sumit</span>
          <span>•</span>
          <span>Full-Stack & AI Developer</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playClick()}
            className="hover:text-white transition-colors p-1 flex items-center gap-1.5 text-xs font-mono"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span>sumitkumar112006</span>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playClick()}
            className="hover:text-white transition-colors p-1 flex items-center gap-1.5 text-xs font-mono"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${email}`}
            onClick={() => sounds.playClick()}
            className="hover:text-white transition-colors p-1 flex items-center gap-1.5 text-xs font-mono"
            title="Email"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenCommandPalette();
            }}
            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 text-[10px]"
          >
            ⌘K Menu
          </button>
        </div>
      </div>
    </footer>
  );
}
