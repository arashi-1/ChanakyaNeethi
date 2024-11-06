import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ChanakyaNeethi/", // Your base path for GitHub Pages
  build: {
    rollupOptions: {
      external: ["/src/main.jsx"], // Externalize the main.jsx file
    },
  },
});
