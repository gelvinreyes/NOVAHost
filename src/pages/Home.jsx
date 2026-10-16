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
  const { home, gallery } = siteConfig;
  const location = useLocation();
  const offer = getActiveOffer();
  const products = [...siteConfig.novaProducts]
    .filter((item) => item.published)
    .sort((a, b) => a.order - b.order);

  const faqs = siteConfig.faqs.map((item, index) => {
    if (index !== 0) return item;
    return {
      ...item,
      a: offer.isPromo
        ? `Incluye página web profesional basada en plantilla, hosting, dominio y 1 correo profesional, con actualizaciones menores de contenido según el paquete anual. Precio promocional ${offer.priceLabel} al año hasta el ${offer.endDate}. Consulta condiciones al cotizar.`
        : `Incluye página web profesional basada en plantilla, hosting, dominio y 1 correo profesional, con actualizaciones menores de contenido según el paquete anual. Precio de referencia ${offer.priceLabel} al año. Consulta condiciones al cotizar.`,
    };
  });

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
        description="Páginas web, hosting y soluciones NOVA: NovaFinanzas Personales y NovaFit. Presencia digital para negocios en Guatemala."
        path="/"
        image={siteConfig.heroImage}
      />
      <Hero />

      <section className="section" id="oferta">
        <div className="container-wide offer-block">
          <Reveal>
            <p className="eyebrow">¿Qué incluye?</p>
            <h2>Paquete web desde {offer.priceLabel} {offer.periodLabel}</h2>
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
                onClick={() => trackEvent('WhatsAppClick', { place: 'offer' })}
              >
                Consultar disponibilidad
              </a>
              <Link className="btn btn-ghost" to="/#soluciones">Explorar soluciones</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--glass" id="soluciones">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Soluciones NOVA</p>
            <h2>También creamos herramientas para tu día a día.</h2>
            <p>
              Además de impulsar negocios en internet, desarrollamos soluciones digitales
              para organizar mejor distintas áreas de tu vida. No están incluidas en el
              paquete de hosting.
            </p>
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

      <section className="section" id="como-funciona">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Así de fácil</p>
            <h2>Tres pasos para empezar</h2>
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

      <section className="section section--glass">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Confianza</p>
            <h2>Qué ocurre después de escribirnos</h2>
            <p className="lead">
              Te orientamos en español sobre hosting, tu página web o las soluciones NOVA.
              No pedimos contraseñas ni datos bancarios. Si quieres seguimiento por correo,
              te lo preguntamos y solo lo hacemos con tu autorización.
            </p>
          </Reveal>
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
            {faqs.map((item) => (
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

      <CtaBanner
        title={home.ctaTitle}
        text={home.ctaText}
        buttonLabel="Escríbenos por WhatsApp"
      />
    </>
  );
}
