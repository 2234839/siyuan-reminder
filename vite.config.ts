import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import monkey, { cdn } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match: ["*/*"],
      },
      build: {
        externalGlobals: {
          preact: cdn.jsdelivr("preact", "dist/preact.min.js"),
        },
      },
    }),
  ],
  server: {
    modify: (res, { url, req }) => {
      // 设置CSP头部
      res.setHeader(
        "Content-Security-Policy",
        " default-src *;",
      );
    },
  },
});
