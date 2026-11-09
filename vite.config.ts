import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from /<repository-name>/
  base: '/Article-preview-component/',
  plugins: [react(), svgr()],
})
