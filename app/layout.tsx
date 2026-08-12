import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://servicetech-v4.vercel.app"),
  title: "ServiceTech V4 | Distribuido por EL LOCAL",
  description:
    "Software para servicios técnicos de celulares distribuido por EL LOCAL · Tecnología y Accesorios · NIT 86088441-6.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ServiceTech V4 | Tu taller bajo control · EL LOCAL",
    description:
      "Software de gestión para servicios técnicos de celulares. Solicita una demostración por WhatsApp.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
