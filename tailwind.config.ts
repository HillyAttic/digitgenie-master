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
        primary: '#625DF5',
        'gray-1': '#F8F9FF',
        'gray-3': '#E5E5E5',
        body: '#637381',
        black: '#101828',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      zIndex: {
        '9999': '9999',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
export default config