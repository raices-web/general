// Placeholders temporales (Unsplash) hasta contar con fotos reales de Raíces.
// Tamaño recomendado para las fotos reales: cuadradas, 1200x1200px mínimo (ver nota en README de la sección).
const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.1.0',
] as const

const LOOP_IMAGES = [...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES]

function RaicesEnAccion() {
  return (
    <section id="raices-en-accion" className="bg-cream py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-6 text-center sm:px-10 lg:px-16 xl:px-24">
        <span className="text-[13px] font-semibold uppercase tracking-[3px] text-terracota">
          Raíces en Acción
        </span>
        <span className="mt-3 h-px w-8 bg-terracota" />
        <h2 className="mt-6 font-serif text-display-md text-forest">
          Momentos reales de nuestro trabajo
        </h2>
      </div>

      <div className="relative mt-14 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="animate-scroll-raices motion-reduce:animate-none flex w-max gap-6 hover:[animation-play-state:paused]">
          {LOOP_IMAGES.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="h-48 w-48 shrink-0 overflow-hidden rounded-xl border border-border shadow-[0_8px_24px_-8px_rgba(42,36,29,0.25)] transition-transform duration-300 ease-out hover:scale-[1.04] md:h-64 md:w-64 lg:h-80 lg:w-80"
            >
              <img
                src={src}
                alt="Raíces en acción — sesión de coaching"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RaicesEnAccion
