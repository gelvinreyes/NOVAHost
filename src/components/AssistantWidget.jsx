import { useEffect, useId, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ASSISTANT_CONFIG,
  ASSISTANT_MENU_ID,
  ASSISTANT_WHATSAPP_MESSAGE,
  getAssistantReply,
} from '../data/assistant';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [topicId, setTopicId] = useState(ASSISTANT_MENU_ID);
  const panelId = useId();
  const closeRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const reply = getAssistantReply(topicId);
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

  const goToDemos = () => {
    setOpen(false);
    if (location.pathname === '/') {
      document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' });
      if (window.location.hash !== '#demos') {
        window.history.replaceState(null, '', '/#demos');
      }
      return;
    }
    navigate('/#demos');
  };

  const onAction = (action) => {
    if (action.type === 'topic') {
      setTopicId(action.id);
      return;
    }
    if (action.type === 'demos') {
      goToDemos();
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

          <div className="assistant-panel__body">
            <div className="assistant-bubble">
              <p>{reply.text}</p>
              {reply.steps?.length ? (
                <ol className="assistant-steps">
                  {reply.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          </div>

          <div className="assistant-panel__actions">
            {reply.actions.map((action) => {
              if (action.type === 'whatsapp') {
                return (
                  <a
                    key={action.label}
                    className="assistant-action assistant-action--whatsapp"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp" aria-hidden="true" />
                    {action.label}
                  </a>
                );
              }

              return (
                <button
                  key={action.label}
                  type="button"
                  className={
                    action.type === 'demos'
                      ? 'assistant-action assistant-action--primary'
                      : 'assistant-action'
                  }
                  onClick={() => onAction(action)}
                >
                  {action.label}
                </button>
              );
            })}
          </div>
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
            if (next) setTopicId(ASSISTANT_MENU_ID);
            return next;
          });
        }}
      >
        <i className={`bi ${open ? 'bi-x-lg' : 'bi-chat-dots-fill'}`} aria-hidden="true" />
      </button>
    </div>
  );
}
