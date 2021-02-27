module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {    
    },
    fontFamily: {
      'react-font': ['"Indie Flower", cursive'],
      'subheading': ['"Open Sans", sans-serif'],
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
