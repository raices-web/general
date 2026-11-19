import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import heroPhoto from '../../assets/fotohero.png'
import logoRaices from '../../assets/raiceslogo.png'
import { WHATSAPP_URL } from '../../lib/whatsapp'

const NAV_LINKS = [
  { label: 'Propósito', href: '#proposito' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#quienes-somos' },
  { label: 'Contacto', href: '#contacto' },
]

const STATS = [
  { value: '+300', label: 'Líderes acompañados' },
  { value: '+50', label: 'Empresas que confiaron en Raíces' },
  { value: '+3', label: 'Años de trayectoria' },
]

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-cream">
        <div className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 xl:px-24">
          <a href="#" className="flex items-center">
            <img src={logoRaices} alt="Raíces — Espacios de Transformación" className="h-9 w-auto object-contain" />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="cursor-pointer text-sm font-medium text-ink/80 transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="cursor-pointer text-ink md:hidden"
          >
            {menuOpen ? (
              <X size={26} strokeWidth={1.5} />
            ) : (
              <Menu size={26} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-1 bg-cream px-6 pb-6 sm:px-10 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer border-t border-border py-3 text-sm font-medium text-ink/80 transition-colors first:border-t-0 hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <div className="relative flex w-full flex-col overflow-hidden bg-cream lg:min-h-[90vh]">
        <section className="flex w-full flex-1 flex-col lg:flex-row">
          <div className="flex flex-col items-start px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-16 lg:py-8 xl:px-24">
            <p className="text-[13px] font-semibold uppercase tracking-[2px] text-forest">
              Coaching para líderes y organizaciones
            </p>

            <h1 className="mt-6 font-serif text-[2.25rem] font-semibold leading-[1.08] text-forest sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem]">
              <span className="block">Transformamos líderes</span>
              <span className="block">para transformar</span>
              <span className="block">organizaciones.</span>
            </h1>

            <div className="my-4 h-[3px] w-[60px] bg-terracota" />

            <p className="max-w-[560px] text-[17px] leading-[1.6] text-body">
              Acompañamos a empresas mediante coaching ejecutivo, programas de
              liderazgo y procesos de transformación organizacional para
              construir culturas más fuertes y resultados sostenibles.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#servicios"
                className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-forest px-8 py-3 text-button text-cream transition-colors hover:bg-forest-light"
              >
                Nuestros servicios
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-forest px-8 py-3 text-button text-forest transition-colors hover:border-forest-light hover:text-forest-light"
              >
                Contáctanos
              </a>
            </div>

            <div className="mt-8 grid w-full grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-start gap-1 py-6 first:pt-0 sm:py-0 sm:pl-6 sm:first:pl-0"
                >
                  <p className="font-serif text-[32px] font-semibold leading-none text-forest">
                    {value}
                  </p>
                  <p className="text-body-sm text-body">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[360px] w-full sm:h-[440px] lg:h-auto lg:w-1/2">
            <img
              src={heroPhoto}
              alt="Sesión de coaching ejecutivo entre profesionales conversando"
              className="absolute inset-0 h-full w-full object-cover object-[60%_50%]"
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-[30%] lg:block"
              style={{
                background:
                  'linear-gradient(to right, var(--color-cream), transparent)',
              }}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero
