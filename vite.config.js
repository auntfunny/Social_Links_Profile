import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/Social_Links_Profile/', 
  plugins: [
    tailwindcss(),
  ],
})