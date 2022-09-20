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
        md: "768px",
        xl: "1110px",
        "2xl": "1110px",
      },
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        xl: "0",
      },
    },
  },
  plugins: [],
};
