import siteConfig from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <i className="bi bi-whatsapp" aria-hidden="true" />
    </a>
  );
}
