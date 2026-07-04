import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        'bg-soft': '#F5F3FF',
        ink: '#181433',
        'ink-soft': '#635F7D',
        primary: {
          DEFAULT: '#6D28D9',
          lt: '#8B5CF6',
        },
        accent: {
          DEFAULT: '#16A34A',
          lt: '#22C55E',
        },
        line: '#E7E3F5',
        'card-bg': '#FFFFFF',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
