import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';
import { getDishWhatsAppUrl } from '../utils/whatsapp';

export default function ProductCard({ item, ctaLabel = 'Consultar', to }) {
  const Action = to ? Link : 'a';
  const actionProps = to
    ? { to }
    : {
        href: getDishWhatsAppUrl(item.name),
        target: '_blank',
        rel: 'noopener noreferrer',
      };

  return (
    <article className="menu-card">
      <div className="menu-card__media">
        <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
      </div>
      <div className="menu-card__body">
        <div className="menu-card__top">
          <h3>{item.name}</h3>
          {item.price != null && item.price !== '' ? (
            <span className="price">{formatPrice(item.price)}</span>
          ) : null}
        </div>
        <p>{item.description}</p>
        <Action className="btn btn-ghost btn-sm" {...actionProps}>
          {ctaLabel}
        </Action>
      </div>
    </article>
  );
}
