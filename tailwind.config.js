/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        twodayBlue: '#009ce9',
        twodayBlueHover: '#21b5ff',
        twodayGrey: '#3c3c3c',
      },
      borderRadius: {
        '3xl': '1.875rem', // 30px
      },
    },
  },
  plugins: [],
};
