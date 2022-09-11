/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1110px",
        "2xl": "1110px",
      },
    },
  },
  plugins: [],
};
