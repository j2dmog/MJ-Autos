/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Rectangle4: "url('/src/assets/Images/Homepage/Rectangle4.png')",
        Rectangle28: "url('/src/assets/Images/Homepage/Rectangle 28.png')",
        Group39469: "url('/src/assets/Images/Homepage/Group 39469.png')",
        Group10: "url('/src/assets/Images/Homepage/Group 10.png')",
        Group13: "url('/src/assets/Images/Homepage/Group 13.png')",
        Group14: "url('/src/assets/Images/Homepage/Group 14.png')",
      },
    },
    screens: {
      'xsm': '414px',
    }
  },
  plugins: [],
}
