import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: "#ff9900",
        "amazon-dark": "#141B24",
        "amazon-background": "#eef3f9",
        "amazon-primary": "#ff9900",
        "amazon-secondary": "#ffb700",
        "amazon-blue": "#00a8e1"
      }
    },
  },
  darkMode:"class",
  plugins: [],
}
export default config
