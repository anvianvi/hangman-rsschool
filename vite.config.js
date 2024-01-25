import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  base: '/hangman-rsschool/',
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
}