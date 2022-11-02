/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // Extend Tailwind library
    extend: {
      colors: {
        twodayBlue: '#009ce9',
        twodayBlueHover: '#21b5ff',
        twodayGreen: '#00e277',
        twodayGrey: '#3c3c3c',
      },
    },
    // Overwrite Tailwind library
    borderRadius: {
      twodayBorder: '1.875rem', // 30px
    },
  },
  plugins: [],
};
