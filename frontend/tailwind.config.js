/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#06090E',
          900: '#0A0F17',
          800: '#111824',
          700: '#1B2436',
          600: '#27344D',
        },
        radar: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          crimson: '#EF4444',
          amber: '#F59E0B',
        },
        'dark-bg': '#0A0F17',
        'dark-card': '#111824',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 4s linear infinite',
      }
    },
  },
  plugins: [],
}

