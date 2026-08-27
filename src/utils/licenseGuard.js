/**
 * Protección compilada en el bundle de React.
 * El sitio de producción solo se renderiza en novahost.com.gt.
 * No autoriza localhost ni otros dominios.
 * `npm run dev` sigue funcionando para editar el código.
 */

const SHIFT = 4;

function unveil(packed) {
  let out = '';
  for (let i = 0; i < packed.length; i += 1) {
    out += String.fromCharCode(packed.charCodeAt(i) - SHIFT);
  }
  return out;
}

function allowedHosts() {
  return [unveil('rszelswx2gsq2kx')];
}

function normalizeHost(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, '')
    .replace(/^www\./, '');
}

export function isAuthorizedRuntime() {
  if (typeof window === 'undefined') return true;
  if (import.meta.env.DEV) return true;

  const host = normalizeHost(window.location.hostname);
  const allowed = allowedHosts().map(normalizeHost);
  return allowed.some((entry) => host === entry || host.endsWith(`.${entry}`));
}

export function licenseHome() {
  return unveil('lxxtw>33rszelswx2gsq2kx');
}
