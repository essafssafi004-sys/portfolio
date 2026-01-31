import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set the base path to your repository name for GitHub Pages (e.g., "/repo-name/")
  // If you use a custom domain or user page (username.github.io), set this to "/"
  base: mode === "production" ? (process.env.VITE_BASE ?? "/mirai-creative-lab/") : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
