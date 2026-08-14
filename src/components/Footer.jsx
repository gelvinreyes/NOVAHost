import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { telHref, mailHref } from '../utils/format';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <Link className="footer-brand" to="/">
              <img src={siteConfig.logo} alt="" />
            </Link>
            <p className="footer-copy">{siteConfig.subtitle}</p>
            <a
              className="btn btn-gold"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" /> WhatsApp
            </a>
          </div>

          <div>
            <h2>Navegación</h2>
            <ul>
              {siteConfig.navItems.map((item) => (
                <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Atención</h2>
            <p>{siteConfig.schedule}</p>
            <p className="mt-3 mb-0">{siteConfig.city}</p>
            <p className="text-gold-soft">novahost.com.gt</p>
          </div>

          <div>
            <h2>Contacto</h2>
            <ul className="footer-contact">
              <li>
                <a href={telHref(siteConfig.phone)}>
                  <i className="bi bi-telephone" aria-hidden="true" /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp" aria-hidden="true" /> {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={mailHref(siteConfig.email)}>
                  <i className="bi bi-envelope" aria-hidden="true" /> {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 NOVAHost. Todos los derechos reservados.
          </p>
          <p>
            Los sitios y contenidos publicados son propiedad única y exclusiva de NOVAHost.
          </p>
        </div>
      </div>
    </footer>
  );
}
