import { useState } from 'react'
import { Bookmark, Plus } from 'lucide-react'
import { peso } from '../data'
import { useCart } from '../cart'
import Placeholder from './Placeholder'

export default function ProductCard({ product, onOpen }) {
  const { add } = useCart()
  const [saved, setSaved] = useState(!!product.saved)

  return (
    <article
      onClick={onOpen}
      className="flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[rgba(225,227,228,0.2)] bg-white shadow-card hover:border-brand-bright/40"
    >
      {/* Image */}
      <div className="relative h-56 bg-panel">
        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          <Placeholder label={product.name} />
        )}

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-goldmid px-2.5 py-1 text-[10px] uppercase tracking-[0.25px] text-white shadow-card">
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation()
            setSaved((s) => !s)
          }}
          aria-label="Save"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/90 shadow-card backdrop-blur"
        >
          <Bookmark
            className={saved ? 'h-5 w-5 fill-ink text-ink' : 'h-5 w-5 text-ink'}
          />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-tight text-ink">{product.name}</h3>
          <span className="shrink-0 text-base font-bold text-brand-red">{peso(product.price)}</span>
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-5 text-cocoa">{product.description}</p>

        <div className="mt-auto flex items-center justify-between border-t border-hair pt-4">
          {product.tag ? (
            <span className="rounded bg-panel px-2 py-1 text-[11px] font-bold uppercase tracking-[0.275px] text-cocoa">
              {product.tag}
            </span>
          ) : (
            <span />
          )}
          <button
            onClick={(e) => {
              e.stopPropagation()
              add(product)
            }}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red hover:bg-brand-red/20"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={3} />
          </button>
        </div>
      </div>
    </article>
  )
}
