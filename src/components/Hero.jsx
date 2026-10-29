import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getActiveOffer } from '../utils/webOffer';
import { trackEvent } from '../utils/analytics';

export default function Hero() {
  const offer = getActiveOffer();

  return (
    <section className="hero" aria-label="Presentación">
      <div className="hero__overlay" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container-wide hero__content">
        <img className="hero__logo" src={siteConfig.logo} alt="NOVAHost" />
        <p className="eyebrow">Guatemala · Hosting y presencia digital</p>
        <h1>{siteConfig.heroTitle}</h1>
        <p className="hero__lead">{siteConfig.heroLead}</p>
        <p className="hero-price">Landing page desde {offer.priceLabel}</p>
        <p className="hero-price__note">{offer.headline}</p>
        <div className="hero__actions">
          <Link className="btn btn-gold" to={siteConfig.heroPrimaryLink}>{siteConfig.heroPrimaryCta}</Link>
          <a
            className="btn btn-whatsapp"
            href={getWhatsAppUrl(siteConfig.whatsappPackageMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('WhatsAppClick', { place: 'hero' })}
          >
            <i className="bi bi-whatsapp" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true"><span>Descubrir</span></div>
    </section>
  );
}
