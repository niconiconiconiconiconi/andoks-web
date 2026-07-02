import { Drumstick } from 'lucide-react'
import { brand, footerLinks, footerCopyright } from '../data'

export default function Footer() {
  return (
    <footer className="bg-footer p-8 sm:p-12">
      <div className="mx-auto flex max-w-shell flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Drumstick className="h-[18px] w-4 text-white" />
          <span className="text-2xl font-bold text-white">{brand.name}</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((l) => (
            <a key={l} href="#" className="text-sm text-[#E1E3E4] opacity-80 hover:opacity-100">
              {l}
            </a>
          ))}
        </nav>

        <p className="text-sm text-[#E1E3E4] opacity-80">{footerCopyright}</p>
      </div>
    </footer>
  )
}
