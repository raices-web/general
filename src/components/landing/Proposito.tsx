import { Mountain, Sprout } from 'lucide-react'

function Proposito() {
  return (
    <section id="proposito" className="relative overflow-hidden bg-surface-soft px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
      <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row">
        <div className="flex flex-col justify-center lg:w-[32%] lg:pr-12">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-semibold uppercase tracking-[2px] text-terracota">
              Nuestro Propósito
            </span>
            <span className="h-px w-10 bg-terracota" />
          </div>

          <h2 className="mt-6 font-serif text-[34px] font-semibold leading-[1.3] text-ink sm:text-[40px]">
            Creemos en el poder de las conversaciones que{' '}
            <em className="text-terracota">transforman</em>.
          </h2>

          <p className="mt-5 max-w-[50ch] text-[16px] leading-relaxed text-body sm:text-[18px]">
            Ayudamos a las organizaciones a tener las conversaciones necesarias
            para expandir sus posibilidades.
          </p>
        </div>

        <div className="hidden shrink-0 self-stretch px-8 lg:block">
          <div className="h-full w-px bg-border/60" />
        </div>

        <div className="mt-16 flex lg:mt-0 lg:items-center">
          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
            <div className="flex items-start gap-4">
              <div className="relative shrink-0">
                <div className="absolute -inset-2 rounded-full bg-forest/10 blur-md" />
                <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-forest">
                  <Sprout size={26} strokeWidth={1.5} className="text-cream" />
                </div>
              </div>
              <div>
                <p className="font-serif text-[22px] font-semibold text-forest sm:text-[24px]">
                  Misión
                </p>
                <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-body">
                  Empoderar a líderes y organizaciones para que desarrollen un
                  liderazgo auténtico, impulsando así su crecimiento sostenible
                  y una cultura de bienestar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="relative shrink-0">
                <div className="absolute -inset-2 rounded-full bg-terracota/10 blur-md" />
                <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-terracota">
                  <Mountain size={26} strokeWidth={1.5} className="text-cream" />
                </div>
              </div>
              <div>
                <p className="font-serif text-[22px] font-semibold text-forest sm:text-[24px]">
                  Visión
                </p>
                <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-body">
                  Ser el motor de liderazgo transformador Nro. 1 de
                  Latinoamérica, fomentando un entorno inspiracional de
                  crecimiento y transformación continua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proposito
