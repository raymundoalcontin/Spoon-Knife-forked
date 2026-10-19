import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import taildwindcss from "@taildwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), taildwindcss()],
})
