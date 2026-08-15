import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// dev / preview はデモページ（demo/）を表示し、
// build はライブラリ（src/）を dist/ に出力する。
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "WireframeKit",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "wireframe-kit.js" : "wireframe-kit.cjs"),
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith(".css") ? "wireframe-kit.css" : "[name][extname]",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
