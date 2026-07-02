import { Search, ShoppingCart, UserCircle2, Drumstick } from 'lucide-react'
import { brand, topNavLinks } from '../data'
import { useCart } from '../cart'

export default function TopNav({ onToggleView, viewLabel, onOpenMenu, onOpenCart, onOpenDeals, onOpenRewards, activePage = 'menu' }) {
  const { count } = useCart()

  // Map data-driven links to state routes: Menu -> menu page, Orders -> cart.
  const handleLink = (label) => {
    if (label === 'Orders') onOpenCart?.()
    else onOpenMenu?.()
  }
  const isActive = (label) =>
    (label === 'Orders' && activePage === 'cart') ||
    (label === 'Menu' && activePage === 'menu')

  const activeCls =
    'flex h-20 items-center border-b-2 border-brand-red text-base font-bold text-brand-red'
  const inactiveCls = 'text-base font-semibold text-cocoa hover:text-brand-red'

  return (
    <header className="sticky top-0 z-30 h-20 w-full bg-canvas shadow-card">
      <div className="mx-auto flex h-20 max-w-shell items-center justify-between px-4 sm:px-12">
        {/* Brand */}
        <button onClick={onOpenMenu} className="flex items-center gap-2">
          <Drumstick className="h-[18px] w-4 text-brand-bright" />
          <span className="text-2xl font-bold tracking-[-0.6px] text-brand-bright">
            {brand.name}
          </span>
        </button>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {topNavLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleLink(l.label)}
              className={isActive(l.label) ? activeCls : inactiveCls}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={onOpenDeals}
            className={activePage === 'deals' ? activeCls : inactiveCls}
          >
            Hot Deals
          </button>
          <button
            onClick={onOpenRewards}
            className={activePage === 'rewards' ? activeCls : inactiveCls}
          >
            Rewards
          </button>
        </nav>

        {/* Trailing icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Demo-only view toggle */}
          <button
            onClick={onToggleView}
            className="rounded-full border border-cocoa/30 px-3 py-1.5 text-xs font-semibold text-cocoa hover:bg-panel"
            title="Demo: switch layout"
          >
            {viewLabel}
          </button>

          <button className="rounded-full p-2 text-cocoa hover:bg-panel" aria-label="Search">
            <Search className="h-[18px] w-[18px]" />
          </button>

          <button onClick={onOpenCart} className="relative rounded-full p-2 text-cocoa hover:bg-panel" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full border-2 border-canvas bg-brand-bright px-1 text-[10px] font-bold leading-none text-white">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={onOpenRewards}
            className={`rounded-full p-2 hover:bg-panel ${
              activePage === 'rewards' ? 'text-brand-red' : 'text-cocoa'
            }`}
            aria-label="My Rewards"
          >
            <UserCircle2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
