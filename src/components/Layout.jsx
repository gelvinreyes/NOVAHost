import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import AssistantWidget from './AssistantWidget';
import MatrixBackground from './MatrixBackground';
import { getApiUrl } from '../utils/api';

export default function Layout() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', siteConfig.primaryColor);
    root.style.setProperty('--color-secondary', siteConfig.secondaryColor);
    root.style.setProperty('--color-accent', siteConfig.accentColor);
    root.style.setProperty('--color-cream', siteConfig.creamColor);
  }, []);

  useEffect(() => {
    const key = 'novahost_assistant_session';
    let sessionId = sessionStorage.getItem(key);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem(key, sessionId);
    }
    const visitKey = 'novahost_pageview_sent';
    if (sessionStorage.getItem(visitKey)) return undefined;
    sessionStorage.setItem(visitKey, '1');
    fetch(getApiUrl('/event'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'pageview', session_id: sessionId }),
      keepalive: true,
    }).catch(() => {});
    return undefined;
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
      <AssistantWidget />
    </>
  );
}
