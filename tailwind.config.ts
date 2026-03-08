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
        'brand-green': '#3D7A38',
        'brand-green-light': '#4CAF50',
        'brand-dark': '#121212',
        'brand-darker': '#000000',
      },
    },
  },
  plugins: [],
}
export default config
