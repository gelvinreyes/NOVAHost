import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      onClick={() => trackEvent('WhatsAppClick', { place: 'float' })}
    >
      <i className="bi bi-whatsapp" aria-hidden="true" />
    </a>
  );
}
