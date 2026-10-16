import { trackEvent } from '../utils/analytics';

export default function NovaProductCard({ product }) {
  return (
    <article className="nova-card">
      <div className="nova-card__media">
        <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
      </div>
      <div className="nova-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul>
          {product.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="tiny-note">{product.imageNote}</p>
        <a
          className="btn btn-gold"
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('ProductClick', { product: product.slug })}
        >
          {product.cta}
        </a>
      </div>
    </article>
  );
}
