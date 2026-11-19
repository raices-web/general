import type { LucideIcon } from 'lucide-react'

export type IconFeatureItem = {
  icon: LucideIcon
  title: string
  description: string
}

const COLUMN_CLASS: Record<3 | 4, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

function IconFeatureGrid({
  eyebrow,
  items,
  columns = 4,
}: {
  eyebrow: string
  items: readonly IconFeatureItem[]
  columns?: 3 | 4
}) {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-center text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[3px] text-terracota">
            {eyebrow}
          </span>
          <span className="mt-3 h-px w-8 bg-terracota" />
        </div>

        <div
          className={`mt-14 grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x ${COLUMN_CLASS[columns]} lg:divide-y-0 lg:divide-x`}
        >
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 px-4 py-10 text-center first:pt-0 sm:py-0 lg:px-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-border">
                <Icon size={26} strokeWidth={1.5} className="text-forest" />
              </div>
              <div>
                <p className="font-serif text-[19px] font-semibold text-forest">{title}</p>
                <p className="mt-2 max-w-[220px] text-[14px] leading-relaxed text-body">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IconFeatureGrid
