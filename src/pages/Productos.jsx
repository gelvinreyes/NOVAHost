import { useMemo, useState } from 'react';
import siteConfig from '../config/siteConfig';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import CtaBanner from '../components/CtaBanner';

export default function Productos() {
  const [active, setActive] = useState('all');

  const items = useMemo(() => {
    if (active === 'all') return siteConfig.menu;
    return siteConfig.menu.filter((item) => item.category === active);
  }, [active]);

  const categories = [
    { id: 'all', label: 'Todos' },
    ...siteConfig.menuCategories,
  ];

  return (
    <>
      <Seo
        title="Productos"
        description="Hosting, dominios, correo corporativo, SSL y paquetes de presencia digital para emprendedores en Guatemala."
        path="/productos"
        image={siteConfig.productsHeroImage}
      />
      <PageHero
        image={siteConfig.productsHeroImage}
        eyebrow="Productos"
        title="Hosting confiable para tu negocio"
        subtitle="Tu sitio web necesita un lugar seguro y estable. Contratamos y operamos presencia digital de forma sencilla."
      />

      <section className="section">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Catálogo</p>
            <h2>Servicios para estar en línea</h2>
            <p>
              Priorizamos hosting, correo corporativo y dominios. Las condiciones comerciales
              específicas de cada plan se confirman al cotizar.
            </p>
          </Reveal>

          <div className="menu-tabs" role="tablist" aria-label="Categorías de productos">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active === category.id}
                className={active === category.id ? 'is-active' : ''}
                onClick={() => setActive(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {items.map((item, index) => (
              <Reveal key={item.id} delay={index * 60}>
                <ProductCard item={item} ctaLabel="Cotizar" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Reveal className="section-heading">
            <p className="eyebrow">Líneas de producto</p>
            <h2>Presencia digital, paso a paso</h2>
          </Reveal>
          <div className="experience-grid">
            {siteConfig.productLines.map((line, index) => (
              <Reveal key={line.title} className="experience-item" delay={index * 70}>
                <h3>{line.title}</h3>
                <p>{line.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Quiero contratar hosting"
        text="Cuéntanos qué necesita tu negocio y te orientamos con una propuesta clara."
        buttonLabel="Habla con un asesor"
        message={siteConfig.whatsappHostingMessage}
      />
    </>
  );
}
