import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [react(), mkcert()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
      '@containers': resolve(__dirname, './src/containers'),
      '@modules': resolve(__dirname, './src/modules'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
  server: {
    https: true,
    host: process.env.DASHBOARD_DEV_HOST,
    port: Number(process.env.DASHBOARD_DEV_PORT),
    proxy: {
      '/api': {
        target: `${process.env.VITE_BACKEND_URL}/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
