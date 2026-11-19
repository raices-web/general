import { Fragment } from 'react'
import type { LucideIcon } from 'lucide-react'

export type PhaseStep = {
  number: string
  icon: LucideIcon
  title: string
  intro?: string
  items?: readonly string[]
  description?: string
}

function StepBody({ step, itemsMaxWidth }: { step: PhaseStep; itemsMaxWidth: string }) {
  return (
    <>
      <step.icon size={22} strokeWidth={1.5} className="mt-3 text-forest" />
      <p className="mt-3 font-serif text-[16px] font-semibold leading-snug text-forest">{step.title}</p>
      {step.description && (
        <p className={`mt-2 ${itemsMaxWidth} text-[13px] leading-relaxed text-body`}>{step.description}</p>
      )}
      {step.items && (
        <div className={`mt-2 w-full ${itemsMaxWidth} text-left`}>
          {step.intro && <p className="text-[13px] font-medium text-forest">{step.intro}</p>}
          <ul className="mt-1 flex flex-col gap-1.5">
            {step.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-body">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-terracota" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

function PhaseSteps({ eyebrow, steps }: { eyebrow: string; steps: readonly PhaseStep[] }) {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-center text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[3px] text-terracota">{eyebrow}</span>
          <span className="mt-3 h-px w-8 bg-terracota" />
        </div>

        <div className="mt-14 hidden items-start lg:flex">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <div className="flex flex-1 flex-col items-center px-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracota/10 text-[14px] font-semibold text-terracota">
                  {step.number}
                </div>
                <StepBody step={step} itemsMaxWidth="max-w-[220px]" />
              </div>
              {index < steps.length - 1 && (
                <div className="mt-6 flex w-10 shrink-0 items-center">
                  <div className="h-px w-full border-t border-dashed border-terracota/50" />
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
              <StepBody step={step} itemsMaxWidth="max-w-[280px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhaseSteps
