import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="hero" aria-label="Presentación">
      <div className="hero__overlay" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container-wide hero__content">
        <img
          className="hero__logo"
          src={siteConfig.logo}
          alt="NOVAHost"
        />
        <p className="eyebrow">Guatemala · Hosting y presencia digital</p>
        <h1>{siteConfig.tagline}</h1>
        <p className="hero__lead">{siteConfig.subtitle}</p>
        <div className="hero__actions">
          <Link className="btn btn-gold" to={siteConfig.heroPrimaryLink}>{siteConfig.heroPrimaryCta}</Link>
          <Link className="btn btn-ghost" to="/contacto">Solicita información</Link>
          <a
            className="btn btn-whatsapp"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span>Descubrir</span>
      </div>
    </section>
  );
}
