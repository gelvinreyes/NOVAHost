import { useEffect } from 'react';

export default function Lightbox({ items, index, onClose, onChange }) {
  const isOpen = index >= 0 && items[index];
  const item = isOpen ? items[index] : null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((index + 1) % items.length);
      if (event.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, index, items.length, onChange, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Vista ampliada de fotografía">
      <button className="lightbox__backdrop" type="button" aria-label="Cerrar" onClick={onClose} />
      <figure className="lightbox__figure">
        <img src={item.src} alt={item.alt} />
        <figcaption>{item.alt}</figcaption>
      </figure>
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Cerrar visor">
        <i className="bi bi-x-lg" aria-hidden="true" />
      </button>
      {items.length > 1 ? (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            type="button"
            onClick={() => onChange((index - 1 + items.length) % items.length)}
            aria-label="Fotografía anterior"
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            type="button"
            onClick={() => onChange((index + 1) % items.length)}
            aria-label="Fotografía siguiente"
          >
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </>
      ) : null}
    </div>
  );
}
