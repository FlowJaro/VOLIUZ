'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Directorio', href: '/directorio' },
  { label: 'Pymes', href: '/pymes' },
  { label: 'Transparencia', href: '/transparencia' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0C1117]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="VOLIUZ - Inicio"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8F000]/50 bg-[#B8F000]/10 font-display text-xl font-bold text-[#B8F000]">
            V
          </span>

          <span className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-[0.12em] text-white">
              VOLIUZ
            </span>
            <span className="text-[9px] font-medium tracking-[0.2em] text-[#A4B0BA]">
              TECNOLOGÍA SOSTENIBLE
            </span>
          </span>
        </Link>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#A4B0BA] transition-colors hover:text-[#B8F000]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Acción de escritorio */}
        <Link
          href="/directorio"
          className="hidden rounded-full bg-[#B8F000] px-6 py-3 text-sm font-semibold text-[#0C1117] transition-colors hover:bg-white md:inline-flex"
        >
          Explorar
        </Link>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#B8F000] hover:text-[#B8F000] md:hidden"
        >
          <span className="text-xl" aria-hidden="true">
            {isOpen ? '×' : '☰'}
          </span>
        </button>
      </div>

      {/* Navegación móvil */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="border-t border-white/10 bg-[#0C1117] px-6 py-6 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#A4B0BA] transition-colors hover:text-[#B8F000]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/directorio"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[#B8F000] px-6 py-3 text-sm font-semibold text-[#0C1117]"
            >
              Explorar directorio
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
