import { useState } from 'react';
import Seo from '../components/Seo';
import { getApiUrl } from '../utils/api';

export default function Panel() {
  const [token, setToken] = useState(() => sessionStorage.getItem('novahost_admin_token') || '');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const load = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(getApiUrl('/metrics'), {
        headers: { 'X-Admin-Token': token },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'No autorizado');
      sessionStorage.setItem('novahost_admin_token', token);
      setData(payload);
    } catch (err) {
      setData(null);
      setError(err.message || 'No se pudo cargar el panel.');
    } finally {
      setLoading(false);
    }
  };

  const metrics = data?.metrics || {};

  return (
    <>
      <Seo title="Panel interno" description="Métricas internas de NOVAHost." path="/panel" />
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Uso interno</p>
          <h1>Panel comercial</h1>
          <p>Requiere el token de administración del servidor. Las cifras son estimadas: no son visitantes únicos ni ventas.</p>
          <form className="contact-form" onSubmit={load}>
            <label htmlFor="admin-token">Token</label>
            <input
              id="admin-token"
              type="password"
              autoComplete="off"
              value={token}
              onChange={(event) => setToken(event.target.value)}
            />
            <button className="btn btn-gold" type="submit" disabled={loading || !token}>
              {loading ? 'Cargando…' : 'Ver métricas'}
            </button>
          </form>
          {error ? <p className="form-error">{error}</p> : null}
          {data ? (
            <>
              <p className="tiny-note">{data.note}</p>
              <ul className="check-list">
                <li>Visitas (pageviews): {metrics.pageviews || 0}</li>
                <li>Sesiones de visita estimadas: {metrics.visitSessions || 0}</li>
                <li>Conversaciones iniciadas: {metrics.conversationsStarted || 0}</li>
                <li>Conversaciones con respuesta: {metrics.conversationsAttended || 0}</li>
                <li>Solicitudes de asesor: {metrics.humanRequested || 0}</li>
                <li>Clics de WhatsApp registrados: {metrics.whatsappClicks || 0}</li>
                <li>Leads con contacto: {metrics.leadsWithContact || 0}</li>
                <li>Correos enviados / fallidos: {metrics.emailsSent || 0} / {metrics.emailsFailed || 0}</li>
              </ul>
              <h2>Conversaciones recientes</h2>
              <div className="faq-list">
                {(data.conversations || []).map((item) => (
                  <details key={item.conversation_id} className="faq-item">
                    <summary>
                      {item.interest || 'consulta'} · {item.status} · {item.conversation_id.slice(0, 8)}
                    </summary>
                    <p>Inicio: {item.startedAt}</p>
                    <p>Mensajes visitante/asistente: {item.visitorMessages}/{item.assistantMessages}</p>
                    <p>Consentimiento: {item.consent ? 'sí' : 'no'}</p>
                    {item.summary ? <p>{item.summary}</p> : null}
                  </details>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
