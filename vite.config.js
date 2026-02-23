import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/zeptomail': {
        target: 'https://api.zeptomail.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/zeptomail/, ''),
      },
      '/api/bookings': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
