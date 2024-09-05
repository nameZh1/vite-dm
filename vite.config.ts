import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 使用 loadEnv 来加载环境变量
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_PROXY_URL, // 使用 env
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: [
        {
          find: '@',                                   // 别名
          replacement: resolve(__dirname, 'src'),      // 别名对应地址
        },
        {
          find: 'components',
          replacement: resolve(__dirname, 'src/components'),
        },
      ],
    },
    plugins: [vue()],
    define: {
      __APP_NAME__: JSON.stringify(env.VITE_APP_NAME), // 使用 env
    },
  };
});
