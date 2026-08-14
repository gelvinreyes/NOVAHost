import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import CtaBanner from '../components/CtaBanner';

const marqueeItems = [
  'Hosting',
  'Dominios',
  'Correo corporativo',
  'SSL',
  'Sitios web',
  'Respaldo',
  'Soporte en Guatemala',
  'Presencia digital',
];

export default function Home() {
  const { home, specialties, experience, gallery, hostingHighlights } = siteConfig;

  return (
    <>
      <Seo
        title="Inicio"
        description={siteConfig.seo.defaultDescription}
        path="/"
        image={siteConfig.heroImage}
      />
      <Hero />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section split-section">
        <div className="container-wide split-section__grid">
          <Reveal>
            <p className="eyebrow">Bienvenidos</p>
            <h2>{home.presentationTitle}</h2>
            <p className="lead">{home.presentationText}</p>
            <Link className="btn btn-gold" to="/quienes-somos">Conócenos</Link>
          </Reveal>
          <Reveal className="split-section__media" delay={120}>
            <img
              src={home.presentationImage}
              alt="Hosting NOVAHost para negocios en Guatemala"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      {home.stats?.length ? (
        <section className="section section--stats">
          <div className="container-wide stats-grid">
            {home.stats.map((stat, index) => (
              <Reveal key={stat.label} className="stat-item" delay={index * 70}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">{home.specialtiesEyebrow}</p>
            <h2>{home.specialtiesTitle}</h2>
            <p>{home.specialtiesIntro}</p>
          </Reveal>
          <div className="specialties-grid">
            {specialties.map((item, index) => (
              <Reveal key={item.id} delay={index * 80}>
                <ProductCard item={item} ctaLabel="Más información" to="/productos" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--glass">
        <div className="container-wide highlight-panel">
          <Reveal>
            <p className="eyebrow">Todo lo que tu negocio necesita</p>
            <h2>Hosting pensado para emprendedores</h2>
            <p className="lead">
              Servidores de alto rendimiento con atención y soporte para Guatemala.
              Tu web siempre disponible para tus clientes.
            </p>
            <ul className="check-list">
              {hostingHighlights.map((item) => (
                <li key={item}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <p className="tiny-note">*Aplican restricciones. Confirmamos condiciones al cotizar.</p>
            <Link className="btn btn-gold" to="/productos">Ver productos</Link>
          </Reveal>
          <Reveal delay={100} className="split-section__media">
            <img
              src="/images/marketing/solucion-completa.png"
              alt="Solución completa NOVAHost"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">{home.experienceEyebrow}</p>
            <h2>{home.experienceTitle}</h2>
          </Reveal>
          <div className="experience-grid">
            {experience.map((item, index) => (
              <Reveal key={item.title} className="experience-item" delay={index * 70}>
                <i className={`bi ${item.icon}`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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

      <section className="section events-teaser">
        <div className="container-wide events-teaser__content">
          <Reveal>
            <p className="eyebrow">{home.eventsEyebrow}</p>
            <h2>{home.eventsTitle}</h2>
            <p className="lead">{home.eventsIntro}</p>
            <ul className="event-pills">
              {home.eventPills.map((pill) => (
                <li key={pill}>{pill}</li>
              ))}
            </ul>
            <Link className="btn btn-gold" to="/servicios">Conoce nuestras soluciones</Link>
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
