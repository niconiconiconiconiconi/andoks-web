/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Figma palette
        brand: {
          red: '#BB0004', // primary deep red
          bright: '#E1251B', // CTA red
          yellow: '#FDC003', // active tab / promo
          gold: '#6C5000', // dark yellow text
          goldmid: '#785900', // badge
        },
        ink: '#191C1D', // headings
        cocoa: '#5D3F3B', // body text
        canvas: '#F8F9FA', // page bg
        panel: '#F3F4F5', // sidebar / image bg
        hair: '#EDEEEF', // hairline border
        footer: '#2E3132',
      },
      boxShadow: {
        card: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        cta: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
      },
      maxWidth: {
        shell: '1280px',
      },
    },
  },
  plugins: [],
}
