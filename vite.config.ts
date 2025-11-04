import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Конфигурация Vite для корректной сборки и деплоя на GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/olimpbet-event-buddy/', // обязательно для GitHub Pages
  publicDir: 'public', // копировать публичные файлы (404.html)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    copyPublicDir: true, // ⚙️ принудительно копирует всё из public/
    rollupOptions: {
      onwarn(warning, warn) {
        // подавляем лишние предупреждения
        if (warning.code === 'UNRESOLVED_IMPORT') return
        warn(warning)
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
