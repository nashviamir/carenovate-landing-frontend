import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3CD7',
          50: '#eff2ff',
          100: '#dce3ff',
          200: '#b0c2ff',
          300: '#7b98ff',
          400: '#466aff',
          500: '#0F3CD7',
          600: '#0825a1',
          700: '#051978',
          800: '#03104f',
          900: '#010626',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;