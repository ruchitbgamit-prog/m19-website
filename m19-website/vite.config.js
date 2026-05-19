import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  root: __dirname,
  publicDir: path.join(__dirname, "public"),
  server: {
    port: 5175,
    strictPort: false,
    open: false,
  },
});
