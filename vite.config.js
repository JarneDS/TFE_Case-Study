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
        concept: resolve(__dirname, 'src/concept.html'),
        ressenti: resolve(__dirname, 'src/ressenti.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        credits: resolve(__dirname, 'src/credits.html')
      }
    }
  },
  server: {
    open: true
  }
});
