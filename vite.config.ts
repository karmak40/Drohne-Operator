import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    // Порт задаётся окружением, чтобы не конфликтовать с другими дев-серверами.
    port: Number(process.env.PORT) || 5173,
    strictPort: Boolean(process.env.PORT),
  },
  build: {
    target: 'es2022',
    sourcemap: true,
  },
});
