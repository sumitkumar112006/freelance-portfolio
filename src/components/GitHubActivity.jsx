import React, { useState, useEffect } from 'react';
import { 
  GitCommit, 
  GitBranch, 
  Github, 
  ExternalLink, 
  RefreshCw, 
  FolderGit2, 
  Clock, 
  Star, 
  GitPullRequest, 
  Layers, 
  Activity, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { fetchGitHubActivity } from '../services/githubApi';
import { sounds } from '../audio/soundEffects';

export default function GitHubActivity({ initialUsername = 'sumitkumar112006', onShowToast }) {
  const [username, setUsername] = useState(initialUsername);
  const [inputUsername, setInputUsername] = useState(initialUsername);
  const [activeTab, setActiveTab] = useState('events'); // 'events' | 'repos'
  const [events, setEvents] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState('');

  const loadGitHubData = async (userToFetch) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchGitHubActivity(userToFetch);
      setEvents(res.events || []);
      setRepos(res.repos || []);
      setDataSource(res.source);
      if ((res.events?.length || 0) === 0 && (res.repos?.length || 0) === 0) {
        setError(`No recent public activity found for @${userToFetch}.`);
      }
    } catch (err) {
      setError(err.message || 'Failed to connect to GitHub API.');
      setEvents([]);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGitHubData(username);
  }, [username]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!inputUsername.trim()) return;
    sounds.playClick();
    setUsername(inputUsername.trim());
    if (onShowToast) onShowToast(`Loading GitHub data for @${inputUsername.trim()}`);
  };

  const handleRefresh = () => {
    sounds.playSwitch();
    try {
      localStorage.removeItem(`github_activity_cache_v2_${username.toLowerCase()}`);
    } catch (e) {}
    loadGitHubData(username);
    if (onShowToast) onShowToast('Refreshed live GitHub stream!');
  };

  return (
    <section id="github-activity" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Verified GitHub Ingress • @{username}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight flex items-center gap-3">
            <Github className="w-8 h-8 text-white" />
            <span>Actual GitHub Commits & Repositories</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Live stream of your real code pushes, pull requests, and public repositories directly from GitHub's REST API.
          </p>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Events vs Repos Tabs */}
          <div className="flex p-1 rounded-xl bg-obsidian-900 border border-white/10 text-xs font-mono">
            <button
              onClick={() => {
                setActiveTab('events');
                sounds.playClick();
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'events' ? 'bg-white/15 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Activity Stream ({events.length})
            </button>
            <button
              onClick={() => {
                setActiveTab('repos');
                sounds.playClick();
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'repos' ? 'bg-white/15 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Repositories ({repos.length})
            </button>
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            title="Force refresh GitHub data"
            className="p-2 rounded-xl bg-obsidian-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-brand-cyan' : ''}`} />
          </button>
        </div>
      </div>

      {/* Telemetry KPI Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">TARGET USER</span>
          <div className="text-white font-bold flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5 text-brand-cyan" />
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noreferrer"
              className="hover:underline hover:text-brand-cyan"
            >
              @{username}
            </a>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">LATEST ACTIVITY</span>
          <div className="text-emerald-400 font-bold">{events.length} Live Events</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">PUBLIC REPOSITORIES</span>
          <div className="text-indigo-400 font-bold">{repos.length} Repositories</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">API STREAM</span>
          <div className="text-brand-cyan font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>200 OK {dataSource ? `(${dataSource})` : ''}</span>
          </div>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 backdrop-blur-xl shadow-2xl">
        
        {loading && (
          <div className="py-16 text-center space-y-3">
            <RefreshCw className="w-6 h-6 text-brand-cyan animate-spin mx-auto" />
            <p className="text-xs font-mono text-slate-400">Connecting to GitHub API for @{username}...</p>
          </div>
        )}

        {!loading && error && (
          <div className="p-6 rounded-2xl bg-obsidian-950 border border-rose-500/20 text-center space-y-2">
            <AlertCircle className="w-6 h-6 text-rose-400 mx-auto" />
            <p className="text-sm font-mono text-rose-300">{error}</p>
          </div>
        )}

        {/* TAB 1: ACTIVITY / COMMITS STREAM */}
        {!loading && !error && activeTab === 'events' && (
          <div className="divide-y divide-white/5">
            {events.length === 0 ? (
              <div className="py-12 text-center text-slate-500 font-mono text-xs">
                No recent activity events found on GitHub.
              </div>
            ) : (
              events.map((event, idx) => (
                <div 
                  key={`${event.id}-${idx}`}
                  className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-3 group hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-all"
                >
                  {/* Left: Message & Badges */}
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-cyan shrink-0 mt-0.5 group-hover:border-brand-cyan/40 transition-colors">
                      {event.type === 'pr' ? (
                        <GitPullRequest className="w-4 h-4 text-purple-400" />
                      ) : (
                        <GitCommit className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Event Badge */}
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                          event.badgeColor === 'purple' ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' :
                          event.badgeColor === 'amber' ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' :
                          event.badgeColor === 'cyan' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' :
                          'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        }`}>
                          {event.badge}
                        </span>

                        {/* Repo Link */}
                        <a
                          href={event.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sounds.playClick()}
                          className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-white hover:text-brand-cyan transition-colors"
                        >
                          <FolderGit2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{event.repoName}</span>
                        </a>

                        {/* Branch Badge */}
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400">
                          <GitBranch className="w-2.5 h-2.5" />
                          <span>{event.branch}</span>
                        </span>

                        {/* Relative Time */}
                        <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{event.relativeTime}</span>
                        </span>
                      </div>

                      {/* Commit / Event Message */}
                      <p className="text-sm font-sans text-slate-300 group-hover:text-white transition-colors truncate">
                        {event.message}
                      </p>
                    </div>
                  </div>

                  {/* Right: Commit Hash Link */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sounds.playPop()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all group-hover:border-brand-cyan/30"
                    >
                      <code className="text-brand-cyan">{event.sha}</code>
                      <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 2: REPOSITORIES GRID */}
        {!loading && !error && activeTab === 'repos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playPop()}
                className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 hover:border-brand-cyan/40 p-4 transition-all group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-mono font-bold text-white group-hover:text-brand-cyan transition-colors">
                    <FolderGit2 className="w-4 h-4 text-slate-400 group-hover:text-brand-cyan" />
                    <span>{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                </div>

                <p className="text-xs text-slate-400 line-clamp-2">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                    {repo.language}
                  </span>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
