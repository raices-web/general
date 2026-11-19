import { Fragment } from 'react'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type MetodologiaStep = {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

function Metodologia({ steps }: { steps: readonly MetodologiaStep[] }) {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-center text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[3px] text-terracota">
            Metodología
          </span>
          <span className="mt-3 h-px w-8 bg-terracota" />
        </div>

        <div className="mt-14 hidden items-start lg:flex">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <div className="flex flex-1 flex-col items-center px-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracota/10 text-[14px] font-semibold text-terracota">
                  {step.number}
                </div>
                <step.icon size={22} strokeWidth={1.5} className="mt-3 text-forest" />
                <p className="mt-3 font-serif text-[16px] font-semibold leading-snug text-forest">
                  {step.title}
                </p>
                <p className="mt-2 max-w-[190px] text-[13px] leading-relaxed text-body">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="mt-6 flex flex-1 items-center px-2">
                  <div className="h-px w-full bg-terracota/40" />
                  <ArrowRight size={16} strokeWidth={2} className="-ml-1 shrink-0 text-terracota/50" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-10 lg:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracota/10 text-[14px] font-semibold text-terracota">
                {step.number}
              </div>
              <step.icon size={22} strokeWidth={1.5} className="mt-3 text-forest" />
              <p className="mt-3 font-serif text-[16px] font-semibold leading-snug text-forest">
                {step.title}
              </p>
              <p className="mt-2 max-w-[280px] text-[13px] leading-relaxed text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metodologia
