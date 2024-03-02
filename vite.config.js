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
      external: ["@observablehq/plot"],
      output: {
        globals: {
          "@observablehq/plot": "Plot"
        }
      },
    },
  },
})