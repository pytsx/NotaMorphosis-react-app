import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react()],
})

export default config

export const buildConfig = {
  build: {
    chunkSizeWarningLimit: 1000, // definido em kilobytes
  },
  // outras opções de configuração aqui
};