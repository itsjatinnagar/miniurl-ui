/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        success: "#349b4a",
        error: "#d63438",
        primary: {
          DEFAULT: "#0C0CF0",
          50: "#010118",
          100: "#020231",
          200: "#050561",
          300: "#070792",
          400: "#0A0AC2",
          500: "#0C0CF0",
          600: "#3D3DF5",
          700: "#6D6DF8",
          800: "#9E9EFA",
          900: "#CECEFD",
          950: "#E6E6FE",
        },
      },
    },
  },
  plugins: [],
};
