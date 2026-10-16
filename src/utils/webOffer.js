import siteConfig from '../config/siteConfig';
import { guatemalaDateISO } from './guatemalaTime';

export function getActiveOffer(offer = siteConfig.webOffer) {
  const today = guatemalaDateISO();
  const promoOn = Boolean(
    offer?.enabled
    && offer.startDate
    && offer.endDate
    && today >= offer.startDate
    && today <= offer.endDate
  );

  return {
    ...offer,
    isPromo: promoOn,
    price: promoOn ? offer.promoPrice : offer.regularPrice,
    priceLabel: promoOn
      ? `Q${offer.promoPrice.toLocaleString('es-GT')}`
      : `Q${offer.regularPrice.toLocaleString('es-GT')}`,
    periodLabel: 'al año',
    legal: promoOn ? offer.promoLegal : offer.regularLegal,
  };
}
