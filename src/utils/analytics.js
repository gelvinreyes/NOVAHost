export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  const safe = {};
  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      safe[key] = value;
    }
  });
  window.fbq('trackCustom', name, safe);
}
