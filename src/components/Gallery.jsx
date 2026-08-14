import { useEffect, useMemo, useState } from 'react';
import Lightbox from './Lightbox';

export default function Gallery({
  items,
  categories = [],
  columns = 'masonry',
}) {
  const [filter, setFilter] = useState(categories[0] || 'Todas');
  const [activeIndex, setActiveIndex] = useState(-1);

  const filtered = useMemo(() => {
    if (!filter || filter === 'Todas') return items;
    return items.filter((item) => item.category === filter);
  }, [filter, items]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [filter]);

  return (
    <div className="gallery">
      {categories.length > 1 ? (
        <div className="gallery-filters" role="tablist" aria-label="Filtrar fotografías">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={filter === category ? 'is-active' : ''}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className={`gallery-grid gallery-grid--${columns}`}>
        {filtered.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className="gallery-item"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ampliar fotografía: ${item.alt}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
            <span className="gallery-item__meta">
              {item.category ? <small>{item.category}</small> : null}
              <i className="bi bi-zoom-in" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        items={filtered}
        index={activeIndex}
        onClose={() => setActiveIndex(-1)}
        onChange={setActiveIndex}
      />
    </div>
  );
}
