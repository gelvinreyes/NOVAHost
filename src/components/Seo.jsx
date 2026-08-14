import { useEffect } from 'react';
import siteConfig from '../config/siteConfig';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(attributes.tag || 'meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'tag') return;
    if (key === 'text') {
      element.textContent = value;
      return;
    }
    element.setAttribute(key, value);
  });
  return element;
}

export default function Seo({
  title,
  description,
  path = '/',
  image,
  type = 'website',
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.restaurantName}`
      : siteConfig.seo.defaultTitle;
    const desc = description || siteConfig.seo.defaultDescription;
    const canonical = `${siteConfig.siteUrl.replace(/\/$/, '')}${path}`;
    const ogImage = `${siteConfig.siteUrl.replace(/\/$/, '')}${image || siteConfig.heroImage}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', {
      tag: 'meta',
      name: 'description',
      content: desc,
    });
    upsertMeta('link[rel="canonical"]', {
      tag: 'link',
      rel: 'canonical',
      href: canonical,
    });
    upsertMeta('meta[property="og:title"]', {
      tag: 'meta',
      property: 'og:title',
      content: fullTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      tag: 'meta',
      property: 'og:description',
      content: desc,
    });
    upsertMeta('meta[property="og:type"]', {
      tag: 'meta',
      property: 'og:type',
      content: type,
    });
    upsertMeta('meta[property="og:url"]', {
      tag: 'meta',
      property: 'og:url',
      content: canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      tag: 'meta',
      property: 'og:image',
      content: ogImage,
    });
    upsertMeta('meta[property="og:locale"]', {
      tag: 'meta',
      property: 'og:locale',
      content: siteConfig.locale,
    });
    upsertMeta('meta[property="og:site_name"]', {
      tag: 'meta',
      property: 'og:site_name',
      content: siteConfig.restaurantName,
    });
    upsertMeta('meta[name="twitter:card"]', {
      tag: 'meta',
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      tag: 'meta',
      name: 'twitter:title',
      content: fullTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      tag: 'meta',
      name: 'twitter:description',
      content: desc,
    });
    upsertMeta('meta[name="twitter:image"]', {
      tag: 'meta',
      name: 'twitter:image',
      content: ogImage,
    });

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.legalName || siteConfig.restaurantName,
      alternateName: siteConfig.restaurantName,
      image: `${siteConfig.siteUrl.replace(/\/$/, '')}${siteConfig.logo}`,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.city,
        addressCountry: 'GT',
      },
      description: siteConfig.seo.defaultDescription,
    };

    let script = document.head.querySelector('script[data-seo-schema="true"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', 'true');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [title, description, path, image, type]);

  return null;
}
