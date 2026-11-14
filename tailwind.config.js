/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#150307',
          900: '#25070f',
          850: '#340a15',
          800: '#430d1c',
          700: '#5c1228',
          600: '#791836',
          500: '#9b2046',
        },
        champagne: {
          100: '#fdf9f0',
          200: '#faefd9',
          300: '#f4dec0',
          400: '#e8c591',
          500: '#d4af37',
          600: '#b89025',
          glow: '#ffd875'
        },
        blush: {
          50: '#fff7f8',
          100: '#ffeef1',
          200: '#ffdbe3',
          300: '#ffbcc9',
          400: '#ff8da3',
          500: '#ff5c7d',
        },
        ivory: '#fcfaf7'
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatRev 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backgroundImage: {
        'romantic-radial': 'radial-gradient(circle at 50% 30%, rgba(121, 24, 54, 0.4) 0%, rgba(37, 7, 15, 0.85) 65%, #150307 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(253, 230, 138, 0.25), transparent)',
      }
    },
  },
  plugins: [],
}
