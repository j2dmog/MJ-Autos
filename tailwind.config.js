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
      '2xsm': {'max': '414px'},
      'xsm' : {'min' : '415px', 'max' : '639px'},
      'sm' : {'min' : '640px', 'max' : '767px'},
      'md' : {'min' : '768px', 'max' : '1023px'},
      'lg' : {'min' : '1024px', 'max' : '1279px'},
      'xl' : {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    }
  },
  plugins: [],
}
