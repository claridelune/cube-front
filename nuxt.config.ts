import { fileURLToPath, URL } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,

  alias: {
    "@": "./src",
  },
  css: ["/src/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: ["@/components"],
  dir: {
    layouts: "./src/layouts",
    pages: "./src/pages",
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
});
