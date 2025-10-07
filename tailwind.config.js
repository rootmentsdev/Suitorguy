/** @type {import('tailwindcss').Config} */
import tailwindcssRtl from 'tailwindcss-rtl';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        griffin: ['Griffin', 'sans-serif'],
        'helvetica-compressed': ['Helvetica Compressed', 'Arial', 'sans-serif'],
        'cabin': ['Cabin', 'Arial', 'sans-serif'],
      }, 
      screens: {
        'xs': '491px', // Custom breakpoint
        'tiny': { 'raw': '(max-width: 487px) and (max-height: 850px)' },
      },
      colors: {
        'royal-blue': '#0000FF',
      },
    },
  },
  plugins: [tailwindcssRtl], // Use imported module instead of require()
};
