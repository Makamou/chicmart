import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/chicmart",
  //server proxy configuration to use /api/products instead of http://localhost:3000/api/products
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
      "/images": {
        target: "http://localhost:3000",
      },
    },
  },
  build: {
    outDir: "../ecommerce-backend/dist",
  },
});
