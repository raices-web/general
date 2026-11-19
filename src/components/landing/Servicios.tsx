import {
  ArrowRight,
  Fingerprint,
  GraduationCap,
  Navigation,
  Puzzle,
  Sprout,
  User,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    number: '01',
    icon: Navigation,
    title: 'Programa de Liderazgo GPS',
    description:
      'Diagnóstico, capacitación y coaching para desarrollar un liderazgo auténtico y medible.',
    link: '/servicios/programa-liderazgo-gps',
    insignia: true,
  },
  {
    number: '02',
    icon: User,
    title: 'Coaching Ejecutivo',
    description:
      'Acompañamos a líderes y directivos a mejorar su desempeño y su toma de decisiones.',
    link: '/servicios/coaching-ejecutivo',
  },
  {
    number: '03',
    icon: Puzzle,
    title: 'Team Building',
    description:
      'Dinámicas estratégicas para fortalecer vínculos y potenciar la cooperación entre áreas.',
    link: '/servicios/team-building',
  },
  {
    number: '04',
    icon: Fingerprint,
    title: 'Identidad Organizacional',
    description:
      'Definimos quiénes somos, para qué existimos y cómo elegimos hacer las cosas.',
    link: '/servicios/identidad-organizacional',
  },
  {
    number: '05',
    icon: GraduationCap,
    title: 'Talleres y Capacitaciones',
    description: 'Formación en habilidades específicas y desarrollo de competencias clave.',
    badge: 'Próximamente',
  },
  {
    number: '06',
    icon: Users,
    title: 'Coaching de Equipos',
    description:
      'Fortalecemos la comunicación, la colaboración y la toma de decisiones de tu equipo.',
    link: '/servicios/coaching-de-equipos',
  },
  {
    number: '07',
    icon: Sprout,
    title: 'Mindfulness',
    description:
      'Herramientas de atención plena para gestionar el estrés y liderar con mayor presencia.',
    link: '/servicios/mindfulness',
  },
] as const

function Servicios() {
  return (
    <section id="servicios" className="bg-cream px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[3px] text-terracota">
          Nuestros Servicios
        </span>
        <span className="mt-3 h-px w-8 bg-terracota" />
      </div>

      <div className="mx-auto mt-16 grid max-w-[1600px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {SERVICES.map(({ number, icon: Icon, title, description, ...rest }) => {
          const isInsignia = 'insignia' in rest && rest.insignia

          const card = (
            <div
              className={`relative flex h-full flex-col items-start rounded-2xl border p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(42,36,29,0.18)] ${
                isInsignia
                  ? 'border-terracota/50 bg-terracota/5 hover:border-terracota'
                  : 'border-border bg-surface-soft hover:border-terracota/40'
              }`}
            >
              {isInsignia && (
                <span className="absolute -top-3 left-8 inline-flex rounded-full bg-terracota px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">
                  Servicio insignia
                </span>
              )}

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-border">
                <Icon size={24} strokeWidth={1.5} className="text-forest" />
              </div>

              <p className="mt-6 text-[13px] font-semibold text-terracota">{number}</p>

              <h3 className="mt-1 font-serif text-[20px] font-semibold leading-snug text-forest">
                {title}
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-body">{description}</p>

              <div className="mt-auto pt-6">
                {'badge' in rest ? (
                  <span className="inline-flex rounded-full bg-terracota/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-terracota">
                    {rest.badge}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[14px] font-medium text-terracota">
                    Ver más
                    <ArrowRight size={14} strokeWidth={2} />
                  </span>
                )}
              </div>
            </div>
          )

          if (!('link' in rest)) {
            return (
              <div key={number} className="opacity-80">
                {card}
              </div>
            )
          }

          return (
            <Link key={number} to={rest.link} className="cursor-pointer">
              {card}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Servicios
