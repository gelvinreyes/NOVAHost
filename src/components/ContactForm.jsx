import { useState } from 'react';
import { getContactWhatsAppUrl } from '../utils/whatsapp';

const initial = { name: '', phone: '', email: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const validate = (data) => {
    const next = {};
    if (!data.name.trim()) next.name = 'Ingresa tu nombre.';
    if (!data.phone.trim() || data.phone.replace(/\D/g, '').length < 8) {
      next.phone = 'Ingresa un teléfono válido.';
    }
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'Ingresa un correo válido.';
    }
    if (!data.message.trim() || data.message.trim().length < 8) {
      next.message = 'Escribe un mensaje con un poco más de detalle.';
    }
    return next;
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTouched(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const url = getContactWhatsAppUrl(values);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          aria-invalid={Boolean(touched && errors.name)}
          aria-describedby={errors.name ? 'error-nombre' : undefined}
        />
        {touched && errors.name ? <p id="error-nombre" className="form-error">{errors.name}</p> : null}
      </div>

      <div className="form-field">
        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={onChange}
          aria-invalid={Boolean(touched && errors.phone)}
          aria-describedby={errors.phone ? 'error-telefono' : undefined}
        />
        {touched && errors.phone ? <p id="error-telefono" className="form-error">{errors.phone}</p> : null}
      </div>

      <div className="form-field">
        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          aria-invalid={Boolean(touched && errors.email)}
          aria-describedby={errors.email ? 'error-correo' : undefined}
        />
        {touched && errors.email ? <p id="error-correo" className="form-error">{errors.email}</p> : null}
      </div>

      <div className="form-field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="message"
          rows="5"
          value={values.message}
          onChange={onChange}
          aria-invalid={Boolean(touched && errors.message)}
          aria-describedby={errors.message ? 'error-mensaje' : undefined}
        />
        {touched && errors.message ? <p id="error-mensaje" className="form-error">{errors.message}</p> : null}
      </div>

      <button className="btn btn-gold" type="submit">
        <i className="bi bi-whatsapp" aria-hidden="true" /> Enviar por WhatsApp
      </button>
    </form>
  );
}
