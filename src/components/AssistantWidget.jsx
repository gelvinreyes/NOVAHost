import { useEffect, useId, useRef, useState } from 'react';
import { ASSISTANT_CONFIG, ASSISTANT_WHATSAPP_MESSAGE, getAgentChatUrl } from '../data/assistant';
import { getWhatsAppUrl } from '../utils/whatsapp';

const USER_ERROR_MESSAGE = 'No pude conectar con el asistente. Inténtalo de nuevo en un momento.';

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
  const whatsappUrl = getWhatsAppUrl(ASSISTANT_WHATSAPP_MESSAGE);

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
        body: JSON.stringify({ message: text }),
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok || typeof data.response !== 'string' || !data.response.trim()) {
        throw new Error(data.error || USER_ERROR_MESSAGE);
      }

      setMessages((current) => [
        ...current,
        { id: `assistant-${Date.now()}`, role: 'assistant', text: data.response.trim() },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { id: `error-${Date.now()}`, role: 'error', text: USER_ERROR_MESSAGE },
      ]);
    } finally {
      setSending(false);
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
              onClick={() => setOpen(false)}
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
            <div className="assistant-form__row">
              <a
                className="assistant-action assistant-action--whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
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
        onClick={() => setOpen((value) => !value)}
      >
        <i className={`bi ${open ? 'bi-x-lg' : 'bi-chat-dots-fill'}`} aria-hidden="true" />
      </button>
    </div>
  );
}
