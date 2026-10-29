import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';

export default function Privacidad() {
  return (
    <>
      <Seo
        title="Privacidad"
        description="Cómo trata NOVAHost los datos de contacto del sitio y del asistente virtual."
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
            Si dejas tu nombre, correo o mensaje, NOVAHost los usa para responderte y,
            si lo autorizas, para un seguimiento relacionado con esa consulta.
            El asistente puede guardar la conversación en el servidor de NOVAHost para
            continuidad comercial. Si pides un asesor humano, el resumen solo se comparte
            cuando tú lo autorizas.
          </p>
          <p>
            No pedimos contraseñas, datos bancarios ni información financiera detallada.
            El destinatario interno lo define el servidor.
          </p>
          <p>
            Escribe a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> o
            por WhatsApp al {siteConfig.whatsappDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
