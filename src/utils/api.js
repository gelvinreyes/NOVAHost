export function getApiUrl(path) {
  const base = import.meta.env.VITE_AGENT_API_URL || '/api/chat';
  if (path === '/chat' || path === 'chat') {
    return typeof base === 'string' && base.trim() ? base.trim() : '/api/chat';
  }
  if (base.includes('/chat')) {
    return base.replace(/\/chat\/?$/, path);
  }
  return `/api${path}`;
}
