import { X } from 'lucide-react'
import { CategoryList } from './SideNav'

// Mobile-only slide-over (lg-). One drawer for everything: primary page links
// on top, category list below. Opened from TopNav's hamburger. Any selection
// closes the drawer. Selecting a category also jumps back to the menu page
// (see onSelectCat in App).
export default function MobileNav({ open, onClose, links = [], activeCat, onSelectCat }) {
  if (!open) return null

  const selectCat = (id) => {
    onSelectCat?.(id)
    onClose?.()
  }

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <aside className="absolute inset-y-0 left-0 flex w-72 max-w-[80%] flex-col gap-6 overflow-y-auto bg-panel p-6 shadow-card">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-cocoa hover:bg-black/5"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Primary page links */}
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold uppercase tracking-[0.4px] text-brand-red">
            Menu
          </h2>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => {
                l.onClick?.()
                onClose?.()
              }}
              className={
                l.active
                  ? 'flex h-11 items-center rounded-lg bg-brand-yellow px-3 text-base font-bold text-brand-gold shadow-card'
                  : 'flex h-11 items-center rounded-lg px-3 text-base text-cocoa hover:bg-black/5'
              }
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Categories */}
        <div className="flex flex-col gap-6 border-t border-[rgba(225,227,228,0.3)] pt-6">
          <CategoryList activeId={activeCat} onSelect={selectCat} />
        </div>
      </aside>
    </div>
  )
}
