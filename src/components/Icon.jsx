// Maps stub icon keys -> lucide-react icons. Figma only showed colored boxes,
// so these are best-guess-by-context. Swap freely.
import {
  Flame,
  UtensilsCrossed,
  Soup,
  Salad,
  CupSoda,
  Drumstick,
  CookingPot,
} from 'lucide-react'

const MAP = {
  flame: Flame,
  utensils: UtensilsCrossed,
  soup: Soup,
  salad: Salad,
  cup: CupSoda,
  drumstick: Drumstick,
  rice: CookingPot,
}

export default function Icon({ name, ...props }) {
  const Cmp = MAP[name] ?? Flame
  return <Cmp {...props} />
}
