/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'diary-pink': '#FF6B9D',
        'diary-purple': '#C77DFF',
        'diary-blue': '#4CC9F0',
        'diary-yellow': '#FFD93D',
        'diary-green': '#6BCF7F',
        'diary-peach': '#FFB5A7',
        'diary-lavender': '#E7C6FF',
        'diary-mint': '#B4F8C8',
        'diary-paper': '#FFF8E7',
        'diary-dark': '#2D1B3D',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'dots': 'radial-gradient(circle, #FF6B9D 1px, transparent 1px)',
        'lines': 'repeating-linear-gradient(0deg, transparent, transparent 25px, rgba(255, 107, 157, 0.1) 25px, rgba(255, 107, 157, 0.1) 26px)',
      },
    },
  },
  plugins: [],
};
