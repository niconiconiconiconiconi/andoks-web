import { Star, Gift, Crown, ChevronRight, ChevronDown, SlidersHorizontal, Plus, Minus } from 'lucide-react'
import { rewards, rewardPts, products } from '../data'
import Placeholder from './Placeholder'

// Vouchers borrow the linked menu item's photo (free-item reward).
const imageFor = (productId) => products.find((p) => p.id === productId)?.image ?? null

// My Rewards — loyalty screen. All data is a labelled dummy stub (see data.js);
// redeem buttons are no-ops (no rewards API / no state mutation). Layout mirrors
// HotDeals: full-width max-w-shell <main>, no SideNav.

const { member, points, earnRate, vouchers, featured, history } = rewards

// Redeeming a voucher is a stub — surface a note, don't touch cart/points.
const stubRedeem = (title) =>
  window.alert(`Demo only — "${title}" would be redeemed here. No rewards API wired.`)

function VoucherCard({ v, balance }) {
  const affordable = balance >= v.cost
  const image = imageFor(v.productId)
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-hair bg-white shadow-[0_2px_8px_rgba(25,28,29,0.04)]">
      <div className="relative h-40 bg-hair">
        {image ? (
          <img src={image} alt={v.title} className="h-full w-full object-cover" />
        ) : (
          <Placeholder label={v.title} />
        )}
        <span className="absolute right-2 top-2 rounded bg-brand-bright px-2 py-1 text-xs font-bold uppercase tracking-[0.6px] text-white">
          {v.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold leading-5 text-ink">{v.title}</h3>
        <p className="mt-1 text-sm leading-5 text-cocoa">{v.description}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-2xl font-bold leading-8 text-brand-yellow">{rewardPts(v.cost)}</span>
          <button
            onClick={() => affordable && stubRedeem(v.title)}
            disabled={!affordable}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              affordable
                ? 'bg-[#E1E3E4] text-cocoa hover:bg-hair'
                : 'cursor-not-allowed bg-panel text-cocoa/40'
            }`}
          >
            {affordable ? 'Redeem' : 'Locked'}
          </button>
        </div>
      </div>
    </article>
  )
}

function FeaturedCard({ reward, balance }) {
  const pct = Math.min(100, Math.round((balance / reward.cost) * 100))
  const toGo = Math.max(0, reward.cost - balance)
  return (
    <article className="relative flex flex-col justify-between overflow-hidden rounded-lg bg-brand-bright p-6 text-white shadow-[0_8px_16px_rgba(225,37,27,0.15)]">
      {/* Oversized watermark icon, clipped in the corner */}
      <Gift className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 opacity-20" strokeWidth={1.5} />

      <div className="relative">
        <span className="inline-block rounded bg-brand-yellow px-2 py-1 text-xs font-bold uppercase tracking-[0.6px] text-brand-gold">
          {reward.badge}
        </span>
        <h3 className="mt-3 text-2xl font-bold leading-[30px]">{reward.title}</h3>
        <p className="mt-2 text-sm leading-5 text-white/80">{reward.description}</p>
      </div>

      <div className="relative mt-6 flex items-end justify-between gap-4">
        <span className="text-[32px] font-black leading-10 text-brand-yellow">
          {reward.cost.toLocaleString('en-US')}
        </span>
        <div className="flex w-20 flex-col gap-1">
          <span className="text-right text-xs font-bold uppercase tracking-[0.6px] text-white/75">
            {rewardPts(toGo)} to go
          </span>
          <div className="h-1.5 w-full rounded-full bg-white/20">
            <div className="h-full rounded-full bg-brand-yellow" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default function MyRewards() {
  const pct = Math.min(100, Math.round((points.balance / points.nextRewardAt) * 100))

  return (
    <main className="mx-auto flex max-w-shell flex-col gap-12 p-8 sm:p-12">
      {/* Hero — balance + progress to next reward */}
      <section className="flex flex-col gap-8 rounded-xl border border-hair bg-white p-8 shadow-[0_4px_12px_rgba(225,37,27,0.08)] lg:flex-row lg:items-center lg:gap-24 lg:p-12">
        <div className="flex flex-col lg:w-[220px] lg:shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.7px] text-cocoa">
              Rewards Balance
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-yellow/20 px-2 py-0.5 text-xs font-bold text-brand-gold">
              <Crown className="h-3 w-3" />
              {member.tier}
            </span>
          </div>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-5xl font-extrabold leading-[56px] tracking-[-0.96px] text-brand-bright">
              {points.balance.toLocaleString('en-US')}
            </span>
            <span className="text-2xl font-bold tracking-[-0.96px] text-brand-goldmid">pts</span>
          </div>

          <p className="mt-2 max-w-[448px] text-base leading-6 text-cocoa">
            You're craving more rewards! Earn {earnRate.points} points for every ₱
            {earnRate.perPeso} spent on your favorite char-grilled classics.
          </p>
        </div>

        {/* Progress panel */}
        <div className="w-full flex-1 rounded-lg bg-panel p-6">
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-[0.6px] text-cocoa">
                Next Reward
              </span>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-brand-yellow text-brand-yellow" />
                <span className="text-2xl font-bold leading-8 text-brand-yellow">
                  {points.nextRewardAt.toLocaleString('en-US')}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-bold uppercase tracking-[0.6px] text-cocoa">
                You Need
              </span>
              <span className="text-base font-bold leading-5 text-ink">
                {rewardPts(points.toNextReward)}
              </span>
            </div>
          </div>

          <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-[#E1E3E4]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-bright to-[#FFC107]"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.6px] text-cocoa">
              {rewardPts(points.balance)}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.6px] text-cocoa">
              {rewardPts(points.nextRewardAt)}
            </span>
          </div>
        </div>
      </section>

      {/* Rewards grid */}
      <section className="flex flex-col">
        <div className="flex items-end justify-between gap-4 border-b border-hair pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold leading-10 text-ink">Redeem Your Points</h2>
            <p className="text-base text-cocoa">Turn your points into free Andok's favorites.</p>
          </div>
          <button className="flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-bright hover:underline">
            View All Rewards
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {vouchers.map((v) => (
            <VoucherCard key={v.id} v={v} balance={points.balance} />
          ))}
          <FeaturedCard reward={featured} balance={points.balance} />
        </div>
      </section>

      {/* Points history */}
      <section className="overflow-hidden rounded-xl border border-hair bg-white shadow-[0_4px_12px_rgba(25,28,29,0.04)]">
        <div className="flex items-center justify-between border-b border-hair bg-panel/50 px-6 py-5">
          <h2 className="text-2xl font-bold leading-8 text-ink">Points History</h2>
          <button className="rounded-full p-2 text-cocoa hover:bg-panel" aria-label="Filter history">
            <SlidersHorizontal className="h-[18px] w-[18px]" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-[#E1E3E4]">
                <th className="px-6 py-4 text-sm font-semibold text-cocoa">Date</th>
                <th className="px-6 py-4 text-sm font-semibold text-cocoa">Activity</th>
                <th className="px-6 py-4 pl-12 text-sm font-semibold text-cocoa">Details</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-cocoa">Points</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h) => {
                const earn = h.type === 'earn'
                return (
                  <tr key={h.id} className="border-t border-hair">
                    <td className="px-6 py-5 text-base text-cocoa">{h.date}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            earn ? 'bg-[#DCFCE7]' : 'bg-[#FEE2E2]'
                          }`}
                        >
                          {earn ? (
                            <Plus className="h-2.5 w-2.5 text-[#15803D]" strokeWidth={3} />
                          ) : (
                            <Minus className="h-2.5 w-2.5 text-brand-bright" strokeWidth={3} />
                          )}
                        </span>
                        <span className="text-base text-ink">{h.label}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 pl-12 text-base text-cocoa">{h.detail}</td>
                    <td
                      className={`px-6 py-5 text-right text-base font-semibold ${
                        earn ? 'text-[#16A34A]' : 'text-brand-bright'
                      }`}
                    >
                      {earn ? '+' : '−'}
                      {Math.abs(h.points).toLocaleString('en-US')}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center border-t border-hair px-6 py-4">
          <button className="flex items-center gap-1 text-sm font-semibold text-brand-bright hover:underline">
            View Full History
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>
    </main>
  )
}
