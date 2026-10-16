import { useState } from 'react';
import siteConfig from '../config/siteConfig';
import { getContactWhatsAppUrl, getWhatsAppUrl } from '../utils/whatsapp';
import { getApiUrl } from '../utils/api';
import { trackEvent } from '../utils/analytics';

const initial = {
  name: '',
  email: '',
  phone: '',
  interest: 'Hosting/Página web',
  message: '',
  consent: false,
};

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const validate = (data) => {
    const next = {};
    if (!data.name.trim()) next.name = 'Ingresa tu nombre.';
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'Ingresa un correo válido.';
    }
    if (!data.message.trim() || data.message.trim().length < 8) {
      next.message = 'Escribe un mensaje con un poco más de detalle.';
    }
    if (!data.consent) next.consent = 'Necesitamos tu autorización para responderte.';
    return next;
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch(getApiUrl('/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          interest: values.interest,
          message: values.message.trim(),
          consent: true,
          consentVersion: siteConfig.consentVersion,
          consentText: siteConfig.consentText,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'No se pudo enviar');
      }
      setStatus('sent');
      setFeedback('Recibimos tu mensaje. Te contactaremos con la información que nos diste.');
      setValues(initial);
      trackEvent('LeadSubmit', { interest: values.interest });
    } catch {
      setStatus('error');
      setFeedback('No pudimos enviar el correo ahora. Puedes continuar por WhatsApp.');
      trackEvent('LeadSubmitFail', { interest: values.interest });
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="name" value={values.name} onChange={onChange} autoComplete="name" />
        {errors.name ? <p className="form-error">{errors.name}</p> : null}
      </div>
      <div className="form-field">
        <label htmlFor="correo">Correo</label>
        <input id="correo" name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" />
        {errors.email ? <p className="form-error">{errors.email}</p> : null}
      </div>
      <div className="form-field">
        <label htmlFor="telefono">Teléfono (opcional)</label>
        <input id="telefono" name="phone" type="tel" value={values.phone} onChange={onChange} autoComplete="tel" />
      </div>
      <div className="form-field">
        <label htmlFor="interes">Producto o servicio de interés</label>
        <select id="interes" name="interest" value={values.interest} onChange={onChange}>
          <option>Hosting/Página web</option>
          <option>NovaFinanzas</option>
          <option>NovaFit</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="message" rows="5" value={values.message} onChange={onChange} />
        {errors.message ? <p className="form-error">{errors.message}</p> : null}
      </div>
      <div className="form-field form-field--check">
        <label>
          <input type="checkbox" name="consent" checked={values.consent} onChange={onChange} />
          {' '}{siteConfig.consentText}
        </label>
        {errors.consent ? <p className="form-error">{errors.consent}</p> : null}
      </div>
      {feedback ? <p className={status === 'sent' ? 'form-ok' : 'form-error'}>{feedback}</p> : null}
      <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
      {status === 'error' ? (
        <a
          className="btn btn-whatsapp"
          href={getContactWhatsAppUrl(values)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Continuar por WhatsApp
        </a>
      ) : (
        <a className="btn btn-ghost" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          Preferir WhatsApp
        </a>
      )}
    </form>
  );
}
