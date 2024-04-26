/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        success: "#349b4a",
        error: "#d63438",
        primary: "#0C0CF0",
        "primary-50": "#010118",
        "primary-100": "#020231",
        "primary-200": "#050561",
        "primary-300": "#070792",
        "primary-400": "#0A0AC2",
        "primary-500": "#0C0CF0",
        "primary-600": "#3D3DF5",
        "primary-700": "#6D6DF8",
        "primary-800": "#9E9EFA",
        "primary-900": "#CECEFD",
        "primary-950": "#E6E6FE",
      },
    },
  },
  plugins: [],
};
