import { Leaf, Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from '../icons/SocialIcons'
import { WHATSAPP_URL } from '../../lib/whatsapp'

const CONTACT_EMAIL = 'raices.espaciosdetransformacion@gmail.com'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/raices-coachingorganizacional/posts/?feedView=all',
    icon: LinkedinIcon,
  },
  { label: 'Instagram', href: 'https://www.instagram.com/raices.transformacion/', icon: InstagramIcon },
] as const

function Contacto() {
  return (
    <section id="contacto" className="bg-cream px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
      <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-terracota/10">
          <Leaf size={28} strokeWidth={1.5} className="text-terracota" />
        </div>

        <h2 className="mt-6 font-serif text-display-md text-forest">¿Empezamos a conversar?</h2>
        <span className="mt-4 h-px w-10 bg-terracota" />

        <p className="mt-6 text-body-md text-body">
          Contactanos para comenzar tu proceso de transformación organizacional.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-forest px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-forest-light"
          >
            <MessageCircle size={16} strokeWidth={2} />
            Escribinos por WhatsApp
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-forest px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-forest transition-colors hover:border-forest-light hover:text-forest-light"
          >
            <Mail size={16} strokeWidth={2} />
            Enviar un mail
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-[15px] text-body">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }, index) => (
            <span key={label} className="inline-flex items-center gap-4">
              {index > 0 && <span className="h-4 w-px bg-border" />}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-terracota"
              >
                <Icon size={18} strokeWidth={1.5} className="text-terracota" />
                {label}
              </a>
            </span>
          ))}
        </div>

        <div className="mt-10 h-px w-full bg-border" />

        <p className="mt-6 text-[13px] text-body">
          © {new Date().getFullYear()} Raíces — Espacios de Transformación. Todos los derechos
          reservados.
        </p>
      </div>
    </section>
  )
}

export default Contacto
