// GitHub Public REST API Service for Live Events, Commits, and Repositories

const CACHE_KEY_PREFIX = 'github_activity_cache_v2_';
const CACHE_TTL_MS = 3 * 60 * 1000; // 3 minutes cache

export async function fetchGitHubActivity(username = 'sumitkumar112006') {
  if (!username) return { events: [], repos: [] };

  const cacheKey = `${CACHE_KEY_PREFIX}${username.toLowerCase()}`;
  
  // 1. Check local cache
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL_MS && data && data.events) {
        return { source: 'cache', ...data, username };
      }
    }
  } catch (e) {}

  try {
    // 2. Fetch User Events
    const eventsPromise = fetch(`https://api.github.com/users/${encodeURIComponent(username)}/events?per_page=30`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    });

    // 3. Fetch User Repositories
    const reposPromise = fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=pushed&per_page=10`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    });

    const [eventsRes, reposRes] = await Promise.all([eventsPromise, reposPromise]);

    if (!eventsRes.ok) {
      if (eventsRes.status === 404) throw new Error(`GitHub user "${username}" not found.`);
      if (eventsRes.status === 403) throw new Error('GitHub API rate limit reached. Please wait a moment.');
      throw new Error(`GitHub API returned status ${eventsRes.status}`);
    }

    const rawEvents = await eventsRes.json();
    const rawRepos = reposRes.ok ? await reposRes.json() : [];

    // 4. Parse events into unified activity items
    const parsedEvents = [];

    rawEvents.forEach((event) => {
      const repoFullName = event.repo?.name || 'unknown/repo';
      const repoName = repoFullName.split('/')[1] || repoFullName;
      const eventDate = new Date(event.created_at);
      const relativeTime = getRelativeTimeString(eventDate);

      if (event.type === 'PushEvent') {
        const branch = event.payload?.ref ? event.payload.ref.replace('refs/heads/', '') : 'main';
        const headSha = event.payload?.head || event.id;
        const shortSha = headSha ? headSha.substring(0, 7) : 'head';

        if (event.payload?.commits && event.payload.commits.length > 0) {
          event.payload.commits.forEach((c) => {
            parsedEvents.push({
              id: `${event.id}-${c.sha}`,
              type: 'push',
              badge: 'Push',
              badgeColor: 'emerald',
              message: c.message.split('\n')[0] || `Pushed to ${branch}`,
              sha: c.sha ? c.sha.substring(0, 7) : shortSha,
              repoFullName,
              repoName,
              repoUrl: `https://github.com/${repoFullName}`,
              url: `https://github.com/${repoFullName}/commit/${c.sha || headSha}`,
              branch,
              date: eventDate,
              relativeTime,
            });
          });
        } else {
          // If GitHub omitted commits array in event, use head sha
          parsedEvents.push({
            id: event.id,
            type: 'push',
            badge: 'Push',
            badgeColor: 'emerald',
            message: `Pushed code changes to branch ${branch}`,
            sha: shortSha,
            repoFullName,
            repoName,
            repoUrl: `https://github.com/${repoFullName}`,
            url: `https://github.com/${repoFullName}/commit/${headSha}`,
            branch,
            date: eventDate,
            relativeTime,
          });
        }
      } else if (event.type === 'PullRequestEvent') {
        const pr = event.payload?.pull_request;
        const action = event.payload?.action || 'opened';
        parsedEvents.push({
          id: event.id,
          type: 'pr',
          badge: `PR ${action}`,
          badgeColor: 'purple',
          message: pr?.title ? `${pr.title} (#${pr.number})` : `${action.toUpperCase()} pull request #${event.payload?.number || ''}`,
          sha: pr?.head?.sha ? pr.head.sha.substring(0, 7) : 'PR',
          repoFullName,
          repoName,
          repoUrl: `https://github.com/${repoFullName}`,
          url: pr?.html_url || `https://github.com/${repoFullName}/pulls`,
          branch: pr?.head?.ref || 'main',
          date: eventDate,
          relativeTime,
        });
      } else if (event.type === 'CreateEvent') {
        const refType = event.payload?.ref_type || 'repository';
        parsedEvents.push({
          id: event.id,
          type: 'create',
          badge: `Created ${refType}`,
          badgeColor: 'cyan',
          message: `Created ${refType} ${event.payload?.ref ? `"${event.payload.ref}"` : `in ${repoName}`}`,
          sha: 'init',
          repoFullName,
          repoName,
          repoUrl: `https://github.com/${repoFullName}`,
          url: `https://github.com/${repoFullName}`,
          branch: event.payload?.ref || 'main',
          date: eventDate,
          relativeTime,
        });
      } else if (event.type === 'WatchEvent') {
        parsedEvents.push({
          id: event.id,
          type: 'star',
          badge: 'Starred',
          badgeColor: 'amber',
          message: `Starred repository ${repoFullName}`,
          sha: '★',
          repoFullName,
          repoName,
          repoUrl: `https://github.com/${repoFullName}`,
          url: `https://github.com/${repoFullName}`,
          branch: 'repo',
          date: eventDate,
          relativeTime,
        });
      }
    });

    // 5. Parse Repositories
    const parsedRepos = Array.isArray(rawRepos) ? rawRepos.map((r) => ({
      id: r.id,
      name: r.name,
      fullName: r.full_name,
      description: r.description || 'Full-stack application repository',
      url: r.html_url,
      language: r.language || 'JavaScript',
      stars: r.stargazers_count || 0,
      forks: r.forks_count || 0,
      updatedAt: getRelativeTimeString(new Date(r.pushed_at || r.updated_at)),
      isFork: r.fork,
    })) : [];

    const data = {
      events: parsedEvents.slice(0, 20),
      repos: parsedRepos,
    };

    // Store in localStorage
    try {
      localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
    } catch (e) {}

    return { source: 'api', ...data, username };
  } catch (err) {
    console.error('Error in fetchGitHubActivity:', err);
    throw err;
  }
}

function getRelativeTimeString(date) {
  const diffSec = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diffSec < 60) return 'just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
