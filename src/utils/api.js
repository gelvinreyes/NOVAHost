export function getApiUrl(path) {
  const base = (import.meta.env.VITE_AGENT_API_URL || '/api/chat').trim();
  if (path === '/chat' || path === 'chat') return base || '/api/chat';
  if (base.includes('/chat')) return base.replace(/\/chat\/?$/, path);
  return `/api${path}`;
}
