/*
 * @FilePath: /Users/i104/vite3/vite.config.js
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
      { find: 'enum', replacement: resolveRootPath('src/enum') },
      { find: 'layout', replacement: resolveRootPath('src/layout') },
      { find: 'routes', replacement: resolveRootPath('src/routes') },
      { find: 'stores', replacement: resolveRootPath('src/stores') },
      { find: 'styles', replacement: resolveRootPath('src/styles') },
      { find: 'utils', replacement: resolveRootPath('src/utils') },
      { find: 'views', replacement: resolveRootPath('src/views') },
    ]
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // 解决打包时Some chunks are larger警告
        // eslint-disable-next-line consistent-return
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        }
      }
    }
  },
  esbuild: {
    treeShaking: true,
    drop: ['debugger', 'console']
  },
  plugins: [react()],
  server: {
    hmr: {
      overlay: false // 禁止服务器错误遮罩
    },
    port: 8888,
    // proxy: {
    //   '/test0': {
    //     target: 'https://www.baidu.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api\/test0/, ''),
    //   }
    // }
  }
})
