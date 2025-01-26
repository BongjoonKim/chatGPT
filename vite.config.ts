import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      formats: ['es'],
      name:"haries-chatgpt",
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  }
})
