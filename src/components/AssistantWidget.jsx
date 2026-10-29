import { useEffect, useId, useRef, useState } from 'react';
import { ASSISTANT_CONFIG, ASSISTANT_WHATSAPP_MESSAGE, getAgentChatUrl } from '../data/assistant';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getApiUrl } from '../utils/api';
import { trackEvent } from '../utils/analytics';

const USER_ERROR_MESSAGE = 'No pude conectar con el asistente. Inténtalo de nuevo en un momento.';
const SERVICE_DOWN_MESSAGE =
  'El asistente no está disponible en este momento. Puedes escribirnos por WhatsApp.';
const SESSION_KEY = 'novahost_assistant_session';
const HUMAN_INTENT = /asesor|humano|whatsapp|comprar|contratar|cotiz|hablar con alguien|quiero que me contact/i;

function getSessionId() {
  const existing = sessionStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  sessionStorage.setItem(SESSION_KEY, id);
  return id;
}

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState([
    { id: 'welcome', role: 'assistant', text: ASSISTANT_CONFIG.welcome },
  ]);
  const panelId = useId();
  const closeRef = useRef(null);
  const inputRef = useRef(null);
  const threadRef = useRef(null);
  const conversationRef = useRef(null);
  const whatsappUrl = getWhatsAppUrl(ASSISTANT_WHATSAPP_MESSAGE);
  const [offerHuman, setOfferHuman] = useState(false);
  const [shareTranscript, setShareTranscript] = useState(false);
  const [handoffBusy, setHandoffBusy] = useState(false);

  const closeConversation = (reason) => {
    const id = conversationRef.current;
    if (!id) return;
    fetch(getApiUrl('/chat/close'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ conversation_id: id, session_id: getSessionId(), reason }),
      keepalive: true,
    }).catch(() => {});
  };

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const thread = threadRef.current;
    if (!thread) return;
    thread.scrollTop = thread.scrollHeight;
  }, [messages, sending, open]);

  const sendMessage = async (event) => {
    event.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    const userMessage = { id: `user-${Date.now()}`, role: 'user', text };
    setMessages((current) => [...current, userMessage]);
    setInput('');
    setSending(true);

    try {
      const response = await fetch(getAgentChatUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          session_id: getSessionId(),
          conversation_id: conversationRef.current,
        }),
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.status === 503) throw new Error(SERVICE_DOWN_MESSAGE);
      if (!response.ok || typeof data.response !== 'string' || !data.response.trim()) {
        throw new Error(data.error || USER_ERROR_MESSAGE);
      }
      if (data.conversation_id) conversationRef.current = data.conversation_id;
      if (HUMAN_INTENT.test(text)) setOfferHuman(true);
      trackEvent('ChatAttended');
      setMessages((current) => [
        ...current,
        { id: `assistant-${Date.now()}`, role: 'assistant', text: data.response.trim() },
      ]);
    } catch (error) {
      const text = error?.message === SERVICE_DOWN_MESSAGE ? SERVICE_DOWN_MESSAGE : USER_ERROR_MESSAGE;
      setMessages((current) => [
        ...current,
        { id: `error-${Date.now()}`, role: 'error', text },
      ]);
    } finally {
      setSending(false);
    }
  };

  const requestHuman = async (withTranscript) => {
    setHandoffBusy(true);
    try {
      if (!conversationRef.current) {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        return;
      }
      const response = await fetch(getApiUrl('/chat/handoff'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation_id: conversationRef.current,
          session_id: getSessionId(),
          shareTranscript: withTranscript,
        }),
      });
      const data = await response.json().catch(() => ({}));
      const url = data.whatsappUrl || whatsappUrl;
      window.open(url, '_blank', 'noopener,noreferrer');
      trackEvent('WhatsAppClick', { place: 'handoff' });
      setMessages((current) => [
        ...current,
        {
          id: `handoff-${Date.now()}`,
          role: 'assistant',
          text: withTranscript
            ? 'Abrí WhatsApp con un resumen autorizado. El envío lo completas tú; si el correo interno está activo, el asesor también recibe el detalle.'
            : 'Abrí WhatsApp sin compartir el historial. Puedes escribirle al asesor cuando quieras.',
        },
      ]);
    } catch {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setHandoffBusy(false);
    }
  };

  const onComposerKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <div className="assistant-root">
      {open ? (
        <section
          className="assistant-panel"
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${panelId}-title`}
        >
          <header className="assistant-panel__header">
            <div>
              <p id={`${panelId}-title`} className="assistant-panel__title">
                {ASSISTANT_CONFIG.title}
              </p>
              <p className="assistant-panel__status">
                <span className="assistant-panel__dot" aria-hidden="true" />
                {ASSISTANT_CONFIG.status}
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              className="assistant-panel__close"
              onClick={() => {
                closeConversation('visitor_closed');
                setOpen(false);
              }}
              aria-label="Cerrar asistente"
            >
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          </header>

          <div className="assistant-panel__body" ref={threadRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`assistant-bubble assistant-bubble--${message.role}`}
              >
                <p>{message.text}</p>
              </div>
            ))}
            {sending ? (
              <div className="assistant-bubble assistant-bubble--assistant" aria-live="polite">
                <p className="assistant-typing">
                  <span />
                  <span />
                  <span />
                </p>
              </div>
            ) : null}
          </div>

          <form className="assistant-form" onSubmit={sendMessage}>
            <label className="assistant-visually-hidden" htmlFor={`${panelId}-input`}>
              Escribe tu mensaje
            </label>
            <textarea
              id={`${panelId}-input`}
              ref={inputRef}
              className="assistant-form__input"
              rows={2}
              value={input}
              disabled={sending}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onComposerKeyDown}
              placeholder="Escribe tu pregunta..."
              maxLength={2000}
            />
            {offerHuman ? (
              <div className="assistant-handoff">
                <p>¿Quieres hablar con un asesor humano por WhatsApp?</p>
                <label className="assistant-handoff__consent">
                  <input
                    type="checkbox"
                    checked={shareTranscript}
                    onChange={(event) => setShareTranscript(event.target.checked)}
                  />
                  Autorizo incluir un resumen de esta conversación para el asesor.
                </label>
                <button
                  type="button"
                  className="assistant-action assistant-action--whatsapp"
                  disabled={handoffBusy}
                  onClick={() => requestHuman(shareTranscript)}
                >
                  Sí, contactar asesor
                </button>
              </div>
            ) : null}
            <div className="assistant-form__row">
              <a
                className="assistant-action assistant-action--whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setOfferHuman(true);
                  trackEvent('WhatsAppClick', { place: 'chat' });
                }}
              >
                <i className="bi bi-whatsapp" aria-hidden="true" />
                WhatsApp
              </a>
              <button
                type="submit"
                className="assistant-action assistant-action--primary"
                disabled={sending || !input.trim()}
              >
                Enviar
              </button>
              <button
                type="button"
                className="assistant-action"
                onClick={() => setOfferHuman(true)}
              >
                Hablar con un asesor
              </button>
            </div>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className={`assistant-launcher${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Cerrar asistente NOVAHost' : 'Abrir asistente NOVAHost'}
        onClick={() => {
          setOpen((value) => {
            const next = !value;
            if (next) {
              trackEvent('ChatOpen');
              setOfferHuman(false);
            }
            return next;
          });
        }}
      >
        <i className={`bi ${open ? 'bi-x-lg' : 'bi-chat-dots-fill'}`} aria-hidden="true" />
      </button>
    </div>
  );
}
