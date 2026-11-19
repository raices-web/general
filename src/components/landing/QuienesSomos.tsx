import nachoPhoto from '../../assets/nacho.png'
import vickyPhoto from '../../assets/vicky.png'

const FOUNDERS = [
  {
    photo: nachoPhoto,
    name: 'Ignacio Amendolaro',
    role: 'Coach Organizacional | Lic. Administración | Neurociencia Cognitiva',
    bio: 'Con más de 10 años en la industria de consumo masivo, hoy acompaño a organizaciones que buscan fortalecer sus estructuras de liderazgo y convertir el talento interno en su mayor ventaja competitiva.',
  },
  {
    photo: vickyPhoto,
    name: 'Victoria Rolandi',
    role: 'Coach Organizacional | Liderazgo y Cultura',
    bio: 'Con más de 10 años de trabajo en empresa familiar y habilidades blandas. Actualmente acompaño a líderes y organizaciones en procesos de liderazgo, comunicación y cultura organizacional.',
  },
] as const

function QuienesSomos() {
  return (
    <section id="quienes-somos" className="bg-surface-soft px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[3px] text-terracota">
          Quiénes Somos
        </span>
        <span className="mt-3 h-px w-8 bg-terracota" />
      </div>

      <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
        {FOUNDERS.map(({ photo, name, role, bio }) => (
          <div key={name} className="flex flex-col">
            <div className="mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl border border-border shadow-[0_8px_24px_-8px_rgba(42,36,29,0.2)]">
              <img src={photo} alt={name} className="h-full w-full object-cover" />
            </div>

            <div className="mx-auto mt-6 w-full max-w-[280px] text-left">
              <h3 className="font-serif text-[22px] font-semibold text-forest">{name}</h3>
              <p className="mt-2 text-body-sm font-medium text-terracota">{role}</p>
              <p className="mt-4 text-body-md text-body">{bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuienesSomos
