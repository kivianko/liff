import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // 本番時はgithubリポジトリをルートパスにする
  base: process.env.NODE_ENV === "production" ? "/liff/" : "./",
  resolve: {
    // @/ によるimportをできるようにする。
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  build: {
    outDir: "docs",
  },
  plugins: [vue()],
});
