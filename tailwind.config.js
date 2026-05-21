/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#2D2D2D',
        'brand-blue': '#1E10C7',
        'brand-orange': '#EE4E00',
        'brand-light': '#EBEBEB',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        'heading': ['Cygre', 'system-ui', 'sans-serif'],
        'body': ['Cygre', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'gradient': 'gradient 4s linear infinite',
        'color-flicker': 'colorFlicker 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        colorFlicker: {
          '0%, 100%': { color: '#EE4E00' },
          '33%':       { color: '#1E10C7' },
          '66%':       { color: '#FFFFFF' },
        },
      },
    },
  },
  plugins: [],
};