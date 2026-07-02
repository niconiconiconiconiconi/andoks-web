import { ArrowLeft, Minus, Plus, Trash2, Lock, ShoppingBag } from 'lucide-react'
import { products, peso } from '../data'
import { useCart } from '../cart'
import Placeholder from './Placeholder'

const DELIVERY_FEE = 49

// Cart Summary ("Orders") — order review. Checkout is a separate future page,
// so the CTA is a stub. Wired to the real cart via useCart().
export default function CartSummary({ onBack, onCheckout }) {
  const { items, setQty, remove, total } = useCart()
  const lines = Object.values(items)

  const imageFor = (id) => products.find((p) => p.id === id)?.image ?? null

  const subtotal = total
  const delivery = lines.length ? DELIVERY_FEE : 0
  const vatIncluded = subtotal - subtotal / 1.12 // 12% VAT, price-inclusive
  const grandTotal = subtotal + delivery

  return (
    <main className="mx-auto flex w-full max-w-shell flex-col gap-8 p-4 sm:p-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-base font-semibold text-cocoa hover:text-brand-red"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
        Back to Menu
      </button>

      <h1 className="text-3xl font-bold text-ink">Your Cart</h1>

      {lines.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-hair bg-canvas py-20 text-center shadow-card">
          <ShoppingBag className="h-12 w-12 text-cocoa/40" strokeWidth={1.5} />
          <p className="text-base text-cocoa">Your cart is empty.</p>
          <button
            onClick={onBack}
            className="rounded-lg bg-brand-bright px-6 py-3 text-base font-semibold text-white shadow-cta hover:bg-brand-red"
          >
            Browse the Menu
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Items list */}
          <div className="flex flex-1 flex-col gap-6">
            {lines.map((line) => {
              const image = imageFor(line.id)
              return (
                <div
                  key={line.id}
                  className="flex items-center gap-4 rounded-xl border border-panel bg-canvas p-4 shadow-[0px_4px_12px_rgba(225,37,27,0.04)]"
                >
                  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-lg bg-panel">
                    {image ? (
                      <img
                        src={image}
                        alt={line.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Placeholder label={line.name} />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold text-ink">{line.name}</h3>
                        <span className="text-sm text-cocoa">
                          {peso(line.price)} each
                        </span>
                      </div>
                      <span className="shrink-0 text-lg font-bold text-brand-red">
                        {peso(line.price * line.qty)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full bg-hair">
                        <button
                          onClick={() => setQty(line.id, line.qty - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center text-cocoa hover:text-brand-red"
                        >
                          <Minus className="h-3 w-3" strokeWidth={3} />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-ink">
                          {line.qty}
                        </span>
                        <button
                          onClick={() => setQty(line.id, line.qty + 1)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center text-cocoa hover:text-brand-red"
                        >
                          <Plus className="h-3 w-3" strokeWidth={3} />
                        </button>
                      </div>

                      <button
                        onClick={() => remove(line.id)}
                        className="flex items-center gap-1 text-sm text-cocoa hover:text-brand-red"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Order summary */}
          <div className="w-full shrink-0 rounded-xl bg-canvas p-6 shadow-[0px_12px_24px_rgba(26,26,27,0.08)] lg:w-96">
            <h2 className="border-b border-[#E1E3E4] pb-4 text-2xl font-bold text-ink">
              Order Summary
            </h2>

            <div className="flex flex-col gap-4 py-6">
              <div className="flex justify-between text-base">
                <span className="text-cocoa">Subtotal</span>
                <span className="font-bold text-ink">{peso(subtotal)}</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-cocoa">Delivery Fee</span>
                <span className="font-bold text-ink">{peso(delivery)}</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-cocoa">VAT (incl. 12%)</span>
                <span className="font-bold text-ink">{peso(vatIncluded)}</span>
              </div>
            </div>

            <div className="border-t border-[#E1E3E4] pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-ink">Total</span>
                <span className="text-2xl font-bold text-brand-bright">
                  {peso(grandTotal)}
                </span>
              </div>
              <p className="mt-1 text-right text-xs font-bold uppercase tracking-[0.6px] text-cocoa">
                VAT Included
              </p>
            </div>

            <button
              type="button"
              onClick={onCheckout}
              className="mt-6 flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-brand-bright text-base font-bold text-white shadow-cta hover:bg-brand-red"
            >
              <Lock className="h-3.5 w-3.5" />
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
