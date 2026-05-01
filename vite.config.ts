import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TableflowUI",
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "@tanstack/react-table"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});