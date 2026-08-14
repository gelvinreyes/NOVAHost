import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

export default function QuienesSomos() {
  const { about } = siteConfig;

  return (
    <>
      <Seo
        title="Quiénes somos"
        description="NOVAHost es una empresa guatemalteca de hosting y presencia digital para emprendedores y pequeñas empresas."
        path="/quienes-somos"
        image={siteConfig.aboutHeroImage}
      />
      <PageHero
        image={siteConfig.aboutHeroImage}
        eyebrow={siteConfig.restaurantName}
        title="Quiénes somos"
        subtitle="Facilitamos el acceso de emprendedores y pequeñas empresas a servicios digitales profesionales."
      />

      <section className="section">
        <div className="container-narrow story-block">
          <Reveal>
            <p className="eyebrow">Propósito</p>
            <h2>{about.historyTitle}</h2>
            <p className="lead">{about.history}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-wide split-section__grid">
          <Reveal className="split-section__media">
            <img
              src={about.gallery[2]}
              alt="Profesionales que confían en NOVAHost"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Manera de trabajar</p>
            <h2>{about.philosophyTitle}</h2>
            <p className="lead">{about.philosophy}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-wide mission-grid">
          <Reveal className="mission-card">
            <h2>{about.missionTitle}</h2>
            <p>{about.mission}</p>
          </Reveal>
          <Reveal className="mission-card" delay={90}>
            <h2>{about.visionTitle}</h2>
            <p>{about.vision}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Lo que nos guía</p>
            <h2>{about.valuesTitle}</h2>
          </Reveal>
          <div className="values-grid">
            {about.values.map((value, index) => (
              <Reveal key={value.title} className="value-item" delay={index * 70}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Sello de la casa</p>
            <h2>{about.differencesTitle}</h2>
          </Reveal>
          <div className="experience-grid">
            {about.differences.map((item, index) => (
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
        <div className="container-wide about-photos">
          {about.gallery.map((src) => (
            <img key={src} src={src} alt="Emprendedores y negocios con NOVAHost" loading="lazy" decoding="async" />
          ))}
        </div>
      </section>
    </>
  );
}
