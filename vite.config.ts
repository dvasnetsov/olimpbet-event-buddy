import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic", // включаем старый JSX runtime, чтобы React был виден
    }),
  ],
  base: "/olimpbet-event-buddy/", // важно для GitHub Pages
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
    jsxInject: `import React from 'react'`, // заставляет React автоматически подхватываться
  },
});
