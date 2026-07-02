import { ChevronDown } from 'lucide-react'

export default function SectionHeader({ title, sortLabel = 'Popular' }) {
  return (
    <div className="flex items-end justify-between pt-6">
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <div className="flex items-center gap-2">
        <span className="text-base text-cocoa">{sortLabel}</span>
        <button className="flex items-center gap-1 text-base text-cocoa hover:text-brand-red">
          Sort by
          <ChevronDown className="h-2 w-2" strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
