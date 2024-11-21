// vite.config.ts
import { defineConfig } from "file:///D:/_workspace/vue3-timeline/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///D:/_workspace/vue3-timeline/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/_workspace/vue3-timeline/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/_workspace/vue3-timeline/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import vue from "file:///D:/_workspace/vue3-timeline/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import postcssPresetEnv from "file:///D:/_workspace/vue3-timeline/node_modules/postcss-preset-env/dist/index.mjs";

// package.json
var package_default = {
  name: "@cdyw/vue3-timeline-bar",
  author: "MusixNotMusic<https://github.com/MusixNotMusic>",
  private: false,
  version: "1.0.12",
  main: "dist/vue3-timeline-bar.umd.js",
  module: "dist/vue3-timeline-bar.es.js",
  exports: {
    "./dist/style.css": "./dist/style.css",
    ".": {
      import: "./dist/@cdyw/vue3-timeline-bar.es.js",
      require: "./dist/@cdyw/vue3-timeline-bar.umd.js"
    }
  },
  type: "module",
  repository: {
    type: "git",
    url: "https://github.com/MusixNotMusic/vue3-timeline"
  },
  files: [
    "dist"
  ],
  license: "MIT",
  keywords: [
    "vue3",
    "element-plus",
    "timeline",
    "animation"
  ],
  scripts: {
    dev: "vite",
    build: "vite build",
    preview: "vite preview"
  },
  dependencies: {
    "@cdyw/vue3-timeline-bar": "^1.0.10",
    "element-plus": "^1.1.0-beta.24",
    events: "^3.3.0",
    jquery: "^3.6.0",
    moment: "^2.29.4",
    sass: "^1.77.4",
    vue: "^3.2.45"
  },
  devDependencies: {
    "@vitejs/plugin-vue": "^4.0.0",
    less: "^4.1.3",
    postcss: "^8.4.21",
    "postcss-preset-env": "^8.0.1",
    typescript: "^4.9.3",
    "unplugin-auto-import": "^0.14.3",
    "unplugin-vue-components": "^0.24.0",
    vite: "^4.1.0",
    "vue-tsc": "^1.0.24"
  }
};

