import { useEffect, useState } from 'react';
import { isAuthorizedRuntime, licenseHome } from '../utils/licenseGuard';

export default function LicenseGate({ children }) {
  const [ok, setOk] = useState(() => isAuthorizedRuntime());

  useEffect(() => {
    const verify = () => setOk(isAuthorizedRuntime());
    verify();
    const id = window.setInterval(verify, 4000);
    const onFocus = () => verify();
    window.addEventListener('focus', onFocus);
    return () => {
      window.clearInterval(id);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  if (ok) return children;

  return (
    <main className="license-lock" role="alert">
      <div className="license-lock__card">
        <p className="kicker">Sitio protegido</p>
        <h1>Este sitio pertenece a NOVAHost.</h1>
        <p>
          Esta instalación está licenciada para operar en novahost.com.gt.
          Si lo viste en otro dominio, fue copiado sin autorización.
        </p>
        <a className="btn btn-solid" href={licenseHome()} rel="noopener noreferrer">
          Ir a NOVAHost
        </a>
      </div>
    </main>
  );
}
