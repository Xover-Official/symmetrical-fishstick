import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#050505',
        'brand-text': '#E5E5E7',
        'gold-champagne': '#E5E5E7',
        'charcoal-deep': '#050505',
        'space-black': '#050505',
        'titanium': '#E5E5E7',
        'specialist-orange': '#FF6B35',
        'apple-blue': '#007AFF',
        'live-green': '#22C55E',
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
        'ultra-wide': '0.4em',
      },
      padding: {
        'double': '4rem',
        'triple': '8rem',
      },
      spacing: {
        'fib-1': '8px',
        'fib-2': '13px',
        'fib-3': '21px',
        'fib-4': '34px',
        'fib-5': '55px',
        'fib-6': '89px',
        'fib-7': '144px',
        'fib-8': '233px',
        'fib-9': '377px',
        'fib-10': '610px',
      },
    },
  },
  plugins: [],
}
export default config
