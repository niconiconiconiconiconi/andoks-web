// AUTO-GENERATED from live Andok's menu API (andoksdelivery.com.ph).
// Source: GET /p/api/s/v2/brand_venues/{token}/menu/list + /menu/categories/{id}
// Prices in PHP (converted from cents). Descriptions fall back to dummy where API had none.
// Refresh: re-run the scraper; cart/checkout live on a separate page (next session).

// Official Andok's logo (mascot + wordmark), saved locally from
// andoksdelivery.com.ph's apple-touch-icon. Imported so Vite resolves the URL
// under the configured base path. Wordmark is baked in, so screens can show
// the image alone without a separate text label.
import andoksLogo from './assets/andoks-logo.webp'
export const brand = { name: "Andok's", logo: andoksLogo }

export const topNavLinks = [
  { label: 'Menu', href: '#', active: true },
  { label: 'Orders', href: '#orders' },
]

export const categories = [
  {
    "id": "new-product",
    "label": "New Product",
    "icon": "flame",
    "active": true
  },
  {
    "id": "favorites",
    "label": "Favorites",
    "icon": "flame"
  },
  {
    "id": "affordameals",
    "label": "Affordameals",
    "icon": "utensils"
  },
  {
    "id": "rice-toppings",
    "label": "Rice Toppings",
    "icon": "rice"
  },
  {
    "id": "bundles",
    "label": "Bundles",
    "icon": "utensils"
  },
  {
    "id": "merienda",
    "label": "Merienda",
    "icon": "salad"
  },
  {
    "id": "extra",
    "label": "Extra",
    "icon": "salad"
  },
  {
    "id": "softdrinks",
    "label": "Softdrinks",
    "icon": "cup"
  },
  {
    "id": "beer",
    "label": "Beer",
    "icon": "cup"
  },
  {
    "id": "m2-tea",
    "label": "M2 Tea",
    "icon": "cup"
  },
  {
    "id": "juice",
    "label": "Juice",
    "icon": "cup"
  },
  {
    "id": "water",
    "label": "Water",
    "icon": "cup"
  }
]

export const featured = {
  "id": "WFRKEI",
  "badge": "Best Seller",
  "name": "Litson Manok",
  "description": "Our signature charcoal-grilled whole chicken, marinated in our secret heritage spice blend. Juicy on the inside, perfectly crisp on the outside.",
  "price": 439,
  "image": "https://images.tablevibestaticassets.co/qj805hubo66c8kr1thqw339utsaw"
}

