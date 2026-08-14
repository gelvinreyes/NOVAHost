import { getWhatsAppUrl } from '../utils/whatsapp';

export default function CtaBanner({
  title,
  text,
  buttonLabel = 'WhatsApp',
  message,
}) {
  return (
    <section className="cta-banner">
      <div className="container-narrow cta-banner__inner">
        <p className="eyebrow">Hablemos</p>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
        <a
          className="btn btn-gold"
          href={getWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp" aria-hidden="true" /> {buttonLabel}
        </a>
      </div>
    </section>
  );
}
