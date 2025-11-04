import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic", // гарантирует наличие React в рантайме
    }),
  ],
  base: "/olimpbet-event-buddy/", // обязательно для GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // автоматический импорт React
  },
});
