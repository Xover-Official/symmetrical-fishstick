import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0a0a0a',
        'brand-text': '#d4c6b9',
        'space-black': '#050505',
        'titanium': '#E5E5E7',
        'specialist-orange': '#FF6B35',
        'apple-blue': '#007AFF',
        'live-green': '#22C55E',
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
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
