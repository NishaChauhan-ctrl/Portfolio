import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',   // 👈 very important for GitHub Pages!
  plugins: [react()]
})
