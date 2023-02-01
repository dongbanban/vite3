/*
 * @FilePath: /click/Users/i104/vite3/vite.config.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolveRootPath } from './utils/path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: 'src', replacement: resolveRootPath('src') },
      { find: 'assets', replacement: resolveRootPath('src/assets') },
      { find: 'components', replacement: resolveRootPath('src/components') },
      { find: 'config', replacement: resolveRootPath('src/config') },
      { find: 'layout', replacement: resolveRootPath('src/layout') },
      { find: 'routes', replacement: resolveRootPath('src/routes') },
      { find: 'stores', replacement: resolveRootPath('src/stores') },
      { find: 'styles', replacement: resolveRootPath('src/styles') },
      { find: 'utils', replacement: resolveRootPath('src/utils') },
      { find: 'views', replacement: resolveRootPath('src/views') },
    ]
  },
  plugins: [react()],
  server: {
    hmr: {
      overlay: false // 禁止服务器错误遮罩
    },
    port: 8888,
    proxy: {
      // '/': {
      //   target: '',
      //   secure: false,
      //   changeOrigin: true
      // }
    }
  }
})
