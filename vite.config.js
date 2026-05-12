import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/projets/TFE_Case-Study/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        credits: resolve(__dirname, 'src/credits.html')
      }
    }
  },
  server: {
    open: true
  }
});