export const products = [
  {
    "id": "UBRJVSVAHOCODLP",
    "category": "new-product",
    "name": "Shrimpura",
    "price": 150,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/itxbbs9np6029x62sumiywrdjlqz",
    "tag": "★ 5.0"
  },
  {
    "id": "WFRKEI",
    "category": "favorites",
    "name": "Litson Manok",
    "price": 439,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/qj805hubo66c8kr1thqw339utsaw",
    "badge": "Save 12%",
    "tag": "★ 4.6"
  },
  {
    "id": "MBURDP",
    "category": "favorites",
    "name": "Liempo",
    "price": 385,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/e8roymg0d3knadyh5xopchtejkwa",
    "badge": "Save 7%",
    "tag": "★ 4.55"
  },
  {
    "id": "YXWJNE",
    "category": "favorites",
    "name": "Litson Baka",
    "price": 495,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/ba09env5gs2b25cr2k6ef45t98iq",
    "badge": "Save 7%",
    "tag": "★ 4.56"
  },
  {
    "id": "MVNMSR",
    "category": "favorites",
    "name": "Litson Bangus",
    "price": 259,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/pu733rfg5ocj0uq6peqsbjb5o14w",
    "badge": "Save 6%",
    "tag": "★ 4.67"
  },
  {
    "id": "RVXNNW",
    "category": "favorites",
    "name": "Chicken Ala Bone",
    "price": 138,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/omzg83dcjg4wieerevaa6sf229av",
    "badge": "Save 15%",
    "tag": "★ 4.63"
  },
  {
    "id": "YAHHNB",
    "category": "favorites",
    "name": "Pork BBQ (Kasim) Sticks (3pcs)",
    "price": 163,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/3xycki2tvq4qisdguelw6z6stm7n",
    "badge": "Save 2%",
    "tag": "★ 4.35"
  },
  {
    "id": "KMFVNJ",
    "category": "favorites",
    "name": "Pork BBQ (Liempo) Sticks (3pcs)",
    "price": 163,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/07dupvth2fs5lyildfwg2edtrvvi",
    "badge": "Save 2%",
    "tag": "★ 4.48"
  },
  {
    "id": "DJJGNG",
    "category": "favorites",
    "name": "Dokito Box",
    "price": 495,
    "description": "6 pcs. Dokito Frito",
    "image": "https://images.tablevibestaticassets.co/hwv48orm2fxgivjwleen2e9jusj7",
    "badge": "Save 7%",
    "tag": "★ 4.66"
  },
  {
    "id": "WQJNAX",
    "category": "affordameals",
    "name": "Dokito Meal",
    "price": 111,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/1aauve1fg5x3h07ifuxev3coqpty",
    "badge": "Save 4%",
    "tag": "★ 4.25"
  },
  {
    "id": "WYCVMS",
    "category": "affordameals",
    "name": "Dokito Hot & Spicy Meal",
    "price": 111,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/hs148odv8jh3bryu52wcg57jlseo",
    "badge": "Save 4%",
    "tag": "★ 4.0"
  },
  {
    "id": "STPKOP",
    "category": "affordameals",
    "name": "Doki2Legs Meal",
    "price": 111,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/f6ugd78x3l44xii46kjjuj35h280",
    "badge": "Save 4%",
    "tag": "★ 3.8"
  },
  {
    "id": "UTVGOO",
    "category": "affordameals",
    "name": "Doki2Legs Hot & Spicy Meal",
    "price": 111,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/siqlogx305x90ptippgprmij6j64",
    "badge": "Save 4%",
    "tag": "★ 3.85"
  },
  {
    "id": "YTICQN",
    "category": "affordameals",
    "name": "Porkcharap Meal",
    "price": 115,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/qtg49a8joqrdefm8jwbeuhck5gb0",
    "badge": "Save 5%",
    "tag": "★ 4.22"
  },
  {
    "id": "IRVZOI",
    "category": "affordameals",
    "name": "Pork BBQ (Kasim) Meal",
    "price": 133,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/14sxn5j2i7qluxq96huknnyfwl64",
    "tag": "★ 5.0"
  },
  {
    "id": "ICEEZB",
    "category": "affordameals",
    "name": "BBQ Liempo Meal",
    "price": 134,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/llrfr7153fl9nqwxeqv4iwcgk237",
    "badge": "Save 1%",
    "tag": "★ 4.39"
  },
  {
    "id": "IXABWD",
    "category": "affordameals",
    "name": "Chicken Ala Bone Meal",
    "price": 163,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/lhy4sipny0zlhaiue8g4andu4yl6",
    "tag": "★ 4.24"
  },
  {
    "id": "ULFXOKVOPEONAVZ",
    "category": "rice-toppings",
    "name": "Dokibab Rice",
    "price": 103,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/i2p4to14j35mmvb50b6yb62e6n0l",
    "badge": "Save 15%",
    "tag": "★ 4.71"
  },
  {
    "id": "IGZQRV",
    "category": "bundles",
    "name": "Salu-Salo Meal A",
    "price": 959,
    "description": "1 pc. Litson Manok, 1 pc. Liempo, 3 pcs. Rice, 1 pc. Coke 1.5L",
    "image": "https://images.tablevibestaticassets.co/gwqcudkaan6xr7d3eqarhq9bkq56",
    "badge": "Save 10%",
    "tag": "★ 4.47"
  },
  {
    "id": "WRACBE",
    "category": "bundles",
    "name": "Salu-Salo Meal B",
    "price": 630,
    "description": "Dokito Box (6 pcs. Dokito Frito), 3 pcs. Rice, 1 pc. Pepsi 1.5L",
    "image": "https://images.tablevibestaticassets.co/8e23kn50dy6s5qc1kgy62fd5adyv",
    "tag": "★ 4.38"
  },
  {
    "id": "JBAMWD",
    "category": "bundles",
    "name": "Salu-Salo Meal C",
    "price": 574,
    "description": "1pc. Litson Manok, 3 pcs. Rice, 1 pc. Pepsi 1.5L",
    "image": "https://images.tablevibestaticassets.co/lexbtgjo0gayx1h0dbsd89nv2ldy",
    "tag": "★ 4.41"
  },
  {
    "id": "ODAXUA",
    "category": "bundles",
    "name": "Salu-Salo Meal D",
    "price": 580,
    "description": "Dokito Box (6 pcs. Dokito Frito), 1  pc. Coke 1.5L",
    "image": "https://images.tablevibestaticassets.co/wco7a2tq8b92iy5wk9otvmcuc46k",
    "tag": "★ 4.32"
  },
  {
    "id": "VDTFQZ",
    "category": "merienda",
    "name": "Dokito Burger",
    "price": 103,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/a8r1co6wqp9rq3rgym6iju6kzpa8",
    "badge": "Save 2%",
    "tag": "★ 4.67"
  },
  {
    "id": "VCRTOV",
    "category": "merienda",
    "name": "Spicy Dokito Burger",
    "price": 103,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/0ufuc1p1dvtrjb5bimi493herxde",
    "badge": "Save 2%",
    "tag": "★ 4.57"
  },
  {
    "id": "PTPXBUUQAAXDHNE",
    "category": "merienda",
    "name": "Leche Flan",
    "price": 46,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/jc4dnz8b9c443t6bj6yfd74ocoxe"
  },
  {
    "id": "ZFVGEVINASMVLZL",
    "category": "merienda",
    "name": "Leche Flan Big 240ml",
    "price": 150,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/4utqhboo0r6h32sn06zl1ssclyfr",
    "tag": "★ 5.0"
  },
  {
    "id": "FJPOGZ",
    "category": "extra",
    "name": "Steamed Rice",
    "price": 18,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/ks4asq4tvm2y72izr41i56o41x2p",
    "badge": "Save 10%",
    "tag": "★ 5.0"
  },
  {
    "id": "SUETTN",
    "category": "extra",
    "name": "Litson Sauce",
    "price": 6,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/y0eybj1qm0plj644jfuby8kwj6p9",
    "badge": "Save 40%"
  },
  {
    "id": "CFMSQS",
    "category": "extra",
    "name": "Litson Spicy Sauce",
    "price": 6,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/errymcm6cxbksc0zu5rmi61gxez2",
    "badge": "Save 40%"
  },
  {
    "id": "QWFZXG",
    "category": "extra",
    "name": "Bangus Sauce",
    "price": 6,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/hmvle769szoit3gdbe76xlows5rp",
    "badge": "Save 40%"
  },
  {
    "id": "YDFFJK",
    "category": "extra",
    "name": "Vinegar Mixed",
    "price": 6,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/b8jc0jl52sanx6sw9n1bdxwjcezj",
    "badge": "Save 40%"
  },
  {
    "id": "OERISW",
    "category": "extra",
    "name": "Gravy Sauce",
    "price": 6,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/uf08dm7z7d92zvrni2oweso7x5yd",
    "badge": "Save 40%"
  },
  {
    "id": "YFIZRHBGGSQKEGM",
    "category": "extra",
    "name": "Shrimpura Extra Dip",
    "price": 10,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/h99reebk00istpvlpr69yksyd1dm"
  },
  {
    "id": "JNMTXU",
    "category": "extra",
    "name": "Chicharon",
    "price": 52,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/wv8zvxe3bvnmjdoqet5wz70d4np7"
  },
  {
    "id": "YLPOKD",
    "category": "extra",
    "name": "Spicy Chicharon",
    "price": 52,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/8g8vf8fjs7mxz2dd78z3ypmujalb",
    "tag": "★ 5.0"
  },
  {
    "id": "GDYKORKUPZVEHAE",
    "category": "extra",
    "name": "Dokibab Sauce Regular",
    "price": 12,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/tpeu7x6hvb7mp5ihvfoa14w4gua4"
  },
  {
    "id": "UAOZMDRAWPXLOKO",
    "category": "extra",
    "name": "Dokibab Sauce Spicy",
    "price": 12,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/wgvl9ppv5m9yzrkeg8qsb2362qr7"
  },
  {
    "id": "OLGRKXJMZNZRCOK",
    "category": "extra",
    "name": "Andok's Coconut Cooking Oil 500ml",
    "price": 137,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/11mvhevfaloyno1dg7kezp364kyc"
  },
  {
    "id": "MTFAMUIXDCPUMER",
    "category": "extra",
    "name": "Andok's Special Suka Spicy 500ml",
    "price": 114,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/xlftbu0impatjd9chka2jtf7di3n"
  },
  {
    "id": "HYWPTNANFPARODM",
    "category": "extra",
    "name": "Andok's Special Suka Sweet & Spicy 500ml",
    "price": 114,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/yri2uizli5afawu55aacu5w4ne0h"
  },
  {
    "id": "BMVRHQOVBHKWTJT",
    "category": "extra",
    "name": "Andok's Special Sukang Sinamak Spicy 500ml",
    "price": 114,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/xtky4gif2qkgdgpatib6u3xf0fro"
  },
  {
    "id": "PIXCMMBHKLAETHG",
    "category": "extra",
    "name": "Palm Oil 485ml",
    "price": 98,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/eismxedkxfictrrgp8dt765k38be"
  },
  {
    "id": "OMLSNFUAMHUEGSI",
    "category": "extra",
    "name": "Palm Oil 950ml",
    "price": 173,
    "description": "A house favorite, freshly prepared daily.",
    "image": "https://images.tablevibestaticassets.co/4zdg8uz6srqqjo8z7hqz8dfg2ll3"
  },
  {
    "id": "XGRPTC",
    "category": "softdrinks",
    "name": "Pepsi 1.5L",
    "price": 89,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/o5qodvxyaw9t0137g5hwqgzjpisp",
    "badge": "Save 4%"
  },
  {
    "id": "GAZSJU",
    "category": "softdrinks",
    "name": "Seven Up 1.5L",
    "price": 89,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/yvpgwqwi7n63b9jc2lplnt5cg9li",
    "badge": "Save 4%"
  },
  {
    "id": "RTFVWI",
    "category": "softdrinks",
    "name": "Coke 1.5L",
    "price": 90,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/88ry3hi9llftw2se6uff3jcw0wgr"
  },
  {
    "id": "LJMTOX",
    "category": "softdrinks",
    "name": "Sprite 1.5L",
    "price": 90,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/a1vul20g4cbnp9uaxnwnvz65ycn5"
  },
  {
    "id": "SFIFPM",
    "category": "softdrinks",
    "name": "Royal 1.5L",
    "price": 90,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/a0h81ylovk0lbsfyn96b9r0cg54j"
  },
  {
    "id": "IPMCPB",
    "category": "softdrinks",
    "name": "Coke Zero 1.5L",
    "price": 90,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/u2mcprpop9w0zyzedgeyv51mu2e2"
  },
  {
    "id": "UILRJI",
    "category": "softdrinks",
    "name": "Coke in Can",
    "price": 45,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/tm9yzsei3afx7050koi0qe8zkiqh"
  },
  {
    "id": "VVBLYP",
    "category": "softdrinks",
    "name": "Sprite in Can",
    "price": 45,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/8yzcme1gz0rttbdopsl277p1ptoz"
  },
  {
    "id": "URDLXZ",
    "category": "softdrinks",
    "name": "Royal in Can",
    "price": 45,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/knpvew95binolv7chytys0h0s1g9"
  },
  {
    "id": "ZRBFFV",
    "category": "softdrinks",
    "name": "Coke Zero in Can",
    "price": 45,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/apxbfsraghrwwcsjx9elg5s3scoc"
  },
  {
    "id": "MLOYHI",
    "category": "softdrinks",
    "name": "Mountain Dew in Can",
    "price": 45,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/d4uqtyhsor50boudyec3i603ia6h"
  },
  {
    "id": "SMAYYB",
    "category": "softdrinks",
    "name": "Coke Mismo",
    "price": 25,
    "description": "Ice-cold bottled softdrink.",
    "image": "https://images.tablevibestaticassets.co/jbmfqi6xs54vnydgzm1pf1af5iq3"
  },
  {
    "id": "MPJYADVHUVYVKBV",
    "category": "beer",
    "name": "Red Horse Super 1000ml",
    "price": 169,
    "description": "Chilled bottled beer.",
    "image": "https://images.tablevibestaticassets.co/rvxtbpawx9lz5afomjm56u1yljpa"
  },
  {
    "id": "OGGAOG",
    "category": "m2-tea",
    "name": "M2 Tea Drink 300ml",
    "price": 138,
    "description": "Milk tea, freshly shaken.",
    "image": "https://images.tablevibestaticassets.co/lfnqerg1cdq1c023y1s7u937ofn4"
  },
  {
    "id": "JSPMSI",
    "category": "m2-tea",
    "name": "M2 Tea Drink 1000ml",
    "price": 319,
    "description": "Milk tea, freshly shaken.",
    "image": "https://images.tablevibestaticassets.co/4z4li9pltd01b6cbmfj075beimd9",
    "tag": "★ 5.0"
  },
  {
    "id": "UXUBPX",
    "category": "m2-tea",
    "name": "M2 Tea Ready to drink 300ml",
    "price": 69,
    "description": "Milk tea, freshly shaken.",
    "image": "https://images.tablevibestaticassets.co/5osb4ogu9fckvng3qy3myfwimse7"
  },
  {
    "id": "UBSPHN",
    "category": "juice",
    "name": "Del Monte Pineapple",
    "price": 48,
    "description": "In Can",
    "image": "https://images.tablevibestaticassets.co/i9fmz2h7zbzxq8wwb3fvsxbrv2fc"
  },
  {
    "id": "XLRNQD",
    "category": "juice",
    "name": "C2 Apple 500ml",
    "price": 45,
    "description": "Refreshing fruit juice.",
    "image": "https://images.tablevibestaticassets.co/ia2t4ncr9yfaqm7q0vrsohfn08iy"
  },
  {
    "id": "EKCCWX",
    "category": "water",
    "name": "Andok's Purified Water 500ml",
    "price": 18,
    "description": "Purified bottled water.",
    "image": "https://images.tablevibestaticassets.co/jr4lsazjaedmfsxw8sycttftnwxn"
  }
]

