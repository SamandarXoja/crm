import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';


export default defineConfig({
  css: {
    postcss: './postcss.config.js',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  
    },
  },
});
