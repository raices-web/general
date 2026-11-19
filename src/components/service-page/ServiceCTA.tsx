import { ArrowRight } from 'lucide-react'
import logoRaices from '../../assets/logosolo.png'

function ServiceCTA({
  title,
  subtitle,
  buttonText = 'Agendar una conversación',
}: {
  title: string[]
  subtitle: string
  buttonText?: string
}) {
  return (
    <section className="px-6 pb-20 pt-4 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-terracota/8 p-10 text-center lg:flex-row lg:p-14 lg:text-left">
          <img src={logoRaices} alt="Raíces" className="h-24 w-24 shrink-0 object-contain" />
          <div>
            <h3 className="font-serif text-[26px] font-semibold text-forest sm:text-[28px]">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-body">{subtitle}</p>
            <a
              href="#contacto"
              className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-md bg-terracota px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-cream transition-opacity hover:opacity-90"
            >
              {buttonText}
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCTA
