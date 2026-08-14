export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  overlay = 'dark',
}) {
  return (
    <section className={`page-hero page-hero--${overlay}`}>
      <div className="page-hero__media" style={{ backgroundImage: `url(${image})` }} />
      <div className="page-hero__overlay" />
      <div className="container-wide page-hero__content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="page-hero__lead">{subtitle}</p> : null}
      </div>
    </section>
  );
}
