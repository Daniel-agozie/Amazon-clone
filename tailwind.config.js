module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens :{
      sm: '480px',
      md: '575px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      gridtempelateColums :{
        'custom': '100px 1fr 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
