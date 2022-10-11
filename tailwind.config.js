/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'newsBreakmd': '500px',
        'homePhone': '450px',
        'tablet': '880px',
        'sm2': {'max': '480px'},
        'myXl': '1150px',
        '2xl': '1350px',
      },
    },
  },
  plugins: [],
};
