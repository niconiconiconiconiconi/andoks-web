import { LogOut } from 'lucide-react'
import { categories } from '../data'
import Icon from './Icon'

export default function SideNav({ activeId, onSelect }) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col gap-6 self-stretch overflow-y-auto border-r border-[rgba(225,227,228,0.3)] bg-panel p-6 shadow-card lg:flex">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold uppercase tracking-[0.4px] text-brand-red">
          Categories
        </h2>
        <p className="text-sm text-cocoa">Fresh from the grill</p>
      </div>

      <nav className="flex flex-col gap-2">
        {categories.map((c) => {
          const active = c.id === activeId
          return (
            <button
              key={c.id}
              onClick={() => onSelect?.(c.id)}
              className={
                active
                  ? 'flex h-12 items-center gap-3 rounded-lg bg-brand-yellow px-3 shadow-card'
                  : 'flex h-12 items-center gap-3 rounded-lg px-3 hover:bg-black/5'
              }
            >
              <Icon
                name={c.icon}
                className={active ? 'h-[18px] w-[18px] text-brand-gold' : 'h-[18px] w-[18px] text-cocoa'}
              />
              <span
                className={
                  active
                    ? 'text-base font-bold text-brand-gold'
                    : 'text-base text-cocoa'
                }
              >
                {c.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Pinned to bottom */}
      <div className="mt-auto border-t border-[rgba(225,227,228,0.3)] pt-6">
        <button className="flex h-[50px] w-full items-center justify-center gap-2 rounded-full border border-[#926F69] px-4 text-base text-brand-red hover:bg-brand-red/5">
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
