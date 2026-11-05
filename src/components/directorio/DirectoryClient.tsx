
'use client';

import { useMemo, useState } from 'react';

type Product = {
  id: string;
  name: string;
  business: string;
  location: string;
  category: string;
  price: number;
  image: string;
  description: string;
  materials: string;
};

const products: Product[] = [
  {
    id: 'VLZ-TEX-019',
    name: 'Camiseta Hilo Recuperado Unisex',
    business: 'Telas del Valle Circular',
    location: 'Cali',
    category: 'Textiles y moda',
    price: 58000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    description: 'Prenda elaborada con materiales textiles recuperados.',
    materials: 'Retazos textiles y fibras recuperadas',
  },
  {
    id: 'VLZ-RAEE-044',
    name: 'ThinkPad T480 Reacondicionada',
    business: 'Circuito RAEE Colombia',
    location: 'Yumbo',
    category: 'Tecnología y RAEE',
    price: 1490000,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
    description: 'Equipo tecnológico reacondicionado para extender su vida útil.',
    materials: 'Componentes electrónicos recuperados',
  },
  {
    id: 'VLZ-BIO-082',
    name: 'Zapatillas Urbanas Fibra de Piña',
    business: 'Calzado BioCauca',
    location: 'Palmira',
    category: 'Calzado y biomateriales',
    price: 235000,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    description: 'Calzado de diseño urbano con materiales alternativos.',
    materials: 'Fibra vegetal y caucho',
  },
  {
    id: 'VLZ-PKG-115',
    name: 'Contenedores de Bagazo de Caña x100',
    business: 'BioEmpaques del Sur',
    location: 'Jamundí',
    category: 'Empaques sostenibles',
    price: 46500,
    image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?w=800',
    description: 'Alternativa de empaque fabricada a partir de residuos agrícolas.',
    materials: 'Bagazo de caña de azúcar',
  },
  {
    id: 'VLZ-UPC-059',
    name: 'Morral Urbano Upcycling',
    business: 'Residuo Cero Cali',
    location: 'Cali',
    category: 'Textiles y moda',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    description: 'Morral elaborado mediante aprovechamiento de materiales existentes.',
    materials: 'Lona recuperada y textiles reutilizados',
  },
  {
    id: 'VLZ-RCD-031',
    name: 'Organizador de Escritorio Bio-Hormigón',
    business: 'Taller Barro & RCD',
    location: 'Yumbo',
    category: 'Hábitat y construcción',
    price: 72000,
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800',
    description: 'Objeto funcional para el espacio de trabajo.',
    materials: 'Mezcla de materiales minerales y recuperados',
  },
];

const categories = [
  'Todas',
  'Textiles y moda',
  'Tecnología y RAEE',
  'Calzado y biomateriales',
  'Empaques sostenibles',
  'Hábitat y construcción',
];

const municipalities = ['Todos', 'Cali', 'Yumbo', 'Palmira', 'Jamundí'];

const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(price);

