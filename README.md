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

El widget de chat llama al backend **AgenteConIA**. No coloques `OPENAI_API_KEY` en este repositorio.

Copia `.env.example` a `.env` para desarrollo:

```
VITE_AGENT_API_URL=http://localhost:3000/api/chat
```

En producción, define `VITE_AGENT_API_URL` con la URL pública del endpoint POST (`https://tu-dominio-del-agente/api/chat`) **antes** de `npm run build`. Si no se define, el fallback de desarrollo es `http://localhost:3000/api/chat`.

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
