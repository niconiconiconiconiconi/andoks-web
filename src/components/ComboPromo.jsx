import { Drumstick } from 'lucide-react'
import { combo } from '../data'
import Icon from './Icon'

export default function ComboPromo() {
  return (
    <section className="overflow-hidden rounded-xl border border-[rgba(225,227,228,0.2)] bg-brand-yellow shadow-card">
      <div className="flex flex-col md:flex-row">
        {/* Copy side */}
        <div className="flex flex-1 flex-col p-6">
          <span className="mb-4 w-fit rounded-full bg-brand-red px-3 py-1 text-base uppercase tracking-[0.8px] text-white">
            {combo.eyebrow}
          </span>
          <h2 className="mb-2 text-base tracking-[-0.4px] text-brand-gold">{combo.title}</h2>
          <p className="mb-4 max-w-md text-base leading-6 text-brand-gold/80">
            {combo.description}
          </p>
          <button className="flex w-fit items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base text-white shadow-cta hover:brightness-95">
            <Drumstick className="h-[18px] w-[18px]" />
            {combo.cta}
          </button>
        </div>

        {/* Slot picker side */}
        <div className="relative flex flex-1 items-center justify-center bg-brand-red/5 p-6">
          <div className="flex w-full max-w-sm justify-center gap-4">
            {combo.slots.map((s) => (
              <button
                key={s.id}
                className="flex h-[103px] flex-1 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-brand-red/30 bg-white shadow-card hover:border-brand-red"
              >
                <Icon name={s.icon} className="h-6 w-6 text-brand-red" />
                <span className="text-[10px] font-bold uppercase text-cocoa">{s.label}</span>
              </button>
            ))}
          </div>
          <Drumstick className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 text-ink opacity-10" />
        </div>
      </div>
    </section>
  )
}
