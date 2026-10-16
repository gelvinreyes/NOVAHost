const TZ = 'America/Guatemala';

export function guatemalaDateISO(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function formatGuatemalaDateTime(date = new Date()) {
  return new Intl.DateTimeFormat('es-GT', {
    timeZone: TZ,
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}
