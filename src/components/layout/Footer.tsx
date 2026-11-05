
import Link from 'next/link';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Directorio', href: '/directorio' },
  { label: 'Pymes', href: '/pymes' },
  { label: 'Transparencia', href: '/transparencia' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0C1117]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B8F000]/50 bg-[#B8F000]/10 font-display text-xl font-bold text-[#B8F000]">
                V
              </span>
              <span>
                <span className="block font-display text-xl font-bold tracking-[0.12em] text-white">
                  VOLIUZ
                </span>
                <span className="block text-[9px] tracking-[0.2em] text-[#A4B0BA]">
                  TECNOLOGÍA SOSTENIBLE
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-[#A4B0BA]">
              Impulsamos decisiones de consumo más conscientes conectando
              personas, información ambiental y negocios sostenibles.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Explora VOLIUZ
            </h3>
            <ul className="mt-6 space-y-4">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A4B0BA] transition-colors hover:text-[#B8F000]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Nuestro propósito
            </h3>
            <p className="mt-6 text-sm leading-7 text-[#A4B0BA]">
              Acercar la información ambiental a las decisiones cotidianas
              y fortalecer el ecosistema de negocios sostenibles.
            </p>
            <Link
              href="/pymes"
              className="mt-5 inline-flex text-sm font-medium text-[#B8F000] hover:text-white"
            >
              Conoce el portal para pymes →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:justify-between">
          <p className="text-xs text-[#71808D]">
            © {new Date().getFullYear()} VOLIUZ. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#71808D]">
            Tecnología para transformar la manera de consumir.
          </p>
        </div>
      </div>
    </footer>
  );
}
