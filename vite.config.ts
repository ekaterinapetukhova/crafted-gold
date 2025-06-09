import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

const repoName = "crafted-gold";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  base: process.env.NODE_ENV === "production" ? `/${repoName}/` : "/",
});
