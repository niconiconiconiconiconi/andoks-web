import { useState } from 'react'
import { ArrowLeft, Minus, Plus, ShoppingCart, Star } from 'lucide-react'
import { products, peso } from '../data'
import { useCart } from '../cart'
import Placeholder from './Placeholder'
import PairingCard from './PairingCard'

// Static demo customizations — no per-product options in the API (data.js).
// Purely visual selection state; does not affect price. Flagged as demo.
const PORTION_SIZES = ['Regular', 'Family (Good for 4)']
const FLAVOR_PROFILES = ['Original Recipe', 'Hot & Spicy']

export default function ProductDetail({ product, onBack, onOpenProduct }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [portion, setPortion] = useState(PORTION_SIZES[0])
  const [flavor, setFlavor] = useState(FLAVOR_PROFILES[0])

  // "Perfect Pairings" — real sides/drinks from the menu, minus this item.
  const pairings = products
    .filter(
      (p) =>
        p.id !== product.id &&
        ['extra', 'softdrinks', 'rice-toppings', 'merienda'].includes(p.category),
    )
    .slice(0, 4)

  const Pill = ({ label, selected, onClick }) => (
    <button
      onClick={onClick}
      className={
        selected
          ? 'rounded-lg border-2 border-brand-bright bg-[#FFDAD6] px-6 py-3 text-base text-[#410000]'
          : 'rounded-lg border-2 border-[#E1E3E4] bg-canvas px-6 py-3 text-base text-ink hover:border-brand-bright/40'
      }
    >
      {label}
    </button>
  )

  return (
    <main className="mx-auto flex w-full max-w-shell flex-col gap-16 p-4 sm:p-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-base font-semibold text-cocoa hover:text-brand-red"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
        Back to Menu
      </button>

      {/* Product Detail Section */}
      <section className="flex flex-col gap-12 lg:flex-row lg:items-start">
        {/* Image side */}
        <div className="flex-1">
          <div className="relative h-80 overflow-hidden rounded-xl bg-panel shadow-[0px_12px_24px_-8px_rgba(225,37,27,0.15)] sm:h-[426px]">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <Placeholder label={product.name} />
            )}
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-brand-bright px-3 py-1 text-base uppercase text-white">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-2 pb-4">
            <h1 className="text-4xl font-extrabold tracking-[-0.96px] text-ink sm:text-5xl">
              {product.name}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-brand-bright">
                {peso(product.price)}
              </span>
              {product.tag && (
                <span className="flex items-center gap-1 text-sm font-semibold text-cocoa">
                  <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                  {product.tag.replace('★', '').trim()}
                </span>
              )}
            </div>
          </div>

          <p className="pb-8 text-base leading-[26px] text-cocoa">
            {product.description}
          </p>

          {/* Customizations (demo) */}
          <div className="flex flex-col gap-6 pb-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-ink">Portion Size</h3>
              <div className="flex flex-wrap gap-3">
                {PORTION_SIZES.map((s) => (
                  <Pill
                    key={s}
                    label={s}
                    selected={portion === s}
                    onClick={() => setPortion(s)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-ink">Flavor Profile</h3>
              <div className="flex flex-wrap gap-3">
                {FLAVOR_PROFILES.map((f) => (
                  <Pill
                    key={f}
                    label={f}
                    selected={flavor === f}
                    onClick={() => setFlavor(f)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action area */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-36 items-center rounded-lg border border-[#E1E3E4] bg-white">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="flex h-full w-12 items-center justify-center text-cocoa hover:text-brand-red"
              >
                <Minus className="h-3.5 w-3.5" strokeWidth={3} />
              </button>
              <span className="flex-1 text-center text-base font-semibold text-ink">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="flex h-full w-12 items-center justify-center text-cocoa hover:text-brand-red"
              >
                <Plus className="h-3.5 w-3.5" strokeWidth={3} />
              </button>
            </div>

            <button
              onClick={() => add(product, qty)}
              className="flex h-14 flex-1 items-center justify-center gap-2 rounded-lg bg-brand-bright text-base font-semibold text-white shadow-cta hover:bg-brand-red"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart · {peso(product.price * qty)}
            </button>
          </div>
        </div>
      </section>

      {/* Perfect Pairings */}
      {pairings.length > 0 && (
        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-ink">Perfect Pairings</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pairings.map((p) => (
              <PairingCard
                key={p.id}
                product={p}
                onOpen={() => onOpenProduct(p.id)}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
