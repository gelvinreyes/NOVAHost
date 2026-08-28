# NOVAHost

Sitio web corporativo de **NOVAHost**, empresa guatemalteca de hosting, dominios y presencia digital para emprendedores y pequeñas empresas.

Eslogan: *Tu negocio, siempre en línea.*

## Stack

- React 18 + Vite (sitio compilado, listo para A2 Hosting)
- React Router 6
- Bootstrap 5 (utilidades) + Bootstrap Icons
- Fondo dinámico Matrix (canvas)
- CSS de marca con tema oscuro

## Contacto

- Teléfono: **+502 4752 4869**
- WhatsApp: **+502 4752 4869**
- Correo: **ventas@novasoft.com.gt**
- Dominio: **novahost.com.gt**

## Desarrollo

```bash
npm install
npm run dev
```

## Agente IA

El widget llama a `/api/chat` en el mismo dominio (`https://novahost.com.gt/api/chat`). No hace falta `VITE_AGENT_API_URL` en producción si el agente está montado en `/api`.

Opcional, para forzar otra URL:

```
VITE_AGENT_API_URL=https://novahost.com.gt/api/chat
```

## Producción (A2 Hosting)

```bash
npm run build
```

El build genera `dist/`. Sube el contenido de esa carpeta a `public_html` (o al directorio del dominio). El archivo `.htaccess` ya está incluido para que React Router funcione en Apache.

No se requiere WordPress: el sitio es estático compilado.

## Personalización

Editar `src/config/siteConfig.js` y reemplazar imágenes en `public/images/`.

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/quienes-somos` | Quiénes somos |
| `/productos` | Productos |
| `/servicios` | Servicios |
| `/porque` | Por qué NOVAHost |
| `/contacto` | Contacto |
