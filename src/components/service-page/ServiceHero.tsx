import { ArrowRight } from 'lucide-react'
import heroPhoto from '../../assets/fotohero.png'

function ServiceHero({
  eyebrow,
  title,
  description,
  photoAlt,
}: {
  eyebrow: string
  title: string
  description: string
  photoAlt: string
}) {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[2px] text-terracota">{eyebrow}</p>
          <h1 className="mt-4 max-w-[480px] font-serif text-[30px] font-semibold leading-[1.25] text-forest sm:text-[34px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[480px] text-[15px] leading-relaxed text-body">{description}</p>
          <a
            href="#contacto"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-md border border-terracota px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-terracota transition-colors hover:bg-terracota hover:text-cream"
          >
            Conversemos
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>

        <div className="overflow-hidden rounded-xl">
          <img src={heroPhoto} alt={photoAlt} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
