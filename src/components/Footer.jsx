import { brand, footerLinks, footerCopyright } from '../data'

export default function Footer({ onOpenCareers }) {
  return (
    <footer className="bg-footer p-8 sm:p-12">
      <div className="mx-auto flex max-w-shell flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2">
          <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((l) =>
            l === 'Careers' ? (
              <button
                key={l}
                onClick={onOpenCareers}
                className="text-sm text-[#E1E3E4] opacity-80 hover:opacity-100"
              >
                {l}
              </button>
            ) : (
              <a key={l} href="#" className="text-sm text-[#E1E3E4] opacity-80 hover:opacity-100">
                {l}
              </a>
            ),
          )}
        </nav>

        <p className="text-sm text-[#E1E3E4] opacity-80">{footerCopyright}</p>
      </div>
    </footer>
  )
}
