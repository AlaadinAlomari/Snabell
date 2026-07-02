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
        'bg-soft': '#F7F7F5',
        ink: '#10201E',
        'ink-soft': '#4B5D5A',
        primary: {
          DEFAULT: '#0F3D3E',
          lt: '#155C5D',
        },
        accent: {
          DEFAULT: '#D46B4F',
          lt: '#E88A6C',
        },
        line: '#E5E3DD',
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
