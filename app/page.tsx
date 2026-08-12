"use client";

import { useState } from "react";
import Image from "next/image";

const whatsapp =
  "https://wa.me/573224638383?text=Hola%20Axel%2C%20quiero%20conocer%20ServiceTech%20V4%20para%20mi%20servicio%20t%C3%A9cnico.";

const features = [
  ["01", "Órdenes bajo control", "Recepción, diagnóstico, estado, técnico, prioridad y entrega reunidos en una sola ficha."],
  ["02", "Clientes e historial", "Consulta trabajos anteriores, datos de contacto, notas y archivos sin revisar conversaciones viejas."],
  ["03", "Caja y rentabilidad", "Registra cobros, señas, costos de reparación y gastos para conocer el resultado real del taller."],
  ["04", "Tickets y etiquetas", "Genera PDF, ticket térmico y etiquetas con código QR o código de barras desde la misma orden."],
  ["05", "Inventario y ventas", "Punto de venta, productos, stock, proveedores, compras, cotizaciones y devoluciones integrados."],
  ["06", "Marca de tu negocio", "Personaliza nombre, logo, datos comerciales, moneda, garantía y documentos del servicio técnico."],
];

const steps = [
  ["01", "Recibe", "Registra cliente, equipo, estado físico, accesorios y falla declarada."],
  ["02", "Gestiona", "Actualiza diagnóstico, reparación, presupuesto, cobros y estado del trabajo."],
  ["03", "Entrega", "Imprime comprobantes, etiqueta el equipo y conserva todo el historial."],
];

