import { resolve } from "path";
import { defineConfig } from "vite";
import { Catagories } from "./src/js/api";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        food: resolve(__dirname, "src/food-list.html"),
        Catagories: resolve(__dirname, "src/catagories.html"),
        eat: resolve(__dirname, "src/food-page.html"),
        quote: resolve(__dirname, "/api/qotd")
      },
    },
    
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://favqs.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('/^\/api', '/api')
      }
    }
  }

});
