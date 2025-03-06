/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
       extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
      colors:{
          primary:"oklch(0.577 0.245 27.325)",
          dark:"#111111",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        },
      },
    },
  },
  plugins: [],
}

