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
      gridtempelateRows :{
        "grid": "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