// vite.config.ts
import path from "path";
var __vite_injected_original_dirname = "D:\\_workspace\\vue3-timeline";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  build: {
    emptyOutDir: false,
    // 避免dist被清空
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "packages/index.js"),
      name: package_default.name,
      fileName: (format) => `${package_default.name}.${format}.js`
    },
    rollupOptions: {
      // 把不想打包进你的包的包排除掉
      external: ["vue", "element-plus"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "element-plus": "elementPlus"
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcX3dvcmtzcGFjZVxcXFx2dWUzLXRpbWVsaW5lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxfd29ya3NwYWNlXFxcXHZ1ZTMtdGltZWxpbmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L193b3Jrc3BhY2UvdnVlMy10aW1lbGluZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBwb3N0Y3NzUHJlc2V0RW52IGZyb20gXCJwb3N0Y3NzLXByZXNldC1lbnZcIjtcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLCAvLyBcdTkwN0ZcdTUxNERkaXN0XHU4OEFCXHU2RTA1XHU3QTdBXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3BhY2thZ2VzL2luZGV4LmpzJyksXG4gICAgICBuYW1lOiBwa2cubmFtZSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgJHtwa2cubmFtZX0uJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFx1NjI4QVx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NEY2MFx1NzY4NFx1NTMwNVx1NzY4NFx1NTMwNVx1NjM5Mlx1OTY2NFx1NjM4OVxuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiLCBcImVsZW1lbnQtcGx1c1wiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICAgIFwiZWxlbWVudC1wbHVzXCI6IFwiZWxlbWVudFBsdXNcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbcG9zdGNzc1ByZXNldEVudigpXSxcbiAgICB9XG4gIH1cbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJAY2R5dy92dWUzLXRpbWVsaW5lLWJhclwiLFxuICBcImF1dGhvclwiOiBcIk11c2l4Tm90TXVzaWM8aHR0cHM6Ly9naXRodWIuY29tL011c2l4Tm90TXVzaWM+XCIsXG4gIFwicHJpdmF0ZVwiOiBmYWxzZSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjEyXCIsXG4gIFwibWFpblwiOiBcImRpc3QvdnVlMy10aW1lbGluZS1iYXIudW1kLmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiZGlzdC92dWUzLXRpbWVsaW5lLWJhci5lcy5qc1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLi9kaXN0L3N0eWxlLmNzc1wiOiBcIi4vZGlzdC9zdHlsZS5jc3NcIixcbiAgICBcIi5cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvQGNkeXcvdnVlMy10aW1lbGluZS1iYXIuZXMuanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9AY2R5dy92dWUzLXRpbWVsaW5lLWJhci51bWQuanNcIlxuICAgIH1cbiAgfSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vTXVzaXhOb3RNdXNpYy92dWUzLXRpbWVsaW5lXCJcbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0XCJcbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwidnVlM1wiLFxuICAgIFwiZWxlbWVudC1wbHVzXCIsXG4gICAgXCJ0aW1lbGluZVwiLFxuICAgIFwiYW5pbWF0aW9uXCJcbiAgXSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjZHl3L3Z1ZTMtdGltZWxpbmUtYmFyXCI6IFwiXjEuMC4xMFwiLFxuICAgIFwiZWxlbWVudC1wbHVzXCI6IFwiXjEuMS4wLWJldGEuMjRcIixcbiAgICBcImV2ZW50c1wiOiBcIl4zLjMuMFwiLFxuICAgIFwianF1ZXJ5XCI6IFwiXjMuNi4wXCIsXG4gICAgXCJtb21lbnRcIjogXCJeMi4yOS40XCIsXG4gICAgXCJzYXNzXCI6IFwiXjEuNzcuNFwiLFxuICAgIFwidnVlXCI6IFwiXjMuMi40NVwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl40LjAuMFwiLFxuICAgIFwibGVzc1wiOiBcIl40LjEuM1wiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMjFcIixcbiAgICBcInBvc3Rjc3MtcHJlc2V0LWVudlwiOiBcIl44LjAuMVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl40LjkuM1wiLFxuICAgIFwidW5wbHVnaW4tYXV0by1pbXBvcnRcIjogXCJeMC4xNC4zXCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI0LjBcIixcbiAgICBcInZpdGVcIjogXCJeNC4xLjBcIixcbiAgICBcInZ1ZS10c2NcIjogXCJeMS4wLjI0XCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5USxTQUFTLG9CQUFvQjtBQUN0UyxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxzQkFBc0I7OztBQ0w3QjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLEVBQ1gsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsU0FBVztBQUFBLElBQ1Qsb0JBQW9CO0FBQUEsSUFDcEIsS0FBSztBQUFBLE1BQ0gsUUFBVTtBQUFBLE1BQ1YsU0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFRO0FBQUEsRUFDUixZQUFjO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixLQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsT0FBUztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFXO0FBQUEsRUFDWCxVQUFZO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULFNBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2QsMkJBQTJCO0FBQUEsSUFDM0IsZ0JBQWdCO0FBQUEsSUFDaEIsUUFBVTtBQUFBLElBQ1YsUUFBVTtBQUFBLElBQ1YsUUFBVTtBQUFBLElBQ1YsTUFBUTtBQUFBLElBQ1IsS0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2pCLHNCQUFzQjtBQUFBLElBQ3RCLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLHNCQUFzQjtBQUFBLElBQ3RCLFlBQWM7QUFBQSxJQUNkLHdCQUF3QjtBQUFBLElBQ3hCLDJCQUEyQjtBQUFBLElBQzNCLE1BQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxFQUNiO0FBQ0Y7OztBRC9DQSxPQUFPLFVBQVU7QUFQakIsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGFBQWE7QUFBQTtBQUFBLElBQ2IsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsTUFDbEQsTUFBTSxnQkFBSTtBQUFBLE1BQ1YsVUFBVSxDQUFDLFdBQVcsR0FBRyxnQkFBSSxRQUFRO0FBQUEsSUFDdkM7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxDQUFDLE9BQU8sY0FBYztBQUFBLE1BQ2hDLFFBQVE7QUFBQTtBQUFBLFFBRU4sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
