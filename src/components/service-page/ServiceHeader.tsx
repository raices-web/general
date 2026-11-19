import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoRaices from '../../assets/raiceslogo.png'

const NAV_LINKS = [
  { label: 'Propósito', href: '/#proposito' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Equipo', href: '/#quienes-somos' },
  { label: 'Contacto', href: '/#contacto' },
]

function ServiceHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-cream">
      <div className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 xl:px-24">
        <Link to="/" className="flex items-center">
          <img src={logoRaices} alt="Raíces — Espacios de Transformación" className="h-9 w-auto object-contain" />
        </Link>

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
          {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
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
  )
}

export default ServiceHeader
