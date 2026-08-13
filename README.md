# ServiceTech V4 Argentina — landing comercial

Landing pública de ServiceTech V4 para servicios técnicos de celulares en toda Argentina.

La propuesta incluye gestión de órdenes, clientes, caja, inventario, tickets, etiquetas, vista móvil local y facturación electrónica integrada a ARCA.

## Contacto comercial

- **Rol:** Asesor comercial
- **WhatsApp:** +54 9 261 485-7620

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## Verificación

```bash
npm run lint
npm run build:vercel
```

## Publicar desde GitHub en Vercel

1. Creá un repositorio vacío en GitHub.
2. Subí todo el contenido de esta carpeta.
3. En Vercel, elegí **Add New → Project** e importá el repositorio.
4. Vercel usará la configuración incluida en `vercel.json`.
5. Presioná **Deploy**.

No requiere variables de entorno, base de datos ni servicios adicionales.

## Personalización

- Contenido y WhatsApp: `app/page.tsx`
- Estilos y diseño adaptable: `app/globals.css`
- Imágenes del sistema: `public/product/`
- SEO y vista previa social: `app/layout.tsx`

© 2026 ServiceTech. Uso comercial reservado por su propietario.
