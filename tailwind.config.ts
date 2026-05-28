import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crust: {
          50: '#fbf7f0',
          100: '#f6ecda',
          200: '#ecd9b5',
          300: '#dcbe85',
        },
        brick: {
          500: '#a23226',
          600: '#8b2a20',
          700: '#6e2018',
          800: '#4a1610',
        },
        charcoal: {
          700: '#2a2421',
          800: '#1c1815',
          900: '#100d0b',
        },
        basil: {
          500: '#3f6b3a',
          600: '#2f5230',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
