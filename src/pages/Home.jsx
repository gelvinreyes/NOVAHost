import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import NovaProductCard from '../components/NovaProductCard';
import ContactForm from '../components/ContactForm';
import CtaBanner from '../components/CtaBanner';
import { getActiveOffer } from '../utils/webOffer';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';

export default function Home() {
  const { home, gallery, hostingHighlights } = siteConfig;
  const location = useLocation();
  const offer = getActiveOffer();
  const products = [...siteConfig.novaProducts]
    .filter((item) => item.published)
    .sort((a, b) => a.order - b.order);

  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (!id) return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <>
      <Seo
        title="Inicio"
        description={siteConfig.seo.defaultDescription}
        path="/"
        image={siteConfig.heroImage}
      />
      <Hero />

      <section className="section section--choices">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Elige cómo empezar</p>
            <h2>Cuatro caminos claros</h2>
          </Reveal>
          <div className="choice-grid">
            <Link className="choice-card" to="/#hosting" onClick={() => trackEvent('HostingClick')}>
              <i className="bi bi-hdd-network" aria-hidden="true" />
              <h3>Hosting</h3>
              <p>Mantén tu sitio en línea, estable y con soporte cercano.</p>
              <span>Ver hosting</span>
            </Link>
            <Link className="choice-card" to="/#paginas-web" onClick={() => trackEvent('PaginaWebClick')}>
              <i className="bi bi-window" aria-hidden="true" />
              <h3>Página web</h3>
              <p>Presencia profesional para tu negocio, con paquete anual.</p>
              <span>Ver páginas web</span>
            </Link>
            <a
              className="choice-card"
              href="https://fit.novahost.com.gt"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('NovaFitClick')}
            >
              <i className="bi bi-heart-pulse" aria-hidden="true" />
              <h3>NovaFit</h3>
              <p>Registra entrenamientos y sigue tu progreso. Producto aparte del hosting.</p>
              <span>Ir a NovaFit</span>
            </a>
            <a
              className="choice-card"
              href="https://finanzas.novahost.com.gt"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('NovaFinanzasClick')}
            >
              <i className="bi bi-wallet2" aria-hidden="true" />
              <h3>NovaFinanzas Personales</h3>
              <p>Organiza ingresos, gastos y deudas. Producto aparte del hosting.</p>
              <span>Ir a NovaFinanzas</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="hosting">
        <div className="container-wide highlight-panel">
          <Reveal>
            <p className="eyebrow">Hosting</p>
            <h2>Hosting pensado para emprendedores</h2>
            <p className="lead">
              Un lugar seguro y estable para que tus clientes te encuentren. Panel sencillo
              y atención en Guatemala.
            </p>
            <ul className="check-list">
              {hostingHighlights.map((item) => (
                <li key={item}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <p className="tiny-note">*Aplican restricciones. Confirmamos condiciones al cotizar.</p>
            <a
              className="btn btn-gold"
              href={getWhatsAppUrl(siteConfig.whatsappHostingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('WhatsAppClick', { place: 'hosting' })}
            >
              Consultar hosting
            </a>
          </Reveal>
          <Reveal delay={100} className="split-section__media">
            <img src="/images/marketing/hosting-usa.png" alt="Hosting NOVAHost" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <section className="section section--glass" id="paginas-web">
        <div className="container-wide offer-block">
          <Reveal>
            <p className="eyebrow">Página web</p>
            <h2>Paquete web desde {offer.priceLabel} al año</h2>
            <p className="lead">{offer.headline}</p>
            <ul className="check-list">
              {offer.includes.map((item) => (
                <li key={item}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <p className="tiny-note">{offer.legal}</p>
            <div className="hero__actions">
              <a
                className="btn btn-gold"
                href={getWhatsAppUrl(siteConfig.whatsappPackageMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('WhatsAppClick', { place: 'paginas-web' })}
              >
                Quiero mi página web
              </a>
              <Link className="btn btn-ghost" to="/#soluciones">Ver soluciones NOVA</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="soluciones">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Soluciones NOVA</p>
            <h2>Herramientas para tu día a día</h2>
            <p>No están incluidas en el paquete de hosting ni en la página web.</p>
          </Reveal>
          <div className="nova-grid">
            {products.map((product) => (
              <Reveal key={product.slug}>
                <NovaProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--glass" id="como-funciona">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Así de fácil</p>
            <h2>Tres pasos</h2>
          </Reveal>
          <ol className="landing-steps">
            {siteConfig.howItWorks.map((step, index) => (
              <li key={step}>
                <strong>{index + 1}</strong>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="demos">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">{home.galleryEyebrow}</p>
            <h2>{home.galleryTitle}</h2>
            <p>{home.galleryIntro}</p>
          </Reveal>
          <div className="home-gallery">
            {gallery.slice(0, 6).map((item) => (
              <figure key={item.src} className="home-gallery__item">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container-narrow">
          <Reveal className="section-heading">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Respuestas claras</h2>
          </Reveal>
          <div className="faq-list">
            {siteConfig.faqs.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--glass" id="contacto-landing">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow">Contacto</p>
            <h2>Cuéntanos qué necesitas</h2>
            <p>{siteConfig.contact.formText}</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <CtaBanner title={home.ctaTitle} text={home.ctaText} buttonLabel="Escríbenos por WhatsApp" />
    </>
  );
}
