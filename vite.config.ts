import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {spawn} from 'child_process';
import {existsSync} from 'fs';

const PHP_PORT = 8081;

// Starts `php -S` for public/ alongside `vite dev` so /api/*.php works without Apache.
function phpDevServer(): Plugin {
  return {
    name: 'php-dev-server',
    apply: 'serve',
    configureServer(server) {
      const phpBin = existsSync('C:/xampp/php/php.exe') ? 'C:/xampp/php/php.exe' : 'php';
      const child = spawn(phpBin, ['-S', `localhost:${PHP_PORT}`, '-t', path.resolve(__dirname, 'public')], {
        stdio: 'ignore',
      });
      child.on('error', () => console.warn('[php-dev-server] could not start PHP; /api will not work'));
      server.httpServer?.on('close', () => child.kill());
      process.on('exit', () => child.kill());
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), phpDevServer()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // In dev, PHP endpoints are served by the PHP built-in server (see phpDevServer below).
      proxy: {
        '/api': { target: `http://localhost:${PHP_PORT}`, changeOrigin: true },
        '/catalogue': { target: `http://localhost:${PHP_PORT}`, changeOrigin: true },
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
