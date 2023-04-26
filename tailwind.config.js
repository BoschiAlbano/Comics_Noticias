module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(51,65,85)",
        myShadow2: "-4.1px -5px 0 0 rgb(51,65,85)",
      },
      colors: {
        Azul: 'rgb(38, 154, 189)',
        Fondo: 'rgb(51,65,85)'
      }
    },
  },
  plugins: [],
}