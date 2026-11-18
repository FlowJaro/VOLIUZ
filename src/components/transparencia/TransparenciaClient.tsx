
'use client';

import { useState } from 'react';
import Link from 'next/link';

type CategoryKey = 'textil' | 'cafe' | 'empaque';

type Comparison = {
  label: string;
  conventional: string;
  alternative: string;
  conventionalFootprint: number;
  alternativeFootprint: number;
  unit: string;
  description: string;
};

const comparisons: Record<CategoryKey, Comparison> = {
  textil: {
    label: 'Textiles',
    conventional: 'Camiseta de algodón convencional',
    alternative: 'Camiseta con algodón recuperado',
    conventionalFootprint: 4.6,
    alternativeFootprint: 2.1,
    unit: 'prenda',
    description:
      'Ejemplo de comparación entre una prenda convencional y una alternativa con materiales recuperados.',
  },
  cafe: {
    label: 'Café',
    conventional: 'Café de producción convencional',
    alternative: 'Café con prácticas agroecológicas',
    conventionalFootprint: 3.8,
    alternativeFootprint: 1.25,
    unit: 'unidad de referencia',
    description:
      'Escenario ilustrativo para explorar diferencias entre métodos de producción de café.',
  },
  empaque: {
    label: 'Empaques',
    conventional: 'Empaque de materiales vírgenes',
    alternative: 'Empaque de fibra recuperada',
    conventionalFootprint: 2.9,
    alternativeFootprint: 0.75,
    unit: 'empaque',
    description:
      'Ejemplo de comparación entre materiales convencionales y materiales de origen recuperado.',
  },
};

const process = [
  {
    number: '01',
    title: 'Definir la unidad de comparación',
    description:
      'Establecer qué cantidad, función y características del producto se van a comparar.',
  },
  {
    number: '02',
    title: 'Identificar el ciclo de vida',
    description:
      'Considerar materias primas, fabricación, transporte, uso y disposición final según los datos disponibles.',
  },
  {
    number: '03',
    title: 'Consultar datos y fuentes',
    description:
      'Distinguir información declarada por proveedores, referencias documentales y factores de emisión aplicables.',
  },
  {
    number: '04',
    title: 'Presentar resultados y límites',
    description:
      'Comunicar estimaciones, supuestos, datos faltantes y el grado de confianza que puede atribuirse a cada resultado.',
  },
];

const criteria = [
  {
    title: 'Origen y trazabilidad',
    description:
      'Identificar de dónde proceden los materiales y qué información existe sobre su cadena de suministro.',
  },
  {
    title: 'Materiales utilizados',
    description:
      'Registrar la composición del producto y diferenciar materiales nuevos, reciclados o recuperados.',
  },
  {
    title: 'Impacto ambiental',
    description:
      'Examinar las emisiones estimadas y otros indicadores cuando exista información suficiente.',
  },
  {
    title: 'Evidencia disponible',
    description:
      'Diferenciar afirmaciones comerciales, documentos de respaldo y verificaciones independientes.',
  },
  {
    title: 'Claridad de la información',
    description:
      'Presentar los datos de manera comprensible, con sus fuentes, supuestos y limitaciones.',
  },
];

const questions = [
  {
    question: '¿Los resultados son mediciones reales?',
    answer:
      'La calculadora actual utiliza escenarios ilustrativos para demostrar cómo funcionaría una comparación ambiental. No representa una evaluación certificada de productos específicos.',
  },
  {
    question: '¿Qué significa CO₂e?',
    answer:
      'Significa dióxido de carbono equivalente. Es una unidad que permite expresar el efecto climático de diferentes gases de efecto invernadero mediante una referencia común.',
  },
  {
    question: '¿Un producto reciclado siempre contamina menos?',
    answer:
      'No necesariamente. Su impacto depende de factores como los materiales, la fabricación, el transporte, la durabilidad y el tratamiento al final de su vida útil.',
  },
  {
    question: '¿VOLIUZ certifica productos sostenibles?',
    answer:
      'El prototipo de VOLIUZ busca facilitar la consulta y comparación de información ambiental. La presencia de un producto en la plataforma no constituye por sí sola una certificación independiente.',
  },
  {
    question: '¿Dónde puedo instalar la extensión?',
    answer:
      'Estamos preparando un apartado de descarga e instalación manual de la extensión VOLIUZ. Se integrará en esta misma página cuando el paquete de distribución esté listo y probado.',
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B8F000]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="leading-7 text-[#A4B0BA]">{description}</p>
    </div>
  );
}

