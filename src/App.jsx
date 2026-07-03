import { useState, useMemo } from 'react'
import { CartProvider } from './cart'
import { products, categories } from './data'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import ComboPromo from './components/ComboPromo'
import SectionHeader from './components/SectionHeader'
import ProductCard from './components/ProductCard'
import ProductDetail from './components/ProductDetail'
import CartSummary from './components/CartSummary'
import Checkout from './components/Checkout'
import HotDeals from './components/HotDeals'
import MyRewards from './components/MyRewards'
import Careers from './components/Careers'
import Footer from './components/Footer'

export default function App() {
  const [view, setView] = useState('combo') // 'plain' | 'combo'
  const [activeCat, setActiveCat] = useState(categories[0]?.id)
  // Lightweight state-driven routing (no router installed).
  const [page, setPage] = useState({ name: 'menu', productId: null })
  const [navOpen, setNavOpen] = useState(false) // mobile category drawer
  const showCombo = view === 'combo'

  const shown = useMemo(
    () => products.filter((p) => p.category === activeCat),
    [activeCat],
  )
  const catLabel = categories.find((c) => c.id === activeCat)?.label ?? 'Menu'

  const openProduct = (productId) => {
    setPage({ name: 'product', productId })
    window.scrollTo({ top: 0 })
  }
  const openCart = () => {
    setPage({ name: 'cart', productId: null })
    window.scrollTo({ top: 0 })
  }
  const openMenu = () => setPage({ name: 'menu', productId: null })
  const openDeals = () => {
    setPage({ name: 'deals', productId: null })
    window.scrollTo({ top: 0 })
  }
  const openRewards = () => {
    setPage({ name: 'rewards', productId: null })
    window.scrollTo({ top: 0 })
  }
  const openCheckout = () => {
    setPage({ name: 'checkout', productId: null })
    window.scrollTo({ top: 0 })
  }
  const openCareers = () => {
    setPage({ name: 'careers', productId: null })
    window.scrollTo({ top: 0 })
  }

  // Selecting a category from the mobile drawer also returns to the menu page.
  const selectCategory = (id) => {
    setActiveCat(id)
    openMenu()
  }

  // Primary nav for the mobile drawer — mirrors TopNav's desktop links.
  const navLinks = [
    { label: 'Menu', onClick: openMenu, active: page.name === 'menu' },
    { label: 'Hot Deals', onClick: openDeals, active: page.name === 'deals' },
    { label: 'Rewards', onClick: openRewards, active: page.name === 'rewards' },
    { label: 'Careers', onClick: openCareers, active: page.name === 'careers' },
    { label: 'Orders', onClick: openCart, active: page.name === 'cart' },
  ]

  const activeProduct =
    page.name === 'product'
      ? products.find((p) => p.id === page.productId)
      : null

  return (
    <CartProvider>
      <div className="min-h-screen bg-canvas">
        <TopNav
          onToggleView={() => setView((v) => (v === 'combo' ? 'plain' : 'combo'))}
          viewLabel={showCombo ? 'View: Combo Promo' : 'View: Plain'}
          onOpenMenu={openMenu}
          onOpenCart={openCart}
          onOpenDeals={openDeals}
          onOpenRewards={openRewards}
          onOpenCareers={openCareers}
          onOpenNav={() => setNavOpen(true)}
          activePage={page.name}
        />

        <MobileNav
          open={navOpen}
          onClose={() => setNavOpen(false)}
          links={navLinks}
          activeCat={activeCat}
          onSelectCat={selectCategory}
        />

        {page.name === 'menu' && (
          <div className="mx-auto flex max-w-shell items-start">
            <SideNav activeId={activeCat} onSelect={setActiveCat} />

            <main className="flex flex-1 flex-col gap-6 p-4 sm:p-12">
              <Hero />

              {showCombo && <ComboPromo />}

              <SectionHeader title={catLabel} />

              <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {shown.map((p) => (
                  <ProductCard key={p.id} product={p} onOpen={() => openProduct(p.id)} />
                ))}
              </section>
            </main>
          </div>
        )}

        {page.name === 'product' && activeProduct && (
          <ProductDetail
            product={activeProduct}
            onBack={openMenu}
            onOpenProduct={openProduct}
          />
        )}

        {page.name === 'deals' && <HotDeals onOpenProduct={openProduct} />}

        {page.name === 'rewards' && <MyRewards />}

        {page.name === 'careers' && <Careers />}

        {page.name === 'cart' && (
          <CartSummary onBack={openMenu} onCheckout={openCheckout} />
        )}

        {page.name === 'checkout' && (
          <Checkout onBack={openCart} onBackToMenu={openMenu} />
        )}

        <Footer onOpenCareers={openCareers} />
      </div>
    </CartProvider>
  )
}
