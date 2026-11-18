
'use client';

import { useState } from 'react';

type BusinessData = {
  brand: string;
  representative: string;
  document: string;
  email: string;
  phone: string;
  municipality: string;
  website: string;
  category: string;
};

type ProductData = {
  name: string;
  description: string;
  materials: string;
  environmentalLevel: string;
};

const initialBusiness: BusinessData = {
  brand: '',
  representative: '',
  document: '',
  email: '',
  phone: '',
  municipality: '',
  website: '',
  category: '',
};

const initialProduct: ProductData = {
  name: '',
  description: '',
  materials: '',
  environmentalLevel: 'declarado',
};

const municipalities = [
  'Cali',
  'Yumbo',
  'Palmira',
  'Jamundí',
  'Tuluá',
  'Buga',
  'Cartago',
  'Buenaventura',
  'Candelaria',
  'La Cumbre',
];

const categories = [
  'Agroindustria y alimentos',
  'Moda y textiles circulares',
  'Empaques sostenibles',
  'Tecnología y economía circular',
  'Cosmética y aseo sostenible',
  'Artesanías y productos locales',
  'Construcción sostenible',
  'Otra categoría',
];

const inputClass =
  'w-full rounded-xl border border-white/10 bg-[#0c1117] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-[#b8f000] focus:ring-1 focus:ring-[#b8f000]/30';

