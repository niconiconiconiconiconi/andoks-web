import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  // items: { [id]: { id, name, price, qty } }
  const [items, setItems] = useState({})

  const add = (product, qty = 1) =>
    setItems((prev) => {
      const existing = prev[product.id]
      return {
        ...prev,
        [product.id]: {
          id: product.id,
          name: product.name,
          price: product.price,
          qty: (existing?.qty ?? 0) + qty,
        },
      }
    })

  const remove = (id) =>
    setItems((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })

  // Set absolute quantity; qty <= 0 removes the line.
  const setQty = (id, qty) =>
    setItems((prev) => {
      if (!prev[id]) return prev
      if (qty <= 0) {
        const next = { ...prev }
        delete next[id]
        return next
      }
      return { ...prev, [id]: { ...prev[id], qty } }
    })

  const clear = () => setItems({})

  const count = useMemo(
    () => Object.values(items).reduce((sum, i) => sum + i.qty, 0),
    [items],
  )

  const total = useMemo(
    () => Object.values(items).reduce((sum, i) => sum + i.qty * i.price, 0),
    [items],
  )

  const value = { items, add, remove, setQty, clear, count, total }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