export default function TransparenciaClient() {
  const [category, setCategory] = useState<CategoryKey>('textil');
  const [quantity, setQuantity] = useState(1);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const selected = comparisons[category];
  const conventionalTotal = selected.conventionalFootprint * quantity;
  const alternativeTotal = selected.alternativeFootprint * quantity;
  const difference = conventionalTotal - alternativeTotal;
  const reduction =
    conventionalTotal > 0
      ? (difference / conventionalTotal) * 100
      : 0;

  const formatNumber = (value: number) =>
    value.toLocaleString('es-CO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <main className="min-h-screen bg-[#0C1117] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#B8F000]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-52 left-0 h-[450px] w-[450px] rounded-full bg-[#4C9ED4]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B8F000]/30 bg-[#B8F000]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#B8F000]">
              Transparencia ambiental
            </div>

            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Detrás de cada dato ambiental existe una{' '}
              <span className="text-[#B8F000]">metodología.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A4B0BA]">
              En VOLIUZ queremos que las decisiones de consumo se
              basen en información comprensible. Explora cómo
              interpretamos los atributos ambientales, qué podemos
              comparar y qué limitaciones debemos reconocer.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#calculadora"
                className="rounded-xl bg-[#B8F000] px-6 py-3 font-semibold text-[#0C1117] transition hover:bg-[#D2FF4A]"
              >
                Explorar calculadora
              </a>
              <a
                href="#metodologia"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-[#4C9ED4] hover:text-[#4C9ED4]"
              >
                Conocer metodología
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#141C24] p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-sm font-semibold text-white">
                Pasaporte ambiental
              </span>
              <span className="rounded-full bg-[#4C9ED4]/15 px-3 py-1 text-xs text-[#79C5F5]">
                Vista conceptual
              </span>
            </div>

            <div className="py-8">
              <p className="text-xs uppercase tracking-widest text-[#A4B0BA]">
                Información del producto
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Más información.
                <br />
                Mejores decisiones.
              </h3>
            </div>

            <div className="space-y-3">
              {[
                ['Materiales', 'Composición y procedencia'],
                ['Emisiones', 'Estimaciones y supuestos'],
                ['Circularidad', 'Reutilización y reciclaje'],
                ['Evidencia', 'Datos declarados y respaldos'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="font-medium">{label}</span>
                  <span className="text-right text-xs text-[#A4B0BA]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-[#71808D]">
              Representación de los campos que VOLIUZ busca comunicar.
              No corresponde a un producto evaluado.
            </p>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section
        id="metodologia"
        className="scroll-mt-24 bg-[#101820] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="01 / Metodología"
            title="De la información al impacto ambiental"
            description="Una metodología de referencia para organizar datos ambientales y convertirlos en información útil. Su implementación depende de la disponibilidad y calidad de los datos."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-white/10 bg-[#141C24] p-7 transition hover:-translate-y-1 hover:border-[#B8F000]/40"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B8F000]">
                    Fase {item.number}
                  </span>
                  <span className="font-display text-3xl font-semibold text-white/15">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#A4B0BA]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <section
        id="calculadora"
        className="scroll-mt-24 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="02 / Comparación interactiva"
            title="Calculadora comparativa de CO₂e"
            description="Explora cómo cambiarían los resultados de una comparación ambiental al seleccionar una categoría y modificar la cantidad de productos."
          />

          <div className="mt-6 rounded-xl border border-[#4C9ED4]/30 bg-[#4C9ED4]/10 p-4 text-sm leading-6 text-[#B6DCF5]">
            <strong>Simulación educativa:</strong> los factores utilizados
            proceden del prototipo visual original de VOLIUZ. No han sido
            validados aquí como mediciones reales ni deben utilizarse
            para afirmar ahorros ambientales de productos comerciales.
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-[#141C24] p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">
                Configura la comparación
              </h3>

              <p className="mt-2 text-sm text-[#A4B0BA]">
                Selecciona una categoría:
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {(Object.keys(comparisons) as CategoryKey[]).map(
                  (key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCategory(key)}
                      aria-pressed={category === key}
                      className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                        category === key
                          ? 'bg-[#B8F000] text-[#0C1117]'
                          : 'border border-white/10 bg-white/5 text-[#A4B0BA] hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {comparisons[key].label}
                    </button>
                  ),
                )}
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-white/10 bg-[#0C1117] p-5">
                  <p className="text-xs uppercase tracking-wider text-[#A4B0BA]">
                    Escenario convencional
                  </p>
                  <p className="mt-2 font-semibold">
                    {selected.conventional}
                  </p>
                  <p className="mt-2 text-sm text-[#A4B0BA]">
                    {formatNumber(selected.conventionalFootprint)} kg CO₂e
                    por {selected.unit}
                  </p>
                </div>

                <div className="rounded-xl border border-[#B8F000]/25 bg-[#B8F000]/5 p-5">
                  <p className="text-xs uppercase tracking-wider text-[#B8F000]">
                    Escenario alternativo
                  </p>
                  <p className="mt-2 font-semibold">
                    {selected.alternative}
                  </p>
                  <p className="mt-2 text-sm text-[#A4B0BA]">
                    {formatNumber(selected.alternativeFootprint)} kg CO₂e
                    por {selected.unit}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-4">
                  <label
                    htmlFor="comparison-quantity"
                    className="text-sm font-semibold"
                  >
                    Cantidad de unidades
                  </label>
                  <span className="font-display text-xl font-semibold text-[#B8F000]">
                    {quantity}
                  </span>
                </div>

                <input
                  id="comparison-quantity"
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={quantity}
                  onChange={(event) =>
                    setQuantity(Number(event.target.value))
                  }
                  className="mt-5 w-full accent-[#B8F000]"
                />

                <div className="mt-2 flex justify-between text-xs text-[#71808D]">
                  <span>1 unidad</span>
                  <span>100 unidades</span>
                </div>
              </div>

              <p className="mt-7 text-sm leading-6 text-[#A4B0BA]">
                {selected.description}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141C24] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">
                  Comparación de emisiones
                </h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#A4B0BA]">
                  kg CO₂e · Ejemplo
                </span>
              </div>

              <div className="mt-12 space-y-9">
                <div>
                  <div className="mb-3 flex justify-between gap-3 text-sm">
                    <span className="text-[#A4B0BA]">
                      Convencional
                    </span>
                    <strong>
                      {formatNumber(conventionalTotal)} kg
                    </strong>
                  </div>
                  <div className="h-5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#4C9ED4] transition-all duration-300"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex justify-between gap-3 text-sm">
                    <span className="text-[#A4B0BA]">
                      Alternativo
                    </span>
                    <strong>
                      {formatNumber(alternativeTotal)} kg
                    </strong>
                  </div>
                  <div className="h-5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#B8F000] transition-all duration-300"
                      style={{
                        width: `${Math.min(
                          100,
                          (alternativeTotal / conventionalTotal) * 100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#0C1117] p-6">
                  <p className="text-sm text-[#A4B0BA]">
                    Diferencia simulada
                  </p>
                  <p className="mt-3 font-display text-3xl font-semibold text-[#B8F000]">
                    {formatNumber(difference)}
                  </p>
                  <p className="mt-1 text-xs text-[#A4B0BA]">
                    kg CO₂e
                  </p>
                </div>

                <div className="rounded-2xl bg-[#0C1117] p-6">
                  <p className="text-sm text-[#A4B0BA]">
                    Reducción simulada
                  </p>
                  <p className="mt-3 font-display text-3xl font-semibold text-[#4C9ED4]">
                    {reduction.toFixed(1)}%
                  </p>
                  <p className="mt-1 text-xs text-[#A4B0BA]">
                    Frente al escenario convencional
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-white/10 p-5">
                <h4 className="font-semibold">
                  ¿Cómo se calcula?
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#A4B0BA]">
                  Emisiones totales = factor ilustrativo por unidad
                  multiplicado por la cantidad seleccionada.
                  La diferencia se obtiene restando las emisiones
                  del escenario alternativo a las del convencional.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setCategory('textil');
                  setQuantity(1);
                }}
                className="mt-6 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-[#B8F000] hover:text-[#B8F000]"
              >
                Restablecer comparación
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CRITERIOS */}
      <section className="bg-[#101820] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="03 / Calidad de información"
            title="Cinco criterios para evaluar la información ambiental"
            description="Estos criterios orientan cómo VOLIUZ busca presentar información útil y evitar conclusiones que no estén respaldadas por datos."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {criteria.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#141C24] p-7"
              >
                <span className="text-sm font-bold text-[#B8F000]">
                  CRITERIO 0{index + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#A4B0BA]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NIVELES DE EVIDENCIA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="04 / Interpretación"
            title="No todos los datos tienen el mismo respaldo"
            description="Es importante distinguir el origen de cada afirmación ambiental antes de utilizarla para tomar decisiones."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                label: 'Dato declarado',
                color: '#4C9ED4',
                description:
                  'Información proporcionada por el fabricante o proveedor, sin que ello implique una verificación independiente.',
              },
              {
                label: 'Dato estimado',
                color: '#B8F000',
                description:
                  'Resultado calculado a partir de supuestos, referencias y factores disponibles. Debe indicar sus limitaciones.',
              },
              {
                label: 'Dato respaldado',
                color: '#FFFFFF',
                description:
                  'Información acompañada de documentación o evidencia consultable. El respaldo documental no equivale automáticamente a certificación.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-[#141C24] p-7"
              >
                <div
                  className="mb-6 h-2 w-14 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <h3 className="font-display text-xl font-semibold">
                  {item.label}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#A4B0BA]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTENSIÓN - RESERVADO */}
      <section className="bg-[#101820] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-3xl border border-[#B8F000]/20 bg-[#141C24] p-8 lg:grid-cols-2 lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B8F000]">
                Próxima integración
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold md:text-4xl">
                Transparencia mientras navegas.
              </h2>
              <p className="mt-5 leading-8 text-[#A4B0BA]">
                La extensión VOLIUZ busca acercar información ambiental
                al momento en que exploras productos en tiendas
                compatibles. Próximamente integraremos aquí su
                descarga y una guía de instalación paso a paso.
              </p>
                <Link
                href="/extension"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#B8F000] px-6 py-4 font-semibold text-[#0C1117] transition hover:bg-[#D2FF4A]"
                >
                Conocer e instalar extensión
                <span aria-hidden="true">↗</span>
                </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0C1117] p-7">
              <p className="text-sm font-semibold text-[#B8F000]">
                Extensión VOLIUZ
              </p>
              <div className="mt-7 space-y-4">
                {[
                  'Consulta de información del producto',
                  'Presentación de atributos ambientales',
                  'Estimaciones sujetas a datos disponibles',
                  'Orientación para decisiones conscientes',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#A4B0BA]"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#B8F000]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="05 / Preguntas frecuentes"
            title="Respuestas claras, decisiones informadas"
            description="Conoce el alcance de las herramientas ambientales y cómo interpretar los resultados."
          />

          <div className="mt-12 space-y-3">
            {questions.map((item, index) => {
              const isOpen = openQuestion === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#141C24]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenQuestion(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-semibold"
                  >
                    <span>{item.question}</span>
                    <span className="text-2xl text-[#B8F000]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-[#A4B0BA]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#101820] px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Descubre productos con más información.
            </h2>
            <p className="mt-3 text-[#A4B0BA]">
              Explora el directorio sostenible de VOLIUZ.
            </p>
          </div>
          <Link
            href="/directorio"
            className="rounded-xl bg-[#B8F000] px-7 py-4 font-semibold text-[#0C1117] transition hover:bg-[#D2FF4A]"
          >
            Explorar directorio
          </Link>
        </div>
      </section>
    </main>
  );
}
