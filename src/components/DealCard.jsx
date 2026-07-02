import { Plus } from 'lucide-react'
import { peso, savingsPct, originalPrice } from '../data'
import { useCart } from '../cart'
import Placeholder from './Placeholder'

// Promo card for the Hot Deals grid. Matches the Figma "Promo Card":
// 192px image w/ save badge, body with struck-through original + discounted
// price and a round add-to-cart button. Whole card opens Product Detail.
export default function DealCard({ product, onOpen }) {
  const { add } = useCart()
  const pct = savingsPct(product)
  const orig = originalPrice(product)
  // Figma showed a red badge on high-value deals, gold on the rest.
  const badgeCls =
    pct >= 10
      ? 'bg-[#BA1A1A] text-white'
      : 'bg-brand-yellow text-brand-gold'

  return (
    <article
      onClick={onOpen}
      className="flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[rgba(231,189,183,0.3)] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:border-brand-bright/40"
    >
      {/* Image + save badge */}
      <div className="relative h-48 bg-panel">
        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          <Placeholder label={product.name} />
        )}
        {pct > 0 && (
          <span
            className={`absolute left-4 top-4 rounded px-2 py-1 text-xs font-bold uppercase tracking-[0.6px] shadow-card ${badgeCls}`}
          >
            Save {pct}%
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="mb-1 text-2xl font-bold leading-8 text-ink">{product.name}</h3>
          <p className="line-clamp-2 text-sm leading-5 text-cocoa">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[rgba(231,189,183,0.3)] pt-4">
          <div className="flex flex-col">
            {orig && (
              <span className="text-sm leading-5 text-[#926F69] line-through">{peso(orig)}</span>
            )}
            <span className="text-2xl font-bold leading-6 text-brand-bright">{peso(product.price)}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              add(product)
            }}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-panel text-brand-bright shadow-card hover:bg-hair"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={3} />
          </button>
        </div>
      </div>
    </article>
  )
}
