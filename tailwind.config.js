/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1A1A1A',
        'brand-blue': '#1E10C7',
        'brand-orange': '#EE4E00',
        'brand-light': '#EBEBEB',
        'brand-beige': '#F5F1E8',
      },
      fontFamily: {
        'handwriting': ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
