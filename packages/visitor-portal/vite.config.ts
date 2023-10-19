import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    https: true,
    host: process.env.VISITOR_PORTAL_DEV_HOST,
    port: Number(process.env.VISITOR_PORTAL_DEV_PORT),
    proxy: {
      '/api': {
        target: `${process.env.VITE_BACKEND_URL}/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
