import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'anti_flash': '#E8E9EB',
        'flash': '#FEFFFE',
        'onyx': '#313638',
        'pear': '#CFD11A',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        mont: ['var(--font-mont)'],
        cormorant: ['var(--font-cormorant)'],
      },
    },
  },
  plugins: [],
}
export default config