// Build-Your-Own-Combo promo (Combo Promo screen only) — still a stub, no such API.
export const combo = {
  eyebrow: 'Limited Time Offer',
  title: 'Build Your Own Combo',
  description:
    'Pick a grilled favorite, a rice, and a drink for one bundled price. Mix, match, and save on every meal.',
  cta: 'Start Building',
  slots: [
    { id: 'main', label: 'Main', icon: 'drumstick' },
    { id: 'rice', label: 'Rice', icon: 'rice' },
    { id: 'drink', label: 'Drink', icon: 'cup' },
  ],
}

export const footerLinks = ['Privacy Policy', 'Terms of Service', 'Careers', 'Contact']
export const footerCopyright = "© 2026 Andok's Litson Corp. All rights reserved."

export const peso = (n) => `₱${n.toFixed(0)}`

// Hot Deals: derive the discount + struck-through "original" price from a
// "Save N%" badge. The API only gave us the discounted price + badge, so the
// original is reconstructed as price / (1 - N/100). Returns 0 / null when the
// product carries no savings badge.
export const savingsPct = (p) => {
  const m = /save\s+(\d+)/i.exec(p?.badge || '')
  return m ? Number(m[1]) : 0
}
export const originalPrice = (p) => {
  const pct = savingsPct(p)
  return pct ? Math.round(p.price / (1 - pct / 100)) : null
}

