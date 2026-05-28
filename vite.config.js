import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // เพิ่มการนำเข้า tailwind

export default defineConfig({
  plugins: [react(), tailwindcss()], // ใส่ tailwind ในช่อง plugins
})