function LocalLogo({ large = false }: { large?: boolean }) {
  return (
    <span className={`local-logo${large ? " local-logo-large" : ""}`}>
      <Image
        src="/brand/el-local-logo.png"
        alt="EL LOCAL · Tecnología y Accesorios"
        fill
        sizes={large ? "170px" : "92px"}
      />
    </span>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"normal" | "neon">("neon");

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="ServiceTech, inicio">
          <LocalLogo />
          <span><strong>ServiceTech V4</strong><small>DISTRIBUIDOR AUTORIZADO // COLOMBIA</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#funciones">Funciones</a><a href="#experiencia">Experiencia</a><a href="#preguntas">Preguntas</a>
        </nav>
        <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Hablar con Axel Beltrán</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Distribuido por EL LOCAL · Tecnología y Accesorios</div>
          <h1>Menos chats sueltos.<br /><em>Más reparaciones bajo control.</em></h1>
          <p className="hero-text">Gestiona órdenes, clientes, caja, inventario, tickets y seguimiento desde un solo sistema, diseñado para el ritmo real de un taller de celulares.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Solicitar demostración <span>↗</span></a>
            <a className="text-link" href="#funciones">Ver todo lo que incluye <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div><strong>LOCAL</strong><span>Trabaja en tu PC</span></div>
            <div><strong>QR</strong><span>Consulta desde el móvil</span></div>
            <div><strong>2 VISTAS</strong><span>Normal + Neon</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="window-shell">
            <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>SERVICETECH // MOBILE LAB</span><b>● ONLINE</b></div>
            <Image
              src="/product/neon-workstation.png"
              alt="Vista Neon de ServiceTech mostrando una nueva orden"
              width={1440}
              height={900}
              priority
              sizes="(max-width: 1050px) 90vw, 55vw"
            />
          </div>
          <div className="floating-card card-orders"><span className="live-dot" /><small>ESTADO DEL TALLER</small><strong>Todo en una sola vista</strong></div>
          <div className="floating-card card-mobile"><span>⌁</span><div><small>VISTA MÓVIL</small><strong>Acceso por QR</strong></div></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Principales capacidades">
        <span>ÓRDENES</span><i /><span>DIAGNÓSTICO</span><i /><span>CLIENTES</span><i /><span>CAJA</span><i /><span>INVENTARIO</span><i /><span>ETIQUETAS</span>
      </section>

      <section className="problem-section section-wrap">
        <div className="section-kicker">UN TALLER MÁS ORDENADO</div>
        <div className="problem-layout">
          <h2>El trabajo técnico ya es complejo.<br /><span>Gestionarlo no debería serlo.</span></h2>
          <div className="problem-copy">
            <p>ServiceTech reemplaza anotaciones dispersas, mensajes difíciles de encontrar y cuentas hechas a mano por un flujo claro, desde que ingresa el equipo hasta que vuelve a manos del cliente.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer">Quiero ordenar mi taller <span>↗</span></a>
          </div>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="features-section" id="funciones">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="section-kicker">TODO EN EL MISMO SISTEMA</div><h2>Funciones que trabajan juntas.</h2></div>
            <p>Sin sumar herramientas innecesarias. Cada módulo acompaña el flujo cotidiano del servicio técnico.</p>
          </div>
          <div className="feature-grid">
            {features.map(([number, title, text]) => <article className="feature-card" key={number}><span>{number}</span><div className="feature-icon" aria-hidden="true">+</div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="theme-section section-wrap" id="experiencia">
        <div className="theme-copy">
          <div className="section-kicker">TU SISTEMA, TU ESTILO</div>
          <h2>Una vista profesional.<br /><span>Otra que hace mirar.</span></h2>
          <p>Alterna en el momento entre una interfaz clara y una estética Neon Mobile Lab. El contenido y la legibilidad se mantienen; cambia la personalidad del sistema.</p>
          <div className="theme-switch" role="group" aria-label="Seleccionar vista de demostración">
            <button className={theme === "normal" ? "active" : ""} onClick={() => setTheme("normal")}>Vista normal</button>
            <button className={theme === "neon" ? "active" : ""} onClick={() => setTheme("neon")}>Vista neon</button>
          </div>
          <div className="theme-notes"><span>✓ Cambio inmediato</span><span>✓ Elección persistente</span><span>✓ Diseñado para leer rápido</span></div>
        </div>
        <div className={`theme-preview ${theme}`}>
          <div className="preview-label"><i /> {theme === "neon" ? "NEON MOBILE LAB" : "VISTA NORMAL"}</div>
          <Image
            src={theme === "neon" ? "/product/neon-workstation.png" : "/product/normal-workstation.png"}
            alt={theme === "neon" ? "Interfaz Neon Mobile Lab de ServiceTech" : "Interfaz normal de ServiceTech"}
            width={1440}
            height={900}
            sizes="(max-width: 900px) 90vw, 55vw"
          />
        </div>
      </section>

      <section className="mobile-section">
        <div className="section-wrap mobile-layout">
          <div className="mobile-image"><div className="scan-line" /><Image src="/product/mobile-qr.png" alt="Configuración de acceso móvil local mediante QR" width={1440} height={900} sizes="(max-width: 900px) 90vw, 50vw" /></div>
          <div className="mobile-copy">
            <div className="section-kicker">MÓVIL LOCAL</div>
            <h2>Mira los trabajos pendientes desde el teléfono.</h2>
            <p>Activa la vista móvil, escanea el QR y consulta las órdenes activas desde un teléfono conectado al mismo Wi-Fi del taller. Sin depender de una nube externa.</p>
            <ul><li><span>01</span> Órdenes pendientes y estados</li><li><span>02</span> Datos del equipo y reparación</li><li><span>03</span> Acceso protegido por enlace y token</li></ul>
            <a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer">Consultar cómo funciona <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="fit-section section-wrap">
        <div className="fit-card">
          <div><div className="section-kicker">PENSADO PARA</div><h2>Negocios que reparan, venden y necesitan crecer con orden.</h2></div>
          <div className="fit-tags"><span>Servicio técnico de celulares</span><span>Venta de accesorios</span><span>Reparación de tablets y PC</span><span>Talleres con más de una estación</span></div>
          <div className="distributor-seal"><LocalLogo large /><p><strong>Distribuidor autorizado</strong><br />TECNOLOGÍA Y ACCESORIOS<br />NIT 86088441-6</p></div>
        </div>
      </section>

      <section className="faq-section section-wrap" id="preguntas">
        <div className="section-heading faq-heading"><div><div className="section-kicker">ANTES DE DECIDIR</div><h2>Preguntas frecuentes.</h2></div></div>
        <div className="faq-grid">
          <details open><summary>¿Se puede personalizar con mi marca?</summary><p>Sí. Puedes configurar el nombre del negocio, logo, contacto, moneda, garantía y datos visibles en los documentos.</p></details>
          <details><summary>¿Necesita conexión permanente a internet?</summary><p>La operación principal funciona localmente en Windows. La vista móvil trabaja dentro de la misma red Wi-Fi del taller.</p></details>
          <details><summary>¿Imprime tickets y etiquetas?</summary><p>Sí. Permite asignar impresoras para A4, ticket térmico y etiquetas, además de generar copias PDF.</p></details>
          <details><summary>¿Puedo ver una demostración antes de comprar?</summary><p>Sí. Escríbele a Axel Beltrán por WhatsApp. EL LOCAL · Tecnología y Accesorios es el distribuidor autorizado del software.</p></details>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-glow" />
        <div className="cta-inner">
          <div className="section-kicker">DA EL SIGUIENTE PASO</div>
          <h2>Tu taller puede trabajar con<br /><span>más orden desde hoy.</span></h2>
          <p>Habla directamente con Axel Beltrán, conoce el sistema y resuelve tus dudas antes de comprar.</p>
          <a className="button button-primary button-large" href={whatsapp} target="_blank" rel="noreferrer">Conversar por WhatsApp <span>↗</span></a>
          <small>EL LOCAL · TECNOLOGÍA Y ACCESORIOS · NIT 86088441-6<br />Axel Beltrán · +57 322 463 8383</small>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><LocalLogo /><span><strong>ServiceTech V4</strong><small>TECNOLOGÍA Y ACCESORIOS · NIT 86088441-6</small></span></a>
        <p>Distribuidor autorizado del software.</p>
        <a href={whatsapp} target="_blank" rel="noreferrer">Axel Beltrán · WhatsApp +57 322 463 8383</a>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Hablar con Axel Beltrán por WhatsApp"><span>WA</span><b>Consultar</b></a>
    </main>
  );
}