// ---------------------------------------------------------------------------
// DUMMY STUB — My Rewards screen. There is NO Andok's loyalty/rewards API;
// everything below is obviously fake demo data. Vouchers loosely map to real
// menu items (Extra Rice, a softdrink, a dessert, half Litson Manok). Swap
// freely. Points are plain integers rendered with a "pts" suffix (see rewardPts).
// ---------------------------------------------------------------------------
export const rewards = {
  member: {
    name: 'Juan Dela Cruz',
    memberId: 'ANDK-2024-0917',
    tier: 'Gold',
    memberSince: '2024',
  },
  // balance / nextRewardAt drives the hero progress bar. toNextReward is the
  // gap (nextRewardAt - balance), precomputed for copy.
  points: { balance: 1250, toNextReward: 250, nextRewardAt: 1500 },
  // Earn rate shown in the hero blurb: 10 pts for every ₱100 spent.
  earnRate: { points: 10, perPeso: 100 },
  // Redeemable now — cheap enough that balance covers them. Each is a "free
  // item" voucher: productId links to a real menu item in `products` so the
  // card can borrow that item's photo (see imageFor() in MyRewards).
  vouchers: [
    {
      id: 'v-rice',
      productId: 'FJPOGZ', // Steamed Rice
      title: 'Extra Rice',
      tag: 'Side',
      cost: 150,
      description: 'The perfect pairing for any Litson Manok.',
    },
    {
      id: 'v-soda',
      productId: 'UILRJI', // Coke in Can
      title: '16oz Soda',
      tag: 'Drink',
      cost: 200,
      description: 'Refresh your meal with a cool drink.',
    },
    {
      id: 'v-flan',
      productId: 'PTPXBUUQAAXDHNE', // Leche Flan
      title: 'Leche Flan',
      tag: 'Dessert',
      cost: 250,
      description: 'A sweet treat to finish your feast.',
    },
  ],
  // Aspirational hero reward — costs more than the current balance, so the
  // card shows progress toward it instead of a redeem button.
  featured: {
    id: 'v-litson',
    productId: 'WFRKEI', // Litson Manok
    badge: 'Top Tier',
    title: 'Free Half Litson Manok',
    description:
      'The ultimate reward for our most loyal fans. Enjoy our signature dish on the house.',
    cost: 5000,
  },
  // Points activity feed. type 'earn' (+, green) or 'redeem' (-, red).
  history: [
    { id: 'h1', date: 'Jul 01, 2026', type: 'earn', label: 'Points Earned', detail: "Andok's SM North EDSA", points: 120 },
    { id: 'h2', date: 'Jun 24, 2026', type: 'redeem', label: 'Reward Redeemed', detail: 'Extra Rice voucher', points: -150 },
    { id: 'h3', date: 'Jun 18, 2026', type: 'earn', label: 'Points Earned', detail: "Andok's Katipunan Ave", points: 200 },
    { id: 'h4', date: 'Jun 10, 2026', type: 'earn', label: 'Points Earned', detail: 'Online delivery order', points: 80 },
  ],
}

