import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [legacy(), react(), tsconfigPaths()],
  server: {
    port: 5173,
    strictPort: false,
    https: false,
  },
  build: { target: "ESNext", outDir: "build" },
  preview: {
    port: 4173,
    strictPort: true,
    https: false,
  },
  envDir: path.resolve(__dirname, "environments"),
  envPrefix: "ENV_",
});
