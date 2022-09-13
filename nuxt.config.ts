import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "tailwindcss/nesting": {},
          "postcss-import": {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
