// Stub for missing food photos. Renders a soft gradient panel with the item
// name so the demo reads clearly until real images are dropped in.
import { ImageIcon } from 'lucide-react'

export default function Placeholder({ label, className = '' }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-panel to-[#e9eb0d] text-cocoa/50 ${className}`}
      style={{ background: 'linear-gradient(135deg,#F3F4F5,#E6E0D8)' }}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      {label && (
        <span className="px-4 text-center text-xs font-semibold uppercase tracking-wide">
          {label}
        </span>
      )}
    </div>
  )
}
