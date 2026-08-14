import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import MatrixBackground from './MatrixBackground';

export default function Layout() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', siteConfig.primaryColor);
    root.style.setProperty('--color-secondary', siteConfig.secondaryColor);
    root.style.setProperty('--color-accent', siteConfig.accentColor);
    root.style.setProperty('--color-cream', siteConfig.creamColor);
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <MatrixBackground />
      <Header />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
