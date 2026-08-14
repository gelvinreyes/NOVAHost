import siteConfig from '../config/siteConfig';

export function getWhatsAppUrl(message) {
  const text = message || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function getDishWhatsAppUrl(itemName) {
  return getWhatsAppUrl(`Hola NOVAHost, deseo información sobre:\n${itemName}`);
}

export function getContactWhatsAppUrl({ name, phone, email, message }) {
  const text = [
    siteConfig.whatsappDefaultMessage,
    '',
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    `Correo: ${email}`,
    `Mensaje: ${message}`,
  ].join('\n');

  return getWhatsAppUrl(text);
}

export function openWhatsApp(message) {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
