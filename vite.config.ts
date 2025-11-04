import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic", // принудительно включаем старый JSX runtime
    }),
  ],
  base: "/olimpbet-event-buddy/",
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
    jsxInject: `import React from 'react'`, // это заставляет React подхватываться во всех компонентах
  },
});
