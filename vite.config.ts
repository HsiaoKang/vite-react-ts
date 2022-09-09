import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": "/src/",
    },
  },
  build: {
    target: ["chrome64", "edge79", "firefox62", "safari11"],
    minify: false,
  },
});
