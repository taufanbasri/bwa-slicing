module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'play': ['"Playfair Display"', 'serif'],
        'assistant': ['"Assistant"', 'sans-serif']
      },
      colors: {
        primary: {
          100: "#cdd2db",
          200: "#9ca4b8",
          300: "#6a7794",
          400: "#394971",
          500: "#071c4d",
          600: "#06163e",
          700: "#04112e",
          800: "#030b1f",
          900: "#01060f"
        },
        secondary: {
          100: "#ffecdd",
          200: "#ffd8ba",
          300: "#ffc598",
          400: "#ffb175",
          500: "#ff9e53",
          600: "#cc7e42",
          700: "#995f32",
          800: "#663f21",
          900: "#332011"
},
      }
    },
  },
  plugins: [],
}
