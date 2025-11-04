import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Конфигурация Vite для GitHub Pages
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // 👈 заставляем явно импортировать React
    }),
  ],
  base: '/olimpbet-event-buddy/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
})
