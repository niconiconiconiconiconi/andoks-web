import { Star, Plus } from 'lucide-react'
import { featured, peso } from '../data'
import { useCart } from '../cart'
import Placeholder from './Placeholder'

export default function Hero() {
  const { add } = useCart()

  return (
    <section className="overflow-hidden rounded-xl bg-white shadow-card">
      <div className="flex flex-col md:flex-row">
        {/* Image area */}
        <div className="relative min-h-[200px] md:min-h-[260px] md:w-[50%]">
          {featured.image ? (
            <img src={featured.image} alt={featured.name} className="h-full w-full object-cover" />
          ) : (
            <Placeholder label={featured.name} />
          )}
          {featured.badge && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand-red px-3 py-1.5 text-base uppercase tracking-[0.8px] text-white shadow-card">
              <Star className="h-3 w-3 fill-white" />
              {featured.badge}
            </span>
          )}
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
          <h1 className="mb-2 text-[28px] font-bold leading-8 tracking-[-0.8px] text-ink">
            {featured.name}
          </h1>
          <p className="mb-4 line-clamp-3 text-base leading-6 text-cocoa">{featured.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-brand-red">{peso(featured.price)}</span>
            <button
              onClick={() => add(featured)}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-bright px-6 text-base text-white shadow-card hover:brightness-95"
            >
              <Plus className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
