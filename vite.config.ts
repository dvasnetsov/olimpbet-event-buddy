import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// ✅ Правильная конфигурация для GitHub Pages и React 18+
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic", // <-- важно: автоматически импортирует React
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
});
