import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  root: "example",
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "react-component-library",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
        assetFileNames: "react-component-library.[ext]",
      },
    },
  },
})
