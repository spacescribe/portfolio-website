import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
  base: '/portfo/', // e.g. '/portfolio/'
  build: {
    outDir: 'docs', // 👈 this is the key change
  },
})
