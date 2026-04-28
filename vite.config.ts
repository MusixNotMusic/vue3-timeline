import { defineConfig } from 'vite'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from '@vitejs/plugin-vue'
import postcssPresetEnv from "postcss-preset-env";
import dts from 'vite-plugin-dts'
import pkg from './package.json'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'packages',
      outDir: 'dist',
      insertTypesEntry: true,
      cleanVueFileName: true,
      tsconfigPath: './tsconfig.json',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: pkg.name,
      fileName: (format) => `vue3-timeline-bar.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // 把不想打包进你的包的包排除掉
      external: ["vue", "element-plus", "events", "dayjs"],
      output: {
        exports: 'named',
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name?.endsWith('.css')) {
            return 'style.css';
          }
          return chunkInfo.name || 'assets/[name]-[hash][extname]';
        },
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "events": "EventEmitter",
          "dayjs": "dayjs",
          "element-plus": "ElementPlus",
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [postcssPresetEnv()],
    }
  }
})
