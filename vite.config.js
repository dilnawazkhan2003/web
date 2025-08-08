import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/web/',    // Add this line — your repo name as subpath
  plugins: [react()],
})
