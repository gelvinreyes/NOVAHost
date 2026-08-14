import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { telHref, mailHref } from '../utils/format';

const navItems = siteConfig.navItems;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container-wide topbar__inner">
          <a className="topbar__link" href={telHref(siteConfig.phone)}>
            <i className="bi bi-telephone" aria-hidden="true" />
            <span>Teléfono: {siteConfig.phone}</span>
          </a>
          <a className="topbar__link" href={mailHref(siteConfig.email)}>
            <i className="bi bi-envelope" aria-hidden="true" />
            <span>Correo: {siteConfig.email}</span>
          </a>
          <a
            className="topbar__link"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
          </a>
        </div>
      </div>

      <div className="navbar-shell">
        <div className="container-wide navbar-shell__inner">
          <Link className="brand" to="/" onClick={close} aria-label={siteConfig.restaurantName}>
            <img src={siteConfig.logo} alt="NOVAHost" />
          </Link>

          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="menu-principal" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                onClick={close}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="btn btn-gold btn-sm nav-cta"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              {siteConfig.navCtaLabel}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
