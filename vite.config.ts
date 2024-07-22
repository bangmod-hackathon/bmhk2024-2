import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import eslint from 'vite-plugin-eslint2'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    optimizeDeps: {
      include: []
    },
    build: {
      commonjsOptions: {
        exclude: [],
        include: [/node_modules/]
      }
    },
    base: '/',
    plugins: [react(), eslint()],
    resolve: {
      alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }]
    },
    server: {
      port: 3000
    },
    preview: {
      host: '0.0.0.0',
      port: 8000
    }
  }
})
