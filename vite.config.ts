import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/olimpbet-event-buddy/',
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
  // 👇 Добавь вот это
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  // 👇 Это важно для GitHub Pages
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
