# ServiceTech V4 — Landing comercial

Landing page pública de ServiceTech V4, preparada para GitHub y Vercel.

Distribución comercial:

- **EL LOCAL · Tecnología y Accesorios**
- **NIT:** 86088441-6
- **Contacto:** Axel Beltrán · +57 322 463 8383

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Verificación de producción

```bash
npm run typecheck
npm run build
```

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, selecciona **Add New → Project**.
3. Importa el repositorio.
4. Mantén la configuración detectada para Next.js y pulsa **Deploy**.

No necesita variables de entorno ni servicios externos. Los botones de contacto abren WhatsApp con un mensaje preparado para Axel Beltrán.

## Personalización rápida

- Textos y secciones: `app/page.tsx`
- Colores, tipografías y diseño adaptable: `app/globals.css`
- Imágenes del producto: `public/product/`
- Metadatos para buscadores y redes: `app/layout.tsx`

© 2026 ServiceTech. Uso comercial reservado por su propietario.