export default function DirectoryClient() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');
  const [municipality, setMunicipality] = useState('Todos');
  const [sort, setSort] = useState('relevance');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selected, setSelected] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesSearch =
        !query ||
        `${product.name} ${product.business} ${product.location} ${product.category}`
          .toLowerCase()
          .includes(query);

      const matchesCategory =
        category === 'Todas' || product.category === category;

      const matchesMunicipality =
        municipality === 'Todos' || product.location === municipality;

      return matchesSearch && matchesCategory && matchesMunicipality;
    });

    if (sort === 'low') result.sort((a, b) => a.price - b.price);
    if (sort === 'high') result.sort((a, b) => b.price - a.price);
    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, category, municipality, sort]);

  const resetFilters = () => {
    setSearch('');
    setCategory('Todas');
    setMunicipality('Todos');
    setSort('relevance');
  };

  return (
    <main className="min-h-screen bg-[#0c1117] text-[#f4f6f2]">
      {/* HERO */}
      <section className="border-b border-white/10 bg-[#101922] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#b8f000]">
            Explora · Compara · Elige
          </p>

          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
                El cambio empieza con lo que{' '}
                <span className="text-[#b8f000]">eliges.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#a4b0ba]">
                Descubre negocios y productos que buscan dar una segunda vida
                a los recursos y promover un consumo más consciente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#141c24] p-6">
              <p className="text-sm text-[#a4b0ba]">Catálogo de demostración</p>
              <p className="mt-2 text-5xl font-semibold text-[#b8f000]">
                {products.length.toString().padStart(2, '0')}
              </p>
              <p className="mt-2 text-sm text-[#a4b0ba]">
                Productos de ejemplo para explorar la experiencia VOLIUZ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORIO Y CONTROLES */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10">

        {/* BUSCADOR */}
        <div className="mb-8">
          <label
            htmlFor="directory-search"
            className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#a4b0ba]"
          >
            Buscar en el directorio
          </label>

          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-[#71808d]">
              ⌕
            </span>
            <input
              id="directory-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Busca productos, negocios o categorías..."
              className="min-h-14 w-full rounded-xl border border-white/10 bg-[#141c24] pl-14 pr-5 text-white outline-none transition placeholder:text-[#71808d] focus:border-[#b8f000]"
              aria-label="Buscar productos"
            />
          </div>
        </div>

        {/* PANEL DE FILTROS */}
        <div className="rounded-2xl border border-white/10 bg-[#101922] p-5 md:p-7">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8f000]">
                Explora el catálogo
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Encuentra lo que necesitas
              </h2>
              <p className="mt-1 text-sm text-[#a4b0ba]">
                Personaliza tu búsqueda utilizando los siguientes controles.
              </p>
            </div>

            <button
              onClick={resetFilters}
              className="self-start rounded-full border border-white/15 px-4 py-2 text-sm text-[#a4b0ba] transition hover:border-[#b8f000] hover:text-[#b8f000] md:self-center"
            >
              ↺ Limpiar filtros
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* CATEGORÍA */}
            <div className="rounded-xl border border-[#b8f000]/20 bg-[#141c24] p-5 transition hover:border-[#b8f000]/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b8f000]/10 text-lg text-[#b8f000]">
                  ◈
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#b8f000]">
                    01 · Categoría
                  </p>
                  <p className="mt-1 text-xs text-[#a4b0ba]">
                    Tipo de producto
                  </p>
                </div>
              </div>

              <label
                htmlFor="category-filter"
                className="mb-2 block text-sm font-medium text-white"
              >
                Filtrar por categoría
              </label>
              <select
                id="category-filter"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="min-h-12 w-full rounded-lg border border-white/10 bg-[#0c1117] px-3 text-sm text-white outline-none transition focus:border-[#b8f000]"
                aria-label="Filtrar por categoría"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item === 'Todas' ? 'Todas las categorías' : item}
                  </option>
                ))}
              </select>
            </div>

            {/* UBICACIÓN */}
            <div className="rounded-xl border border-[#4c9ed4]/20 bg-[#141c24] p-5 transition hover:border-[#4c9ed4]/60">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4c9ed4]/10 text-lg text-[#4c9ed4]">
                  ◎
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4c9ed4]">
                    02 · Ubicación
                  </p>
                  <p className="mt-1 text-xs text-[#a4b0ba]">
                    Municipio del negocio
                  </p>
                </div>
              </div>

              <label
                htmlFor="municipality-filter"
                className="mb-2 block text-sm font-medium text-white"
              >
                Filtrar por ciudad
              </label>
              <select
                id="municipality-filter"
                value={municipality}
                onChange={(event) => setMunicipality(event.target.value)}
                className="min-h-12 w-full rounded-lg border border-white/10 bg-[#0c1117] px-3 text-sm text-white outline-none transition focus:border-[#4c9ed4]"
                aria-label="Filtrar por municipio"
              >
                {municipalities.map((item) => (
                  <option key={item} value={item}>
                    {item === 'Todos' ? 'Todos los municipios' : item}
                  </option>
                ))}
              </select>
            </div>

            {/* ORGANIZACIÓN */}
            <div className="rounded-xl border border-white/15 bg-[#141c24] p-5 transition hover:border-white/40">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-lg text-white">
                  ⇅
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    03 · Organización
                  </p>
                  <p className="mt-1 text-xs text-[#a4b0ba]">
                    Orden de los resultados
                  </p>
                </div>
              </div>

              <label
                htmlFor="sort-filter"
                className="mb-2 block text-sm font-medium text-white"
              >
                Ordenar productos por
              </label>
              <select
                id="sort-filter"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="min-h-12 w-full rounded-lg border border-white/10 bg-[#0c1117] px-3 text-sm text-white outline-none transition focus:border-[#b8f000]"
                aria-label="Ordenar productos"
              >
                <option value="relevance">Relevancia</option>
                <option value="low">Precio: menor a mayor</option>
                <option value="high">Precio: mayor a menor</option>
                <option value="name">Nombre: A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* RESULTADOS Y VISTA */}
        <div className="my-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-[#a4b0ba]">
              Mostrando{' '}
              <span className="font-bold text-white">
                {filteredProducts.length}
              </span>{' '}
              de {products.length} productos
            </p>
            <p className="mt-1 text-xs text-[#71808d]">
              Resultados según tus criterios de búsqueda.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#a4b0ba]">
              Visualización
            </span>

            <div className="flex rounded-lg border border-white/10 bg-[#141c24] p-1">
              <button
                onClick={() => setView('grid')}
                aria-label="Vista de cuadrícula"
                aria-pressed={view === 'grid'}
                className={`rounded-md px-4 py-2 text-sm transition ${
                  view === 'grid'
                    ? 'bg-[#b8f000] font-bold text-[#0c1117]'
                    : 'text-[#a4b0ba] hover:text-white'
                }`}
              >
                ▦ Cuadrícula
              </button>
              <button
                onClick={() => setView('list')}
                aria-label="Vista de lista"
                aria-pressed={view === 'list'}
                className={`rounded-md px-4 py-2 text-sm transition ${
                  view === 'list'
                    ? 'bg-[#b8f000] font-bold text-[#0c1117]'
                    : 'text-[#a4b0ba] hover:text-white'
                }`}
              >
                ☰ Lista
              </button>
            </div>
          </div>
        </div>

        {/* TARJETAS DE PRODUCTOS */}
        {filteredProducts.length > 0 ? (
          <div
            className={
              view === 'grid'
                ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
                : 'flex flex-col gap-4'
            }
          >
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className={`overflow-hidden rounded-2xl border border-white/10 bg-[#141c24] transition duration-300 hover:-translate-y-1 hover:border-[#b8f000]/50 ${
                  view === 'list' ? 'grid md:grid-cols-[240px_1fr]' : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full object-cover ${
                    view === 'grid' ? 'h-60' : 'h-56 md:h-full'
                  }`}
                />

                <div className="flex flex-col p-6">
                  <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#b8f000]">
                    {product.category}
                  </span>

                  <h2 className="text-xl font-semibold leading-snug">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-sm text-[#a4b0ba]">
                    {product.business}
                  </p>

                  <p className="mt-1 text-xs text-[#71808d]">
                    {product.location}, Valle del Cauca
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="text-lg font-semibold">
                      {formatPrice(product.price)}
                    </span>

                    <button
                      onClick={() => setSelected(product)}
                      className="rounded-full bg-[#b8f000] px-4 py-2.5 text-sm font-bold text-[#0c1117] transition hover:bg-[#d0ff26]"
                    >
                      Ver pasaporte
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/20 px-6 py-20 text-center">
            <p className="text-xl font-semibold">
              No encontramos resultados
            </p>
            <p className="mt-2 text-sm text-[#a4b0ba]">
              Prueba con otra búsqueda o modifica los filtros.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 rounded-full bg-[#b8f000] px-6 py-3 font-semibold text-[#0c1117]"
            >
              Ver todos los productos
            </button>
          </div>
        )}

        {/* AVISO DE TRANSPARENCIA */}
        <p className="mt-10 rounded-xl border border-[#4c9ed4]/20 bg-[#4c9ed4]/5 p-4 text-sm leading-6 text-[#a4b0ba]">
          <strong className="text-[#4c9ed4]">
            Nota de transparencia:
          </strong>{' '}
          Este catálogo contiene información de demostración. Los productos,
          negocios y datos descriptivos no representan auditorías,
          certificaciones ni mediciones ambientales verificadas.
        </p>
      </section>

      {/* PASAPORTE DE PRODUCTO */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="passport-title"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#141c24] p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#b8f000]">
                  Pasaporte de producto · Demo
                </p>
                <h2
                  id="passport-title"
                  className="mt-3 text-2xl font-semibold"
                >
                  {selected.name}
                </h2>
              </div>

              <button
                onClick={() => setSelected(null)}
                aria-label="Cerrar pasaporte"
                className="rounded-full border border-white/10 px-3 py-1 text-xl text-[#a4b0ba] hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="mt-7 space-y-5">
              <div className="rounded-xl bg-[#0c1117] p-5">
                <p className="text-xs uppercase tracking-wider text-[#71808d]">
                  Identificador de demostración
                </p>
                <p className="mt-2 font-mono text-lg text-[#b8f000]">
                  {selected.id}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#71808d]">Negocio</p>
                <p className="mt-1 font-medium">{selected.business}</p>
              </div>

              <div>
                <p className="text-sm text-[#71808d]">Ubicación</p>
                <p className="mt-1 font-medium">
                  {selected.location}, Valle del Cauca
                </p>
              </div>

              <div>
                <p className="text-sm text-[#71808d]">Descripción</p>
                <p className="mt-1 leading-7 text-[#a4b0ba]">
                  {selected.description}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#71808d]">
                  Materiales declarados en esta demo
                </p>
                <p className="mt-1 font-medium">{selected.materials}</p>
              </div>

              <div>
                <p className="text-sm text-[#71808d]">
                  Precio de referencia
                </p>
                <p className="mt-1 text-xl font-semibold">
                  {formatPrice(selected.price)}
                </p>
              </div>
            </div>

            <p className="mt-7 rounded-xl border border-[#4c9ed4]/20 bg-[#4c9ed4]/5 p-4 text-sm leading-6 text-[#a4b0ba]">
              Este pasaporte es una demostración de la funcionalidad VOLIUZ.
              La información no constituye una certificación ni una evaluación
              ambiental independiente.
            </p>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full rounded-full bg-[#b8f000] px-6 py-3 font-bold text-[#0c1117] hover:bg-[#d0ff26]"
            >
              Cerrar pasaporte
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
