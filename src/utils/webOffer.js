import siteConfig from '../config/siteConfig';
import { guatemalaDateISO } from './guatemalaTime';

export function getActiveOffer(offer = siteConfig.webOffer) {
  const today = guatemalaDateISO();
  const isPromo = Boolean(
    offer?.enabled
    && offer.startDate
    && offer.endDate
    && today >= offer.startDate
    && today <= offer.endDate
  );
  const price = isPromo ? offer.promoPrice : offer.regularPrice;
  return {
    ...offer,
    isPromo,
    price,
    priceLabel: `Q${price.toLocaleString('es-GT')}`,
    legal: isPromo ? offer.promoLegal : offer.regularLegal,
  };
}
