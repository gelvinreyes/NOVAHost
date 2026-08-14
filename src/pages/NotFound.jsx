import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '70vh' }}>
      <Seo
        title="Página no encontrada"
        description="La página que buscas no existe en NOVAHost."
        path="/404"
      />
      <div className="container-narrow text-center">
        <p className="eyebrow">Error 404</p>
        <h1>No encontramos esta página</h1>
        <p className="lead">Es posible que el enlace haya cambiado. Vuelve al inicio o recorre el menú.</p>
        <Link className="btn btn-gold" to="/">Ir al inicio</Link>
      </div>
    </section>
  );
}
