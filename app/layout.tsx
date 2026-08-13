import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ServiceTech V4 Argentina | Gestión para servicios técnicos",
  description:
    "Software para servicios técnicos de celulares en Argentina: órdenes, clientes, caja, inventario, tickets, etiquetas, vista móvil y facturación ARCA integrada.",
  keywords: [
    "software servicio técnico celulares Argentina",
    "gestión taller celulares Argentina",
    "sistema reparaciones celulares",
    "facturación ARCA servicio técnico",
    "ServiceTech Argentina",
  ],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ServiceTech V4 Argentina | Tu taller bajo control",
    description:
      "Gestión integral para servicios técnicos con órdenes, caja, inventario, tickets, etiquetas, vista móvil y facturación ARCA integrada.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceTech V4 Argentina",
    description:
      "Gestión integral para servicios técnicos con facturación ARCA integrada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
