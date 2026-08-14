import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CtaBanner from '../components/CtaBanner';

export default function Porque() {
  const { why } = siteConfig;

  return (
    <>
      <Seo
        title="Por qué NOVAHost"
        description="Hosting accesible, atención en español y acompañamiento cercano para emprendedores y pequeñas empresas en Guatemala."
        path="/porque"
        image={siteConfig.whyHeroImage}
      />
      <PageHero
        image={siteConfig.whyHeroImage}
        eyebrow="Por qué NOVAHost"
        title={why.title}
        subtitle={why.intro}
      />

      <section className="section">
        <div className="container-wide">
          <div className="values-grid">
            {why.reasons.map((item, index) => (
              <Reveal key={item.title} className="value-item" delay={index * 60}>
                <i className={`bi ${item.icon}`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide split-section__grid">
          <Reveal className="split-section__media">
            <img
              src="/images/marketing/restaurante.png"
              alt="Negocios locales que necesitan presencia digital"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Público</p>
            <h2>{why.audienceTitle}</h2>
            <ul className="check-list">
              {why.audience.map((item) => (
                <li key={item}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <Link className="btn btn-gold" to="/contacto">Habla con un asesor</Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Tu negocio merece estar en Internet"
        text="Haz que tus clientes te encuentren. Escríbenos y te acompañamos."
        buttonLabel="Escríbenos por WhatsApp"
      />
    </>
  );
}
