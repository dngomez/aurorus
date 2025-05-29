import path from "path"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [
      "aurorus.dev.xyz",
      "aurorus.lucuma.xyz",
      "aurorus",
      "localhost",
      "127.0.0.1",
      "aurorus.cl",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
