import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#121212',
        'brand-text': '#E3C5A0',
        'gold-champagne': '#E3C5A0',
        'charcoal-deep': '#121212',
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
    },
  },
  plugins: [],
}
export default config
