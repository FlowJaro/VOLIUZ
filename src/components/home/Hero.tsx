
export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#0C1117] px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative z-10">
          <span className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#B8F000]">
            <span className="h-2 w-2 rounded-full bg-[#B8F000]" />
            Tecnología para un futuro sostenible
          </span>

          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            Cada decisión de consumo
            <span className="text-[#B8F000]"> transforma </span>
            nuestro planeta.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#A4B0BA] md:text-lg">
            Descubre el impacto ambiental de los productos, compara
            alternativas responsables y conecta con negocios que están
            construyendo un futuro diferente.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/directorio"
              className="rounded-full bg-[#B8F000] px-7 py-4 text-sm font-semibold text-[#0C1117] transition hover:bg-white"
            >
              Explorar directorio
            </a>

            <a
              href="/transparencia"
              className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#B8F000] hover:text-[#B8F000]"
            >
              Conocer VOLIUZ
            </a>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-semibold text-[#B8F000]">CO₂e</p>
              <p className="mt-2 text-sm text-[#A4B0BA]">
                Transparencia de impacto
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#4C9ED4]">
                Local
              </p>
              <p className="mt-2 text-sm text-[#A4B0BA]">
                Ecosistema sostenible
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[40px] bg-[#4C9ED4]/10 blur-3xl" />

          <div className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1E3A5F] via-[#142a3a] to-[#0C1117] p-8">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#B8F000]/20" />
            <div className="absolute -right-4 -top-4 h-48 w-48 rounded-full border border-[#4C9ED4]/30" />

            <div className="relative flex h-full min-h-[420px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8F000]">
                  VOLIUZ / IMPACTO
                </span>
                <span className="rounded-full border border-[#B8F000]/30 px-3 py-1 text-xs text-[#B8F000]">
                  Ecosistema consciente
                </span>
              </div>

              <div className="relative py-10">
                <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-[#B8F000]/30 bg-[#B8F000]/5 shadow-[0_0_80px_rgba(184,240,0,0.08)]">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[#4C9ED4]/40">
                    <span className="text-6xl font-semibold text-[#B8F000]">
                      V
                    </span>
                  </div>
                </div>

                <div className="absolute left-0 top-12 rounded-2xl border border-white/10 bg-[#0C1117]/80 p-4 backdrop-blur">
                  <p className="text-xs text-[#A4B0BA]">Huella ambiental</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    CO₂e
                  </p>
                </div>

                <div className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-[#0C1117]/80 p-4 backdrop-blur">
                  <p className="text-xs text-[#A4B0BA]">Decisiones</p>
                  <p className="mt-1 text-lg font-semibold text-[#B8F000]">
                    Conscientes
                  </p>
                </div>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[#A4B0BA]">
                La información ambiental es el primer paso para transformar
                nuestra manera de consumir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
