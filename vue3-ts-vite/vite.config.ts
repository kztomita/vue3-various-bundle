import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // .css,.jsとのassetsへのパスを./assetsにする
  base: './',
  build: {
    outDir: 'public',
  },

  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
})
