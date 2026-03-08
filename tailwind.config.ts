import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#9B59B6',
        'brand-purple-light': '#A855F7',
        'brand-dark': '#1A1A1E',
        'brand-darker': '#0D0D0F',
      },
    },
  },
  plugins: [],
}
export default config
