// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'hrbrmod',
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        globals: {
          'https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm': "Plot"
        }
      },
    },
  },
})