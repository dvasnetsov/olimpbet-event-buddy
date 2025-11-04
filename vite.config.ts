import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Конфигурация Vite для корректной сборки и деплоя на GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/olimpbet-event-buddy/', // важно для GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 5173,
    open: true,
  },
})