// Points formatter: whole integers with thousands separators + "pts" suffix.
export const rewardPts = (n) => `${Math.abs(n).toLocaleString('en-US')} pts`

// ---------------------------------------------------------------------------
// CHECKOUT — flat fee + VAT model (kept identical to CartSummary so totals
// match) and DUMMY scheduling data. Andok's has real slot endpoints, but we
// stub deterministic day/time arrays for the demo (no network, no key).
// ---------------------------------------------------------------------------
export const DELIVERY_FEE = 49 // flat, whole pesos — mirrors CartSummary

// Default map center: Makati CBD (matches the "Makati City" placeholder).
export const DEFAULT_MAP_CENTER = { lat: 14.5547, lng: 121.0244 }

// Nearby branch stubs for the pickup/delivery radio selector.
export const branches = [
  { id: 'makati', name: 'Andok’s Makati', distance: '0.8 km away' },
  { id: 'pioneer', name: 'Andok’s Pioneer', distance: '2.3 km away' },
  { id: 'mandaluyong', name: 'Andok’s Mandaluyong', distance: '3.1 km away' },
]

// Payment options for the checkout radio group (UI-only in the demo).
export const paymentMethods = [
  { id: 'cod', title: 'Cash on Delivery', desc: 'Pay with cash when your order arrives.' },
  { id: 'gcash', title: 'GCash', desc: 'You will be redirected to GCash to complete your payment.' },
  { id: 'card', title: 'Credit / Debit Card', desc: 'Securely pay with Visa, Mastercard, or JCB.' },
]

// Next 7 days as scheduling chips. Generated at call-time from the browser
// clock so "Today"/"Tomorrow" stay correct without a build step.
export const deliveryDays = () => {
  const days = []
  const now = new Date()
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  for (let i = 0; i < 7; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    days.push({
      id: d.toISOString().slice(0, 10),
      label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : wd[d.getDay()],
      sub: `${d.getDate()} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()]}`,
    })
  }
  return days
}

// 30-min slots 10:00–21:00, plus an ASAP option pinned first.
export const timeSlots = () => {
  const slots = [{ id: 'asap', label: 'ASAP (30–45 min)' }]
  for (let h = 10; h <= 21; h++) {
    for (const m of [0, 30]) {
      if (h === 21 && m === 30) continue
      const hr12 = ((h + 11) % 12) + 1
      const ampm = h < 12 ? 'AM' : 'PM'
      const mm = m === 0 ? '00' : '30'
      slots.push({ id: `${h}:${mm}`, label: `${hr12}:${mm} ${ampm}` })
    }
  }
  return slots
}
