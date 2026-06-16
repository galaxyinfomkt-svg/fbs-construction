import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#e1bb37',
          dark: '#d4a017',
          light: '#f0d56b',
        },
        olive: {
          DEFAULT: '#5f5840',
          dark: '#43402f',
        },
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2b2b2b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-oswald)', 'Impact', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(0,0,0,0.25)',
        gold: '0 10px 30px -8px rgba(225,187,55,0.45)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
