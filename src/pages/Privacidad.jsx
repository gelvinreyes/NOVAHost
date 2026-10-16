import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';

export default function Privacidad() {
  return (
    <>
      <Seo
        title="Privacidad"
        description="Cómo trata NOVAHost los datos de contacto que nos dejas en el sitio o en el asistente virtual."
        path="/privacidad"
      />
      <PageHero
        image={siteConfig.contactHeroImage}
        eyebrow="Aviso"
        title="Privacidad"
        subtitle="Usamos tus datos solo para atender la consulta que tú inicias."
      />
      <section className="section">
        <div className="container-narrow">
          <p>
            Si dejas tu nombre, correo o mensaje en el formulario o en el asistente virtual,
            NOVAHost los usa para responderte y, si lo autorizas, para un seguimiento
            relacionado con esa consulta.
          </p>
          <p>
            No pedimos contraseñas, datos bancarios ni información financiera detallada.
            El destinatario interno de los mensajes es la cuenta de ventas configurada
            en el servidor; no enviamos correo a direcciones elegidas por el visitante.
          </p>
          <p>
            El consentimiento se registra con fecha y versión del texto. Puedes escribir a{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> o por WhatsApp
            al {siteConfig.whatsappDisplay} para preguntas sobre tus datos.
          </p>
        </div>
      </section>
    </>
  );
}
