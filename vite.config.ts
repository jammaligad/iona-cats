import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const URL = process.env.VITE_BASE_URL || "http://127.0.0.1:5000";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const config = {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          // target: `${process.env.VITE_BASE_URL}:${process.env.FRONTEND_PORT}`,
          target: URL,
          changeOrigin: true,
          secure: false,
          ws: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
  return defineConfig(config);
};
