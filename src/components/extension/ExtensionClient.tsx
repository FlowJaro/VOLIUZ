
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DOWNLOAD_URL =
  '/downloads/VOLIUZ-extension-publica-1.3.0.zip';

const features = [
  {
    number: '01',
    title: 'Detección de productos',
    description:
      'Identifica información disponible de productos en sitios compatibles, como Mercado Libre Colombia.',
  },
  {
    number: '02',
    title: 'Impacto ambiental',
    description:
      'Presenta estimaciones preliminares de CO₂e y sus limitaciones cuando existen datos suficientes.',
  },
  {
    number: '03',
    title: 'Materiales y circularidad',
    description:
      'Ayuda a interpretar los materiales declarados y el potencial de reciclaje de los productos.',
  },
  {
    number: '04',
    title: 'Asistencia ambiental',
    description:
      'Incluye funcionalidades de orientación que pueden depender de servicios externos y configuración adicional.',
  },
];

const faqs = [
  {
    question: '¿VOLIUZ es gratis?',
    answer:
      'Puedes descargar e instalar esta versión de demostración sin pagar. Algunas funciones que dependen de servicios externos pueden requerir configuración adicional.',
  },
  {
    question: '¿Necesito Chrome Web Store?',
    answer:
      'No. Esta versión se instala manualmente desde un archivo ZIP descargado de VOLIUZ.',
  },
  {
    question: '¿Funciona en cualquier tienda?',
    answer:
      'Por ahora la extensión está orientada a páginas compatibles de Mercado Libre Colombia. No se garantiza que funcione en todas las tiendas.',
  },
  {
    question: '¿Funciona en celulares?',
    answer:
      'La versión actual está dirigida a Google Chrome en computadores. No es un APK ni una aplicación Android.',
  },
  {
    question: '¿Los resultados ambientales están certificados?',
    answer:
      'No. Las estimaciones son preliminares y pueden basarse en información incompleta. No constituyen una medición directa ni una certificación ambiental.',
  },
  {
    question: '¿Tengo que instalarla cada vez que use Chrome?',
    answer:
      'No. Normalmente solo necesitas cargarla una vez. Para actualizarla manualmente puede ser necesario reemplazar sus archivos y recargarla desde la página de extensiones.',
  },
];

