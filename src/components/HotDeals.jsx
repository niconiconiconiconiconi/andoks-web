import { Flame, ShoppingBag, SlidersHorizontal } from 'lucide-react'
import { products, peso, savingsPct, originalPrice } from '../data'
import { useCart } from '../cart'
import Placeholder from './Placeholder'
import DealCard from './DealCard'

// Every product that carries a "Save N%" badge is a deal. The biggest bundle
// deal headlines as "Deal of the Day"; the rest fill the promotions grid.
const dealItems = products.filter((p) => savingsPct(p) > 0)
const HERO_ID = 'IGZQRV' // Salu-Salo Meal A — Litson Manok family bundle, Save 10%
const hero = dealItems.find((p) => p.id === HERO_ID) ?? dealItems[0]
const gridItems = dealItems.filter((p) => p.id !== hero?.id)

export default function HotDeals({ onOpenProduct }) {
  const { add } = useCart()
  const heroOrig = originalPrice(hero)

  return (
    <main className="mx-auto flex max-w-shell flex-col gap-12 p-8 sm:p-12">
      {/* Deal of the Day */}
      <section className="relative h-[500px] overflow-hidden rounded-xl shadow-card">
        {hero.image ? (
          <img src={hero.image} alt={hero.name} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <Placeholder label={hero.name} />
        )}
        {/* Dark gradient so the white text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,27,0.8)] via-[rgba(26,26,27,0.3)] to-transparent" />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-12">
          <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-brand-yellow px-3 py-1 text-sm font-semibold text-brand-gold shadow-card">
            <Flame className="h-3.5 w-3.5" />
            Deal of the Day
          </span>

          <h1 className="mb-2 max-w-[672px] text-4xl font-extrabold leading-tight tracking-[-0.96px] text-white sm:text-5xl">
            {hero.name}
          </h1>
          <p className="mb-6 max-w-[576px] text-lg leading-7 text-[#E7E8E9]">{hero.description}</p>

          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3 rounded-lg border border-white/30 bg-[rgba(248,249,250,0.2)] px-4 py-2 backdrop-blur">
              {heroOrig && (
                <span className="text-base text-[#E1E3E4] line-through">{peso(heroOrig)}</span>
              )}
              <span className="text-2xl font-bold text-[#FFDF9E]">{peso(hero.price)}</span>
            </div>
            <button
              onClick={() => add(hero)}
              className="flex items-center gap-2 rounded-lg bg-brand-bright px-8 py-3 text-base font-semibold text-white shadow-card hover:brightness-95"
            >
              <ShoppingBag className="h-4 w-4" />
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Promotions grid */}
      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold leading-10 text-ink">Today's Promotions</h2>
            <p className="text-base text-cocoa">Limited-time savings on Andok's favorites.</p>
          </div>
          {/* Mock filter/sort control — not wired to real sorting yet. */}
          <button className="flex items-center gap-2 rounded-lg p-2 text-sm font-semibold text-cocoa hover:bg-panel">
            <SlidersHorizontal className="h-4 w-4" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {gridItems.map((p) => (
            <DealCard key={p.id} product={p} onOpen={() => onOpenProduct(p.id)} />
          ))}
        </div>
      </section>
    </main>
  )
}
