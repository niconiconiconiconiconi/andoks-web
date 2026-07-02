import { Plus } from 'lucide-react'
import { peso } from '../data'
import { useCart } from '../cart'
import Placeholder from './Placeholder'

// Compact card for the "Perfect Pairings" grid on the Product Detail page.
// Whole card opens that product; the round button adds to cart.
export default function PairingCard({ product, onOpen }) {
  const { add } = useCart()

  return (
    <div
      onClick={onOpen}
      className="group relative flex cursor-pointer flex-col rounded-xl border border-[#E1E3E4] bg-white p-4 shadow-[0px_4px_12px_-4px_rgba(0,0,0,0.04)] hover:border-brand-bright/40"
    >
      <div className="mb-4 h-44 overflow-hidden rounded-lg bg-panel">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <Placeholder label={product.name} />
        )}
      </div>

      <h4 className="text-base font-semibold text-ink">{product.name}</h4>
      <span className="mt-1 text-sm font-semibold text-brand-bright">
        {peso(product.price)}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation()
          add(product)
        }}
        aria-label={`Add ${product.name} to cart`}
        className="absolute bottom-[17px] right-[17px] flex h-8 w-8 items-center justify-center rounded-full bg-hair text-ink hover:bg-brand-bright hover:text-white"
      >
        <Plus className="h-3 w-3" strokeWidth={3} />
      </button>
    </div>
  )
}