export default function ExtensionClient() {
  const [installationStep, setInstallationStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const copyChromeAddress = async () => {
    try {
      await navigator.clipboard.writeText('chrome://extensions/');
      setCopied(true);
    } catch {
      window.prompt(
        'Copia esta dirección y pégala en Chrome:',
        'chrome://extensions/',
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#0C1117] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#B8F000]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[#4C9ED4]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B8F000]/25 bg-[#B8F000]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#B8F000]">
            VOLIUZ EXTENSION · PARA PC
            </div>

            <h1 className="mt-7 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Descubre el impacto ambiental{' '}
              <span className="text-[#B8F000]">
                mientras compras.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#A4B0BA]">
              Lleva VOLIUZ a tu navegador y consulta información
              ambiental de productos compatibles sin abandonar
              la tienda donde estás navegando.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={DOWNLOAD_URL}
                download="VOLIUZ-extension-publica-1.3.0.zip"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#B8F000] px-7 py-4 font-bold text-[#0C1117] transition hover:-translate-y-0.5 hover:bg-[#D2FF4A]"
              >
                <span aria-hidden="true" className="text-xl">
                  ↓
                </span>
                Descargar VOLIUZ para PC
              </a>

              <a
                href="#instalacion"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-semibold transition hover:border-[#4C9ED4] hover:text-[#4C9ED4]"
              >
                Cómo instalarla
              </a>
            </div>

            <p className="mt-5 text-sm text-[#A4B0BA]">
              Google Chrome de escritorio · Instalación manual ·
              Versión 1.3.0
            </p>
          </div>

          {/* CAPTURA REAL */}
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#141C24] shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 p-5">
              <div>
                <h2 className="font-display text-lg font-semibold">
                  VOLIUZ en acción
                </h2>
                <p className="mt-1 text-xs text-[#A4B0BA]">
                  Captura real en Mercado Libre Colombia
                </p>
              </div>

              <span className="rounded-full bg-[#B8F000]/10 px-3 py-1 text-xs font-semibold text-[#B8F000]">
                v1.3.0
              </span>
            </div>

            <a
            href="/images/extension/ExtensionIMG.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver captura completa de VOLIUZ Extension"
            className="block"
            >
            <Image
                src="/images/extension/ExtensionIMG.jpeg"
                alt="Extensión VOLIUZ analizando unos tenis en Mercado Libre Colombia"
                width={1600}
                height={806}
                unoptimized
                className="h-auto w-full transition duration-300 hover:scale-[1.02]"
            />
            </a>

            <p className="px-5 py-4 text-xs leading-6 text-[#A4B0BA]">
              Vista real del prototipo. Las estimaciones son
              preliminares y no representan certificaciones
              ambientales.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section
        id="funcionalidades"
        className="scroll-mt-24 bg-[#101820] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B8F000]">
            01 / Funcionalidades
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
            Tu asistente para un consumo más consciente.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#A4B0BA]">
            VOLIUZ busca acercar información ambiental al
            momento de explorar un producto, con indicadores
            comprensibles y advertencias sobre los datos disponibles.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-white/10 bg-[#141C24] p-7 transition hover:-translate-y-1 hover:border-[#B8F000]/30"
              >
                <span className="text-sm font-bold text-[#B8F000]">
                  {feature.number}
                </span>

                <h3 className="mt-8 font-display text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#A4B0BA]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALACIÓN INTERACTIVA */}
      <section
        id="instalacion"
        className="scroll-mt-24 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B8F000]">
            02 / Instalación
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
            Instala VOLIUZ en tres pasos.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#A4B0BA]">
            Sigue nuestra guía interactiva para instalar la
            extensión en Google Chrome desde tu computador.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
            {/* NAVEGACIÓN DE PASOS */}
            <div className="space-y-3">
              {[
                'Descarga VOLIUZ',
                'Prepara Chrome',
                'Activa la extensión',
              ].map((title, index) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setInstallationStep(index)}
                  aria-current={
                    installationStep === index ? 'step' : undefined
                  }
                  className={`flex w-full items-center gap-4 rounded-xl border p-5 text-left transition ${
                    installationStep === index
                      ? 'border-[#B8F000] bg-[#B8F000]/10'
                      : 'border-white/10 bg-[#141C24] hover:border-white/30'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${
                      installationStep === index
                        ? 'bg-[#B8F000] text-[#0C1117]'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span className="font-semibold">{title}</span>
                </button>
              ))}
            </div>

            {/* CONTENIDO DE PASOS */}
            <div className="rounded-3xl border border-white/10 bg-[#141C24] p-7 sm:p-10">
              <p className="text-sm font-semibold text-[#B8F000]">
                PASO {installationStep + 1} DE 3
              </p>

              {installationStep === 0 && (
                <div className="mt-6">
                  <h3 className="font-display text-2xl font-semibold">
                    Descarga y descomprime VOLIUZ
                  </h3>

                  <p className="mt-4 leading-7 text-[#A4B0BA]">
                    Descarga el archivo ZIP. Cuando termine,
                    haz clic derecho sobre él y selecciona
                    «Extraer todo».
                  </p>

                  <p className="mt-4 leading-7 text-[#A4B0BA]">
                    Conserva la carpeta extraída en un lugar
                    donde no la vayas a borrar, ya que Chrome
                    necesita acceder a sus archivos.
                  </p>

                  <a
                    href={DOWNLOAD_URL}
                    download="VOLIUZ-extension-publica-1.3.0.zip"
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#B8F000] px-6 py-4 font-bold text-[#0C1117] transition hover:bg-[#D2FF4A]"
                  >
                    <span aria-hidden="true">↓</span>
                    Descargar VOLIUZ para PC
                  </a>
                </div>
              )}

              {installationStep === 1 && (
                <div className="mt-6">
                  <h3 className="font-display text-2xl font-semibold">
                    Prepara Google Chrome
                  </h3>

                  <p className="mt-4 leading-7 text-[#A4B0BA]">
                    Abre una pestaña de Chrome, pega la
                    siguiente dirección en la barra superior
                    y presiona Enter.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-[#0C1117] p-4">
                    <code className="min-w-0 flex-1 break-all text-sm text-[#B8F000]">
                      chrome://extensions/
                    </code>

                    <button
                      type="button"
                      onClick={copyChromeAddress}
                      className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
                    >
                      {copied ? 'Copiado ✓' : 'Copiar'}
                    </button>
                  </div>

                  <p className="mt-6 leading-7 text-[#A4B0BA]">
                    En la página de extensiones, activa
                    «Modo de desarrollador», normalmente
                    ubicado en la esquina superior derecha.
                  </p>
                </div>
              )}

              {installationStep === 2 && (
                <div className="mt-6">
                  <h3 className="font-display text-2xl font-semibold">
                    Activa VOLIUZ en Chrome
                  </h3>

                  <p className="mt-4 leading-7 text-[#A4B0BA]">
                    En la página de extensiones, pulsa
                    «Cargar descomprimida».
                  </p>

                  <p className="mt-4 leading-7 text-[#A4B0BA]">
                    Selecciona la carpeta de VOLIUZ que
                    contiene el archivo manifest.json.
                    No selecciones el ZIP sin descomprimir.
                  </p>

                  <p className="mt-4 leading-7 text-[#A4B0BA]">
                    Cuando aparezca la extensión, abre
                    el menú de extensiones de Chrome y
                    fija VOLIUZ en la barra del navegador.
                  </p>

                  <div className="mt-7 rounded-xl border border-[#B8F000]/25 bg-[#B8F000]/10 p-5">
                    <p className="font-semibold text-[#B8F000]">
                      ¡Instalación completada!
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#D6E8B2]">
                      Visita una página de producto compatible
                      de Mercado Libre Colombia para comenzar
                      a explorar VOLIUZ.
                    </p>
                  </div>
                </div>
              )}

              {/* NAVEGACIÓN INFERIOR */}
              <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                <button
                  type="button"
                  disabled={installationStep === 0}
                  onClick={() =>
                    setInstallationStep((step) =>
                      Math.max(0, step - 1),
                    )
                  }
                  className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white/40 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← Anterior
                </button>

                {installationStep < 2 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setInstallationStep((step) =>
                        Math.min(2, step + 1),
                      )
                    }
                    className="rounded-xl bg-[#B8F000] px-5 py-3 text-sm font-semibold text-[#0C1117] transition hover:bg-[#D2FF4A]"
                  >
                    Siguiente →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setInstallationStep(0)}
                    className="rounded-xl border border-[#B8F000] px-5 py-3 text-sm font-semibold text-[#B8F000]"
                  >
                    Repetir guía
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#4C9ED4]/25 bg-[#4C9ED4]/10 p-6">
            <h3 className="font-semibold text-[#B6DCF5]">
              Antes de instalar
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#B6DCF5]">
              Esta versión se distribuye para instalación
              manual en Chrome de escritorio. Instala
              únicamente archivos de fuentes confiables.
              Las funciones de IA pueden necesitar
              configuración adicional y la instalación
              no garantiza que todos los análisis estén
              disponibles.
            </p>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-[#101820] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B8F000]">
            03 / Preguntas frecuentes
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
            Todo lo que necesitas saber.
          </h2>

          <p className="mt-5 leading-7 text-[#A4B0BA]">
            Resolvemos las dudas más comunes sobre la
            instalación y el funcionamiento de VOLIUZ.
          </p>

          <div className="mt-10 space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#141C24]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold"
                  >
                    <span>{item.question}</span>

                    <span className="text-2xl text-[#B8F000]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-[#A4B0BA]">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Empieza a explorar con VOLIUZ.
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-[#A4B0BA]">
              Descarga la extensión, sigue la guía de
              instalación y descubre una nueva forma
              de consultar información ambiental.
            </p>
          </div>

          <a
            href={DOWNLOAD_URL}
            download="VOLIUZ-extension-publica-1.3.0.zip"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#B8F000] px-7 py-4 font-bold text-[#0C1117] transition hover:bg-[#D2FF4A]"
          >
            <span aria-hidden="true">↓</span>
            Descargar VOLIUZ para PC
          </a>
        </div>
      </section>
    </main>
  );
}
