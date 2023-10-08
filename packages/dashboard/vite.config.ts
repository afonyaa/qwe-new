import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
      '@containers': resolve(__dirname, './src/containers'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
  server: {
    port: Number(process.env.DASHBOARD_PORT),
  },
});
