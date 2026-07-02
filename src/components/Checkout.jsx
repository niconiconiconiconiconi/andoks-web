import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  MapPin,
  Navigation,
  CreditCard,
  Clock,
  Store,
  Lock,
  CheckCircle2,
  ShoppingBag,
} from 'lucide-react'
import {
  products,
  peso,
  DELIVERY_FEE,
  DEFAULT_MAP_CENTER,
  branches,
  paymentMethods,
  deliveryDays,
  timeSlots,
} from '../data'
import { useCart } from '../cart'
import Placeholder from './Placeholder'
import MapPicker from './MapPicker'

// Shared field styling pulled from the Figma inputs (panel fill, hairline
// border, 8px radius). Kept in one place so every field matches.
const fieldCls =
  'w-full rounded-lg border border-[#E7E8E9] bg-panel px-4 py-3 text-base text-ink placeholder:text-[#6B7280] focus:border-brand-red focus:outline-none'
const labelCls = 'text-base text-cocoa'

// Checkout — ONE component, two Figma variants driven by a demo mode toggle
// (mirrors the Menu/Combo pattern). 'map' = address + map pin selection;
// 'schedule' = same, plus a day/time-slot picker. Numbers mirror CartSummary
// exactly (flat ₱49 delivery, 12%-inclusive VAT). Place Order is a stub.
export default function Checkout({ onBack, onBackToMenu }) {
  const { items, total, clear } = useCart()
  const lines = Object.values(items)

  const [mode, setMode] = useState('map') // 'map' | 'schedule'
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    mobile: '',
    instructions: '',
  })
  const [coords, setCoords] = useState(DEFAULT_MAP_CENTER)
  const [branch, setBranch] = useState(branches[0].id)
  const [payment, setPayment] = useState('cod')
  const days = useMemo(() => deliveryDays(), [])
  const slots = useMemo(() => timeSlots(), [])
  const [day, setDay] = useState(days[0].id)
  const [slot, setSlot] = useState('asap')
  const [placed, setPlaced] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const imageFor = (id) => products.find((p) => p.id === id)?.image ?? null

  const subtotal = total
  const delivery = lines.length ? DELIVERY_FEE : 0
  const vatIncluded = subtotal - subtotal / 1.12
  const grandTotal = subtotal + delivery

  const canPlace =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.address.trim() &&
    form.mobile.trim() &&
    (mode === 'map' || (day && slot))

  const placeOrder = () => {
    if (!canPlace) return
    setPlaced(true)
    clear()
    window.scrollTo({ top: 0 })
  }

  // ----- Thank-you stub -----------------------------------------------------
  if (placed) {
    const dayLabel = days.find((d) => d.id === day)?.label
    const slotLabel = slots.find((s) => s.id === slot)?.label
    return (
      <main className="mx-auto flex w-full max-w-shell flex-col items-center gap-6 p-4 py-24 sm:p-12">
        <CheckCircle2 className="h-16 w-16 text-brand-red" strokeWidth={1.5} />
        <h1 className="text-3xl font-bold text-ink">Order placed!</h1>
        <p className="max-w-md text-center text-base text-cocoa">
          Thanks, {form.firstName || 'friend'}. Your Andok’s order is confirmed
          {mode === 'schedule' && dayLabel
            ? ` for ${dayLabel}, ${slotLabel}`
            : ' and is being prepared'}
          . (Demo — no payment was taken.)
        </p>
        <button
          onClick={onBackToMenu}
          className="rounded-lg bg-brand-bright px-6 py-3 text-base font-semibold text-white shadow-cta hover:bg-brand-red"
        >
          Back to Menu
        </button>
      </main>
    )
  }

  // ----- Empty cart guard ---------------------------------------------------
  if (lines.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-shell flex-col gap-8 p-4 sm:p-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-base font-semibold text-cocoa hover:text-brand-red"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          Back to Cart
        </button>
        <div className="flex flex-col items-center gap-4 rounded-xl border border-hair bg-canvas py-20 text-center shadow-card">
          <ShoppingBag className="h-12 w-12 text-cocoa/40" strokeWidth={1.5} />
          <p className="text-base text-cocoa">
            Your cart is empty — nothing to check out.
          </p>
          <button
            onClick={onBackToMenu}
            className="rounded-lg bg-brand-bright px-6 py-3 text-base font-semibold text-white shadow-cta hover:bg-brand-red"
          >
            Browse the Menu
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto flex w-full max-w-shell flex-col gap-8 p-4 sm:p-12">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <button
          onClick={onBack}
          className="flex w-fit items-center gap-2 text-base font-semibold text-cocoa hover:text-brand-red"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
          Back to Cart
        </button>
        <h1 className="text-3xl font-bold text-ink">Checkout</h1>
        <p className="text-base text-cocoa">Complete your order details below.</p>
      </div>

      {/* Demo-only fulfillment mode toggle (mirrors the Menu/Combo toggle) */}
      <div className="flex w-fit items-center gap-1 rounded-full border border-hair bg-panel p-1">
        {[
          { id: 'map', label: 'Map selection' },
          { id: 'schedule', label: 'Delivery scheduling' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setMode(t.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              mode === t.id
                ? 'bg-brand-bright text-white shadow-cta'
                : 'text-cocoa hover:text-brand-red'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
        {/* LEFT: forms */}
        <div className="flex flex-1 flex-col gap-8">
          {/* Delivery Information */}
          <section className="flex flex-col gap-6 rounded-xl border border-hair bg-canvas p-8 shadow-card">
            <div className="flex items-center gap-3 border-b border-[#E7E8E9] pb-4">
              <MapPin className="h-5 w-5 text-brand-red" />
              <h2 className="text-lg font-bold text-ink">Delivery Information</h2>
            </div>

            {/* Name row */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 sm:flex-row">
                <label className="flex flex-1 flex-col gap-1">
                  <span className={labelCls}>First Name</span>
                  <input
                    className={fieldCls}
                    placeholder="Juan"
                    value={form.firstName}
                    onChange={set('firstName')}
                  />
                </label>
                <label className="flex flex-1 flex-col gap-1">
                  <span className={labelCls}>Last Name</span>
                  <input
                    className={fieldCls}
                    placeholder="Dela Cruz"
                    value={form.lastName}
                    onChange={set('lastName')}
                  />
                </label>
              </div>

              {/* Address with leading pin + locate button */}
              <label className="flex flex-col gap-1">
                <span className={labelCls}>Delivery Address</span>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-cocoa" />
                  <input
                    className={`${fieldCls} px-12`}
                    placeholder="123 Mabini St., Brgy. San Lorenzo"
                    value={form.address}
                    onChange={set('address')}
                  />
                  <button
                    type="button"
                    onClick={() => setCoords(DEFAULT_MAP_CENTER)}
                    aria-label="Use current location"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cocoa hover:text-brand-red"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                  </button>
                </div>
              </label>

              {/* City + Mobile row */}
              <div className="flex flex-col gap-5 sm:flex-row">
                <label className="flex flex-1 flex-col gap-1">
                  <span className={labelCls}>City</span>
                  <input
                    className={fieldCls}
                    placeholder="Makati City"
                    value={form.city}
                    onChange={set('city')}
                  />
                </label>
                <label className="flex flex-1 flex-col gap-1">
                  <span className={labelCls}>Mobile Number</span>
                  <div className="flex">
                    <span className="flex items-center rounded-l-lg border border-[#E7E8E9] bg-hair px-3 text-base text-cocoa">
                      +63
                    </span>
                    <input
                      className="w-full rounded-r-lg border border-l-0 border-[#E7E8E9] bg-panel px-4 py-3 text-base text-ink placeholder:text-[#6B7280] focus:border-brand-red focus:outline-none"
                      placeholder="912 345 6789"
                      value={form.mobile}
                      onChange={set('mobile')}
                    />
                  </div>
                </label>
              </div>

              {/* Instructions */}
              <label className="flex flex-col gap-1">
                <span className={labelCls}>Delivery Instructions (Optional)</span>
                <textarea
                  rows={2}
                  className={`${fieldCls} resize-none`}
                  placeholder="e.g., Leave at the reception, Ring the doorbell..."
                  value={form.instructions}
                  onChange={set('instructions')}
                />
              </label>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-6 border-t border-[#E7E8E9] pt-8">
              <div className="relative h-[400px] overflow-hidden rounded-xl border border-[#E7E8E9] bg-panel">
                <MapPicker
                  center={DEFAULT_MAP_CENTER}
                  position={coords}
                  onPick={(lat, lng) => setCoords({ lat, lng })}
                />
                {/* Address search overlay (top) */}
                <div className="pointer-events-none absolute inset-x-8 top-4 z-[500] flex items-center gap-3 rounded-lg border border-[#E7E8E9] bg-canvas px-4 py-2 shadow-cta">
                  <MapPin className="h-4 w-4 shrink-0 text-cocoa" />
                  <span className="truncate text-base text-ink">
                    {form.address || 'Cityland Pioneer, Pioneer St, Mandaluyong'}
                  </span>
                  <span className="ml-auto h-3.5 w-3.5 shrink-0 rounded-full bg-brand-red" />
                </div>
                {/* Coord footer */}
                <div className="absolute inset-x-0 bottom-0 z-[500] flex items-center justify-center gap-2 border-t border-[#E7E8E9] bg-panel/90 py-2 text-base text-cocoa">
                  <MapPin className="h-3.5 w-3.5" />
                  Pin: {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)} — drag or
                  tap the map to adjust
                </div>
              </div>

              {/* Scheduling block — only in 'schedule' mode */}
              {mode === 'schedule' && (
                <div className="flex flex-col gap-6 border-t border-[#E7E8E9] pt-8">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-red" />
                    <h3 className="text-lg font-bold text-ink">
                      Delivery Schedule
                    </h3>
                  </div>

                  {/* Select Date */}
                  <div className="flex flex-col gap-2">
                    <span className={labelCls}>Select Date</span>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {days.map((d) => {
                        const active = d.id === day
                        return (
                          <button
                            key={d.id}
                            onClick={() => setDay(d.id)}
                            className={`flex shrink-0 flex-col items-center rounded-lg border px-6 py-3 ${
                              active
                                ? 'border-brand-red bg-brand-red/[0.06] text-brand-red'
                                : 'border-[#E7E8E9] bg-canvas text-ink'
                            }`}
                          >
                            <span className="text-base">{d.label}</span>
                            <span className="text-xs opacity-70">{d.sub}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Select Time Slot */}
                  <div className="flex flex-col gap-2">
                    <span className={labelCls}>Select Time Slot</span>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {slots.map((s) => {
                        const active = s.id === slot
                        return (
                          <button
                            key={s.id}
                            onClick={() => setSlot(s.id)}
                            className={`rounded-lg border px-4 py-4 text-base ${
                              active
                                ? 'border-brand-red bg-brand-red/[0.06] text-ink'
                                : 'border-[#E7E8E9] bg-canvas text-ink hover:border-brand-red/40'
                            }`}
                          >
                            {s.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Branch selector */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Store className="h-4 w-4 text-brand-red" />
                  <h3 className="text-lg font-bold text-ink">Branch</h3>
                </div>
                <span className={labelCls}>
                  Select a branch for pickup or delivery:
                </span>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {branches.map((b) => {
                    const active = b.id === branch
                    return (
                      <button
                        key={b.id}
                        onClick={() => setBranch(b.id)}
                        className={`flex items-center gap-3 rounded-lg border p-4 text-left ${
                          active
                            ? 'border-brand-red bg-panel'
                            : 'border-[#E7E8E9] bg-canvas'
                        }`}
                      >
                        <span
                          className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border ${
                            active ? 'border-brand-red bg-brand-red' : 'border-[#6B7280]'
                          }`}
                        >
                          {active && (
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          )}
                        </span>
                        <span className="flex flex-col">
                          <span className="text-base text-ink">{b.name}</span>
                          <span className="text-base text-cocoa">{b.distance}</span>
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="flex flex-col gap-6 rounded-xl border border-hair bg-canvas p-8 shadow-card">
            <div className="flex items-center gap-3 border-b border-[#E7E8E9] pb-4">
              <CreditCard className="h-5 w-5 text-brand-red" />
              <h2 className="text-lg font-bold text-ink">Payment Method</h2>
            </div>

            {paymentMethods.map((opt) => {
              const active = opt.id === payment
              return (
                <button
                  key={opt.id}
                  onClick={() => setPayment(opt.id)}
                  className={`flex items-start gap-4 rounded-xl border p-4 text-left ${
                    active ? 'border-brand-red bg-brand-red/[0.04]' : 'border-[#E7E8E9]'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      active ? 'border-brand-red bg-brand-red' : 'border-cocoa/60'
                    }`}
                  >
                    {active && <span className="h-2 w-2 rounded-full bg-white" />}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-ink">{opt.title}</span>
                    <span className="text-base text-cocoa">{opt.desc}</span>
                  </span>
                </button>
              )
            })}
          </section>
        </div>

        {/* RIGHT: order summary (sticky) */}
        <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-96">
          <div className="flex flex-col gap-4 rounded-xl border border-[#E7E8E9] bg-canvas p-6 shadow-cta">
            <h2 className="border-b border-[#E7E8E9] pb-4 text-lg font-bold text-ink">
              Order Summary
            </h2>

            {/* Items */}
            <div className="flex max-h-64 flex-col gap-4 overflow-y-auto pr-2">
              {lines.map((line) => {
                const image = imageFor(line.id)
                return (
                  <div key={line.id} className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded bg-[#E1E3E4]">
                        {image ? (
                          <img src={image} alt={line.name} className="h-full w-full object-cover" />
                        ) : (
                          <Placeholder label={line.name} />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base text-ink">{line.name}</span>
                        <span className="text-base text-cocoa">Qty: {line.qty}</span>
                      </div>
                    </div>
                    <span className="shrink-0 text-base text-ink">
                      {peso(line.price * line.qty)}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Totals */}
            <div className="flex flex-col gap-3 border-t border-[#E7E8E9] pt-6">
              <div className="flex justify-between text-base text-cocoa">
                <span>Subtotal</span>
                <span>{peso(subtotal)}</span>
              </div>
              <div className="flex justify-between text-base text-cocoa">
                <span>Delivery Fee</span>
                <span>{peso(delivery)}</span>
              </div>
              <div className="flex justify-between text-base text-cocoa">
                <span>VAT (incl. 12%)</span>
                <span>{peso(vatIncluded)}</span>
              </div>
              <div className="flex justify-between border-t border-dashed border-hair pt-3">
                <span className="text-lg font-bold text-ink">Total</span>
                <span className="text-lg font-bold text-brand-red">{peso(grandTotal)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={placeOrder}
              disabled={!canPlace}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-brand-bright text-base font-bold text-white shadow-cta transition hover:bg-brand-red disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Lock className="h-4 w-4" />
              Place Order
            </button>
            <p className="px-2 text-center text-base text-cocoa opacity-75">
              By placing your order, you agree to Andok’s Terms of Service. (Demo
              — no payment is processed.)
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
