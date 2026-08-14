import siteConfig from '../config/siteConfig';

export function formatPrice(value) {
  if (value == null || value === '') return '';
  const amount = Number(value);
  if (Number.isNaN(amount)) return '';
  return `${siteConfig.currencySymbol}${amount.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export function mailHref(email) {
  return `mailto:${email}`;
}
