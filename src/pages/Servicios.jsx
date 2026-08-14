import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Gallery from '../components/Gallery';
import CtaBanner from '../components/CtaBanner';

export default function Servicios() {
  const { events } = siteConfig;

  return (
    <>
      <Seo
        title="Servicios"
        description="Sitios web, correo, software, seguridad, soporte y soluciones digitales complementarias al hosting de NOVAHost."
        path="/servicios"
        image={siteConfig.servicesHeroImage}
      />
      <PageHero
        image={siteConfig.servicesHeroImage}
        eyebrow="Servicios"
        title={events.heroTitle}
        subtitle={events.heroSubtitle}
      />

      <section className="section">
        <div className="container-narrow">
          <Reveal className="section-heading">
            <p className="eyebrow">Complementos al hosting</p>
            <p className="lead">{events.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-wide event-types">
          {events.types.map((item, index) => (
            <Reveal
              key={item.id}
              className={`event-type ${index % 2 ? 'event-type--reverse' : ''}`}
            >
              <div className="event-type__media">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              </div>
              <div className="event-type__body">
                <p className="eyebrow">Solución</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Más opciones</p>
            <h2>{events.organizeTitle}</h2>
          </Reveal>
          <div className="experience-grid">
            {events.features.map((item, index) => (
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
            <p className="eyebrow">Galería</p>
            <h2>Presencia digital para tu marca</h2>
          </Reveal>
          <Gallery items={events.gallery} />
        </div>
      </section>

      <CtaBanner
        title={events.ctaTitle}
        text={events.ctaText}
        buttonLabel="Quiero mi sitio web"
        message={siteConfig.whatsappPackageMessage}
      />
    </>
  );
}
