import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Ensure this matches exactly

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})