import { MapPin, Briefcase, Mail, Phone, ChevronRight } from 'lucide-react'
import { careers } from '../data'

// Careers — jobs screen. All data is a labelled dummy stub (see data.js);
// "Apply" opens a mailto: to the fake recruitment inbox (no ATS, no form).
// Layout mirrors MyRewards: full-width max-w-shell <main>, no SideNav.

const { intro, contact, positions } = careers

const applyHref = (title) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(`Application: ${title}`)}`

function PositionCard({ p }) {
  return (
    <article className="flex flex-col rounded-lg border border-hair bg-white p-6 shadow-[0_2px_8px_rgba(25,28,29,0.04)]">
      <h3 className="text-xl font-bold leading-6 text-ink">{p.title}</h3>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-panel px-2 py-1 text-xs font-semibold text-cocoa">
          <MapPin className="h-3 w-3" />
          {p.location}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-yellow/20 px-2 py-1 text-xs font-bold text-brand-gold">
          <Briefcase className="h-3 w-3" />
          {p.type}
        </span>
      </div>

      <p className="mt-4 text-sm leading-5 text-cocoa">{p.desc}</p>

      <a href={applyHref(p.title)} className="mt-auto pt-6">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-bright px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red">
          Apply Now
          <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </a>
    </article>
  )
}

export default function Careers() {
  return (
    <main className="mx-auto flex max-w-shell flex-col gap-12 p-8 sm:p-12">
      {/* Hero */}
      <section className="flex flex-col gap-3 rounded-xl border border-hair bg-white p-8 shadow-[0_4px_12px_rgba(225,37,27,0.08)] lg:p-12">
        <h1 className="text-4xl font-extrabold tracking-[-0.96px] text-brand-bright">
          {intro.title}
        </h1>
        <p className="max-w-[640px] text-base leading-6 text-cocoa">{intro.blurb}</p>
      </section>

      {/* Open positions */}
      <section className="flex flex-col">
        <div className="flex flex-col gap-1 border-b border-hair pb-4">
          <h2 className="text-3xl font-bold leading-10 text-ink">Open Positions</h2>
          <p className="text-base text-cocoa">Find your place on the Andok’s team.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {positions.map((p) => (
            <PositionCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-xl border border-hair bg-panel p-8">
        <h2 className="text-2xl font-bold leading-8 text-ink">
          Questions? Talk to Recruitment
        </h2>
        <p className="mt-2 text-base text-cocoa">
          Don’t see a role that fits? Send us your résumé and we’ll keep you in mind.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-12">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-base text-ink hover:text-brand-red"
          >
            <Mail className="h-5 w-5 text-brand-bright" />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 text-base text-ink hover:text-brand-red"
          >
            <Phone className="h-5 w-5 text-brand-bright" />
            {contact.phone}
          </a>
        </div>

        <p className="mt-4 flex items-start gap-3 text-sm text-cocoa">
          <MapPin className="h-4 w-4 shrink-0 text-brand-bright" />
          {contact.address}
        </p>
      </section>
    </main>
  )
}
