import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { telHref, mailHref } from '../utils/format';

export default function Contacto() {
  return (
    <>
      <Seo
        title="Contacto"
        description="Contacta a NOVAHost por WhatsApp, teléfono o correo. Hosting y presencia digital para emprendedores en Guatemala."
        path="/contacto"
        image={siteConfig.contactHeroImage}
      />
      <PageHero
        image={siteConfig.contactHeroImage}
        eyebrow="Estamos listos"
        title="Contacto"
        subtitle={siteConfig.contact.intro}
      />

      <section className="section">
        <div className="container-wide contact-layout">
          <Reveal>
            <p className="eyebrow">Información</p>
            <h2>Hablemos</h2>
            <ul className="contact-list">
              <li>
                <span>Teléfono</span>
                <a href={telHref(siteConfig.phone)}>{siteConfig.phone}</a>
              </li>
              <li>
                <span>Correo</span>
                <a href={mailHref(siteConfig.email)}>{siteConfig.email}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <span>Atención</span>
                <p>{siteConfig.schedule}</p>
              </li>
              <li>
                <span>Cobertura</span>
                <p>{siteConfig.city}</p>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="contact-panel">
            <h2>{siteConfig.contact.formTitle}</h2>
            <p>{siteConfig.contact.formText}</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
