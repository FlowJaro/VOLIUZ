
import Link from 'next/link';

export function EditorialSections() {
  return (
    <section className="bg-[#F4F6F2] px-6 py-24 text-[#0C1117] md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#668600]">
            01 / El propósito
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Consumir mejor comienza por
            <span className="text-[#668600]"> conocer más.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <p className="text-xl leading-relaxed text-[#435047] md:text-2xl">
            Muchas decisiones de consumo se toman sin conocer su impacto.
            VOLIUZ busca acercar la información ambiental a las personas
            y conectar esa información con alternativas responsables.
          </p>

          <div className="grid gap-8 border-t border-[#0C1117]/15 pt-8 sm:grid-cols-2">
            <div>
              <span className="text-sm font-semibold text-[#668600]">
                Para las personas
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Decisiones conscientes
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#647067]">
                Explora alternativas, conoce sus características y compara
                información para elegir con mayor criterio.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-[#668600]">
                Para los negocios
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Visibilidad sostenible
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#647067]">
                Acerca tu negocio a consumidores interesados en productos
                y servicios responsables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImpactIndicators() {
  const indicators = [
    {
      number: '01',
      title: 'Huella ambiental',
      description:
        'Información relacionada con emisiones y CO₂ equivalente.',
    },
    {
      number: '02',
      title: 'Consumo responsable',
      description:
        'Alternativas que permiten comparar características ambientales.',
    },
    {
      number: '03',
      title: 'Economía local',
      description:
        'Visibilidad para negocios y emprendimientos sostenibles.',
    },
  ];

  return (
    <section className="bg-[#0C1117] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8F000]">
            02 / El impacto
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Información que transforma la manera de elegir.
          </h2>
          <p className="mt-6 leading-8 text-[#A4B0BA]">
            Una mirada a las dimensiones que VOLIUZ busca integrar para
            impulsar decisiones de consumo más conscientes.
          </p>
        </div>

        <div className="mt-16 grid border-y border-white/15 md:grid-cols-3 md:divide-x md:divide-white/15">
          {indicators.map((item) => (
            <article key={item.number} className="py-10 md:px-8">
              <span className="font-display text-sm text-[#B8F000]">
                {item.number}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold">
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
  );
}

export function Methodology() {
  const steps = [
    {
      number: '01',
      title: 'Explora',
      description:
        'Descubre productos, alternativas y negocios que forman parte del ecosistema.',
    },
    {
      number: '02',
      title: 'Compara',
      description:
        'Consulta la información disponible y conoce las diferencias entre alternativas.',
    },
    {
      number: '03',
      title: 'Decide',
      description:
        'Utiliza la información para orientar tus decisiones hacia un consumo consciente.',
    },
  ];

  return (
    <section className="bg-[#141C24] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4C9ED4]">
          03 / Cómo funciona
        </span>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            De la información a la acción.
          </h2>
          <p className="max-w-lg leading-8 text-[#A4B0BA] md:justify-self-end">
            VOLIUZ propone un recorrido sencillo para acercar a las personas
            a alternativas de consumo responsable.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="border-t border-white/20 pt-7">
              <span className="font-display text-4xl font-semibold text-[#B8F000]">
                {step.number}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#A4B0BA]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessCTA() {
  return (
    <section className="bg-[#B8F000] px-6 py-20 text-[#0C1117] md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em]">
            VOLIUZ / Para negocios
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Tu negocio también puede ser parte del cambio.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-[#34420D]">
            Conecta tu propuesta sostenible con personas que buscan
            alternativas de consumo responsable.
          </p>
        </div>

        <Link
          href="/pymes"
          className="inline-flex shrink-0 items-center rounded-full bg-[#0C1117] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#1E3A5F]"
        >
          Conocer portal para pymes →
        </Link>
      </div>
    </section>
  );
}