const labelClass = 'mb-2 block text-sm font-medium text-gray-300';

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#b8f000]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default function PymesClient() {
  const [activeTab, setActiveTab] = useState<'registro' | 'acceso'>('registro');
  const [step, setStep] = useState(1);
  const [business, setBusiness] = useState(initialBusiness);
  const [product, setProduct] = useState(initialProduct);
  const [consent, setConsent] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const updateBusiness = (field: keyof BusinessData, value: string) => {
    setBusiness((prev) => ({ ...prev, [field]: value }));
  };

  const updateProduct = (field: keyof ProductData, value: string) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  };

  const goToForm = () => {
    setActiveTab('registro');
    document.getElementById('registro-pyme')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const nextStep = () => {
    const form = document.getElementById('form-pyme') as HTMLFormElement | null;

    if (!form?.reportValidity()) return;

    setStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const submitDemo = () => {
    if (!consent) return;
    setCompleted(true);
  };

  return (
    <main className="min-h-screen bg-[#0c1117] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#b8f000]/10 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#4c9ed4]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-28 md:px-10 lg:grid-cols-2 lg:items-center lg:pb-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b8f000]/20 bg-[#b8f000]/5 px-4 py-2 text-xs text-[#b8f000]">
              <span className="h-2 w-2 rounded-full bg-[#b8f000]" />
              Ecosistema de negocios sostenibles
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              Haz visible el valor de tu negocio
              <span className="text-[#b8f000]"> sostenible.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
              VOLIUZ conecta negocios que buscan transformar su manera de producir
              con personas que quieren consumir de manera más consciente.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={goToForm}
                className="rounded-xl bg-[#b8f000] px-6 py-3.5 font-semibold text-[#0c1117] transition hover:bg-[#d0ff36]"
              >
                Vincular mi negocio →
              </button>

              <button
                onClick={() => {
                  setActiveTab('acceso');
                  document.getElementById('registro-pyme')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="rounded-xl border border-white/10 px-6 py-3.5 text-gray-300 transition hover:border-white/30 hover:text-white"
              >
                Ya estoy registrado
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
              <span>↗ Visibilidad digital</span>
              <span>↗ Información ambiental</span>
              <span>↗ Consumo responsable</span>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-[#141c24] p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    VOLIUZ · ECOSISTEMA
                  </p>
                  <h2 className="mt-2 text-lg font-medium">
                    Perfil de negocio
                  </h2>
                </div>
                <div className="rounded-xl bg-[#b8f000]/10 p-3 text-[#b8f000]">
                  <span className="text-2xl">↗</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#1b2630] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b8f000] text-2xl font-bold text-[#0c1117]">
                    V
                  </div>
                  <div>
                    <p className="font-semibold">Tu negocio</p>
                    <p className="mt-1 text-sm text-gray-400">
                      Perfil sostenible
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    ['Identidad del negocio', 'Información'],
                    ['Productos y materiales', 'Catálogo'],
                    ['Atributos ambientales', 'Transparencia'],
                  ].map(([title, subtitle]) => (
                    <div
                      key={title}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0c1117] p-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-200">
                          {title}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
                      </div>
                      <span className="text-[#b8f000]">↗</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#1b2630] p-4">
                  <p className="text-xs text-gray-500">Conexión</p>
                  <p className="mt-2 font-semibold text-[#b8f000]">
                    Consumidores
                  </p>
                </div>
                <div className="rounded-xl bg-[#1b2630] p-4">
                  <p className="text-xs text-gray-500">Enfoque</p>
                  <p className="mt-2 font-semibold text-[#4c9ed4]">
                    Sostenibilidad
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-[#b8f000]/20 bg-[#141c24] px-5 py-4 shadow-2xl sm:block">
              <p className="text-xs text-gray-500">Una nueva forma de conectar</p>
              <p className="mt-1 font-semibold text-[#b8f000]">
                Negocios + Impacto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4c9ed4]">
            ¿Por qué VOLIUZ?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Más que visibilidad.
            <br />
            <span className="text-gray-500">Una oportunidad para avanzar.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: '01',
              title: 'Visibilidad',
              description:
                'Presenta tu marca y tus productos en un ecosistema enfocado en consumo consciente.',
              color: '#b8f000',
            },
            {
              number: '02',
              title: 'Transparencia',
              description:
                'Comunica los materiales, procesos y atributos ambientales de tus productos.',
              color: '#4c9ed4',
            },
            {
              number: '03',
              title: 'Conexión',
              description:
                'Acércate a consumidores que buscan alternativas más responsables.',
              color: '#b8f000',
            },
            {
              number: '04',
              title: 'Identidad',
              description:
                'Construye una presencia digital que refleje el valor de tu propuesta.',
              color: '#4c9ed4',
            },
          ].map((benefit) => (
            <article
              key={benefit.number}
              className="rounded-2xl border border-white/10 bg-[#141c24] p-6 transition hover:-translate-y-1 hover:border-white/20"
            >
              <span
                className="text-sm font-medium"
                style={{ color: benefit.color }}
              >
                {benefit.number}
              </span>
              <h3 className="mt-7 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

  {/* HOW IT WORKS */}
  <section className="border-y border-white/5 bg-[#10171e]">
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <SectionHeading
        eyebrow="Proceso de vinculación"
        title="Tres pasos para comenzar."
        description="Un proceso inicial pensado para que tu negocio pueda presentar su información y comenzar a construir su perfil dentro de VOLIUZ."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            number: '01',
            title: 'Registra tu negocio',
            description:
              'Completa la información básica de tu marca, contacto, ubicación y actividad productiva.',
          },
          {
            number: '02',
            title: 'Presenta tu producto',
            description:
              'Describe tu producto, materiales y atributos de sostenibilidad.',
          },
          {
            number: '03',
            title: 'Construye tu perfil',
            description:
              'Organiza la información que permitirá presentar tu propuesta a consumidores conscientes.',
          },
        ].map((item, index) => (
          <div key={item.number} className="relative">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#b8f000]/20 bg-[#b8f000]/5 font-semibold text-[#b8f000]">
              {item.number}
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-400">
              {item.description}
            </p>
            {index !== 2 && (
              <div className="absolute right-0 top-6 hidden h-px w-1/3 bg-white/10 lg:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>

      {/* REGISTRATION PORTAL */}
      <section id="registro-pyme" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b8f000]">
              Portal de vinculación
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Comienza a construir tu perfil.
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Registra tu negocio y presenta uno de tus productos. Este formulario
              es una demostración del proceso de vinculación de VOLIUZ.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-white/10 bg-[#141c24] p-4">
                <p className="text-sm font-medium text-white">
                  ¿Qué necesitas?
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Información de tu negocio, contacto y detalles de un producto.
                </p>
              </div>

              <div className="rounded-xl border border-[#4c9ed4]/20 bg-[#4c9ed4]/5 p-4">
                <p className="text-sm font-medium text-[#4c9ed4]">
                  Información ambiental
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Podrás indicar si tus atributos ambientales son declarados,
                  cuentan con estimaciones o disponen de soportes.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#141c24]">
            {/* Tabs */}
            <div className="grid grid-cols-2 border-b border-white/10 p-2">
              <button
                onClick={() => {
                  setActiveTab('registro');
                  setCompleted(false);
                }}
                className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                  activeTab === 'registro'
                    ? 'bg-[#b8f000] text-[#0c1117]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                Crear registro
              </button>

              <button
                onClick={() => {
                  setActiveTab('acceso');
                  setLoginMessage('');
                }}
                className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                  activeTab === 'acceso'
                    ? 'bg-[#4c9ed4] text-[#0c1117]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                Ya registrado
              </button>
            </div>

            <div className="p-5 md:p-8">
              {activeTab === 'acceso' ? (
                <div>
                  <SectionHeading
                    eyebrow="Portal de negocios"
                    title="Accede a tu cuenta."
                    description="Interfaz de acceso demostrativa. La autenticación aún no está conectada."
                  />

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setLoginMessage(
                        'Demostración: el sistema de autenticación aún no está conectado.',
                      );
                    }}
                    className="space-y-5"
                  >
                    <div>
                      <label className={labelClass}>Correo electrónico</label>
                      <input
                        className={inputClass}
                        type="email"
                        placeholder="negocio@correo.com"
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Contraseña</label>
                      <input
                        className={inputClass}
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#4c9ed4] py-3 font-semibold text-[#0c1117] transition hover:bg-[#73b8e8]"
                    >
                      Ingresar
                    </button>

                    {loginMessage && (
                      <p
                        role="status"
                        className="rounded-xl border border-[#4c9ed4]/20 bg-[#4c9ed4]/5 p-4 text-sm leading-6 text-[#4c9ed4]"
                      >
                        {loginMessage}
                      </p>
                    )}
                  </form>
                </div>
              ) : completed ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#b8f000]/10 text-3xl text-[#b8f000]">
                    ✓
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#b8f000]">
                    Registro de demostración completado
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    ¡Gracias, {business.brand}!
                  </h3>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-400">
                    Hemos recorrido el flujo de registro de VOLIUZ. Esta
                    demostración no transmite ni almacena tus datos.
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#0c1117] p-5 text-left">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Resumen de tu demostración
                    </p>
                    <p className="mt-3 text-sm text-white">
                      <strong>Negocio:</strong> {business.brand}
                    </p>
                    <p className="mt-2 text-sm text-white">
                      <strong>Municipio:</strong> {business.municipality}
                    </p>
                    <p className="mt-2 text-sm text-white">
                      <strong>Producto:</strong> {product.name}
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                      <strong>Nivel ambiental:</strong>{' '}
                      {product.environmentalLevel}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setBusiness(initialBusiness);
                      setProduct(initialProduct);
                      setConsent(false);
                      setStep(1);
                      setCompleted(false);
                      setActiveTab('registro');
                    }}
                    className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white/5"
                  >
                    Realizar otra demostración
                  </button>
                </div>
              ) : (
                <>
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Paso {step} de 3</span>
                      <span>{Math.round((step / 3) * 100)}%</span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#b8f000] transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {['Negocio', 'Producto', 'Confirmación'].map(
                        (title, index) => (
                          <div
                            key={title}
                            className={`text-center text-xs ${
                              step === index + 1
                                ? 'font-semibold text-[#b8f000]'
                                : step > index + 1
                                  ? 'text-white'
                                  : 'text-gray-600'
                            }`}
                          >
                            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
                              {step > index + 1 ? '✓' : index + 1}
                            </div>
                            {title}
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <form id="form-pyme" onSubmit={(e) => e.preventDefault()}>
                    {/* STEP 1 */}
                    {step === 1 && (
                      <div className="space-y-5">
                        <SectionHeading
                          eyebrow="Paso 1 · Negocio"
                          title="Cuéntanos sobre tu marca."
                          description="Información básica para identificar tu emprendimiento."
                        />

                        <div>
                          <label className={labelClass}>Nombre comercial *</label>
                          <input
                            className={inputClass}
                            value={business.brand}
                            onChange={(e) =>
                              updateBusiness('brand', e.target.value)
                            }
                            placeholder="Ej. BioEmpaques del Valle"
                            required
                          />
                        </div>

                        <div>
                          <label className={labelClass}>
                            Representante o titular *
                          </label>
                          <input
                            className={inputClass}
                            value={business.representative}
                            onChange={(e) =>
                              updateBusiness('representative', e.target.value)
                            }
                            placeholder="Nombre completo"
                            required
                          />
                        </div>

                        <div>
                          <label className={labelClass}>NIT o documento *</label>
                          <input
                            className={inputClass}
                            value={business.document}
                            onChange={(e) =>
                              updateBusiness('document', e.target.value)
                            }
                            placeholder="Número de identificación"
                            required
                          />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className={labelClass}>Correo *</label>
                            <input
                              className={inputClass}
                              type="email"
                              value={business.email}
                              onChange={(e) =>
                                updateBusiness('email', e.target.value)
                              }
                              placeholder="contacto@marca.co"
                              required
                            />
                          </div>

                          <div>
                            <label className={labelClass}>Teléfono *</label>
                            <input
                              className={inputClass}
                              type="tel"
                              value={business.phone}
                              onChange={(e) =>
                                updateBusiness('phone', e.target.value)
                              }
                              placeholder="+57 300 000 0000"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Municipio *</label>
                          <select
                            className={inputClass}
                            value={business.municipality}
                            onChange={(e) =>
                              updateBusiness('municipality', e.target.value)
                            }
                            required
                          >
                            <option value="">Selecciona un municipio</option>
                            {municipalities.map((municipality) => (
                              <option key={municipality} value={municipality}>
                                {municipality}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className={labelClass}>
                            Sitio web o red social
                          </label>
                          <input
                            className={inputClass}
                            value={business.website}
                            onChange={(e) =>
                              updateBusiness('website', e.target.value)
                            }
                            placeholder="https://..."
                          />
                        </div>

                        <div>
                          <label className={labelClass}>
                            Categoría principal *
                          </label>
                          <select
                            className={inputClass}
                            value={business.category}
                            onChange={(e) =>
                              updateBusiness('category', e.target.value)
                            }
                            required
                          >
                            <option value="">Selecciona una categoría</option>
                            {categories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                      <div className="space-y-5">
                        <SectionHeading
                          eyebrow="Paso 2 · Producto"
                          title="Presenta tu producto."
                          description="Cuéntanos qué ofreces y qué características lo hacen diferente."
                        />

                        <div>
                          <label className={labelClass}>Nombre del producto *</label>
                          <input
                            className={inputClass}
                            value={product.name}
                            onChange={(e) =>
                              updateProduct('name', e.target.value)
                            }
                            placeholder="Nombre o referencia"
                            required
                          />
                        </div>

                        <div>
                          <label className={labelClass}>
                            Descripción del producto *
                          </label>
                          <textarea
                            className={`${inputClass} min-h-28 resize-y`}
                            value={product.description}
                            onChange={(e) =>
                              updateProduct('description', e.target.value)
                            }
                            placeholder="Describe tu producto, su uso y propuesta de valor..."
                            required
                            minLength={15}
                          />
                        </div>

                        <div>
                          <label className={labelClass}>
                            Materiales o ingredientes
                          </label>
                          <textarea
                            className={`${inputClass} min-h-24 resize-y`}
                            value={product.materials}
                            onChange={(e) =>
                              updateProduct('materials', e.target.value)
                            }
                            placeholder="¿De qué está hecho? ¿Utiliza materiales reciclados, locales o renovables?"
                          />
                        </div>

                        <div>
                          <label className={labelClass}>
                            Estado de la información ambiental *
                          </label>
                          <div className="space-y-3">
                            {[
                              {
                                value: 'declarado',
                                title: 'Atributos declarados',
                                text: 'Información reportada por mi negocio.',
                              },
                              {
                                value: 'estimado',
                                title: 'Estimaciones disponibles',
                                text: 'Tenemos cálculos o aproximaciones internas.',
                              },
                              {
                                value: 'soportes',
                                title: 'Documentación de soporte',
                                text: 'Contamos con documentos, estudios o evidencias.',
                              },
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition ${
                                  product.environmentalLevel === option.value
                                    ? 'border-[#b8f000]/50 bg-[#b8f000]/5'
                                    : 'border-white/10 hover:border-white/20'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="environmentalLevel"
                                  value={option.value}
                                  checked={
                                    product.environmentalLevel === option.value
                                  }
                                  onChange={(e) =>
                                    updateProduct(
                                      'environmentalLevel',
                                      e.target.value,
                                    )
                                  }
                                  className="mt-1 accent-[#b8f000]"
                                />
                                <span>
                                  <span className="block text-sm font-medium text-white">
                                    {option.title}
                                  </span>
                                  <span className="mt-1 block text-xs leading-5 text-gray-400">
                                    {option.text}
                                  </span>
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                      <div className="space-y-5">
                        <SectionHeading
                          eyebrow="Paso 3 · Confirmación"
                          title="Revisa tu información."
                          description="Verifica los datos antes de finalizar esta demostración."
                        />

                        <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0c1117] p-5">
                          <div>
                            <p className="text-xs text-gray-500">NEGOCIO</p>
                            <p className="mt-1 font-medium">{business.brand}</p>
                            <p className="text-sm text-gray-400">
                              {business.representative}
                            </p>
                          </div>

                          <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-gray-500">CONTACTO</p>
                            <p className="mt-1 text-sm">{business.email}</p>
                            <p className="text-sm text-gray-400">
                              {business.phone}
                            </p>
                            <p className="text-sm text-gray-400">
                              {business.municipality}
                            </p>
                          </div>

                          <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-gray-500">PRODUCTO</p>
                            <p className="mt-1 font-medium">{product.name}</p>
                            <p className="mt-2 text-sm leading-6 text-gray-400">
                              {product.description}
                            </p>
                            {product.materials && (
                              <p className="mt-2 text-sm text-gray-400">
                                Materiales: {product.materials}
                              </p>
                            )}
                          </div>

                          <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-gray-500">
                              INFORMACIÓN AMBIENTAL
                            </p>
                            <p className="mt-1 text-sm">
                              {product.environmentalLevel === 'declarado'
                                ? 'Atributos declarados'
                                : product.environmentalLevel === 'estimado'
                                  ? 'Estimaciones disponibles'
                                  : 'Documentación de soporte'}
                            </p>
                          </div>
                        </div>

                        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-1 accent-[#b8f000]"
                          />
                          <span className="text-xs leading-6 text-gray-400">
                            Confirmo que la información ingresada corresponde a
                            esta demostración y autorizo su utilización
                            únicamente para visualizar el flujo de registro de
                            VOLIUZ. No se realizará almacenamiento ni envío de
                            datos.
                          </span>
                        </label>
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={previousStep}
                          className="rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5"
                        >
                          ← Regresar
                        </button>
                      ) : (
                        <span />
                      )}

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="rounded-xl bg-[#b8f000] px-6 py-3 font-semibold text-[#0c1117] transition hover:bg-[#d0ff36]"
                        >
                          Continuar →
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={submitDemo}
                          disabled={!consent}
                          className="rounded-xl bg-[#b8f000] px-6 py-3 font-semibold text-[#0c1117] transition hover:bg-[#d0ff36] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Finalizar demostración
                        </button>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DECLARED VS VERIFIED */}
      <section className="border-y border-white/5 bg-[#10171e]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading
            eyebrow="Transparencia ambiental"
            title="Declarar no es lo mismo que verificar."
            description="La claridad sobre el origen y el respaldo de la información es fundamental para comunicar atributos ambientales de manera responsable."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#141c24] p-7">
              <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                Nivel 01 · Declarado
              </span>
              <h3 className="mt-5 text-2xl font-semibold">
                Información reportada
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Atributos, materiales o prácticas comunicados por el propio
                negocio, que no necesariamente han sido verificados por terceros.
              </p>
              <div className="mt-6 rounded-xl bg-[#0c1117] p-4 text-sm text-gray-400">
                <span className="text-gray-300">Distintivo conceptual:</span>{' '}
                Atributo declarado
              </div>
            </div>

            <div className="rounded-2xl border border-[#b8f000]/20 bg-[#b8f000]/5 p-7">
              <span className="rounded-full bg-[#b8f000]/10 px-3 py-1.5 text-xs text-[#b8f000]">
                Nivel 02 · Verificable
              </span>
              <h3 className="mt-5 text-2xl font-semibold">
                Información respaldada
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Atributos que cuentan con evidencias, documentos, ensayos o
                procesos de evaluación que permiten respaldar su alcance.
              </p>
              <div className="mt-6 rounded-xl bg-[#0c1117] p-4 text-sm text-gray-400">
                <span className="text-[#b8f000]">Distintivo conceptual:</span>{' '}
                Información con soporte
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-gray-500">
            Estos niveles representan un modelo conceptual de transparencia para
            VOLIUZ. No constituyen certificaciones vigentes ni implican que la
            plataforma haya realizado verificaciones ambientales.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#b8f000] p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0c1117]/60">
              VOLIUZ · Valle del Cauca
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0c1117] md:text-5xl">
              El futuro del consumo también comienza con quienes producen.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#0c1117]/70">
              Da el primer paso para presentar tu negocio y hacer visible el valor
              de tus productos.
            </p>
            <button
              onClick={goToForm}
              className="mt-8 rounded-xl bg-[#0c1117] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1b2630]"
            >
              Comenzar registro →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
