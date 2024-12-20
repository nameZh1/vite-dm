import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 使用 loadEnv 来加载环境变量
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      proxy: {
        "/api": {
          target: env.VITE_PROXY_URL, // 使用 env
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: [
        {
          find: "@", // 别名
          replacement: resolve(__dirname, "src"), // 别名对应地址
        },
        {
          find: "components",
          replacement: resolve(__dirname, "src/components"),
        },
      ],
    },
    plugins: [
      vue(),
      copy({
        targets: [
          {
            src: "node_modules/@liveqing/liveplayer-v3/dist/component/liveplayer-lib.min.js",
            dest: "public/js",
          },
        ],
      }),
    ],
    define: {
      __APP_NAME__: JSON.stringify(env.VITE_APP_NAME), // 使用 env
    },
    assetsInclude: ["**/*.JPG"],
  };
});
