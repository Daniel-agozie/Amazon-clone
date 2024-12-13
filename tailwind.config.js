const { Height } = require('@mui/icons-material');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens :{
      'sm': '300px',
      'md': '600px',
      'lg': '900px',
      'xl': '1200px',
      '2xl':'1500px',
    },
    extend: {
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        sliderightto: 'slideright 0.5s',
        sliderightto1: 'slideright 0.8s linear',
        sliderightto2: 'slideright 1.2s linear',
        sliderightto3: 'slideright 1.4s linear',
        sliderightto4: 'slideright 1.6s linear',
        sliderightto5: 'slideright 2s linear',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
        rotate: 'rotate 1s linear',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        sliderightto: {
          '0%': {  transform: 'translateX(300%)' },
          '100%': {  transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        rotate:{
          '100%': {transform: 'rotateZ(360deg)'}
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
