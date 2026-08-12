import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ServiceTech V4 Mendoza | Gestión para servicios técnicos",
  description:
    "Software de gestión para servicios técnicos de celulares en Mendoza: órdenes, clientes, caja, inventario, tickets, etiquetas y vista móvil.",
  keywords: [
    "software servicio técnico celulares Mendoza",
    "gestión taller celulares Mendoza",
    "sistema reparaciones celulares Argentina",
    "ServiceTech Mendoza",
  ],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ServiceTech V4 Mendoza | Tu taller bajo control",
    description:
      "Software de gestión para servicios técnicos de celulares en Mendoza. Solicitá una demostración a Ignacio Echegaray por WhatsApp.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
