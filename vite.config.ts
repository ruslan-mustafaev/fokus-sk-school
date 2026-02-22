import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readdirSync, statSync, cpSync, mkdirSync, existsSync } from 'fs';

function copyPublicFilesPlugin() {
  return {
    name: 'copy-public-safe',
    enforce: 'post' as const,
    closeBundle() {
      const publicDir = resolve(__dirname, 'public');
      const outDir = resolve(__dirname, 'dist');
      function copyDir(src: string, dest: string) {
        if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
        for (const entry of readdirSync(src)) {
          if (entry.includes(' ')) continue;
          const srcPath = resolve(src, entry);
          const destPath = resolve(dest, entry);
          try {
            if (statSync(srcPath).isDirectory()) {
              copyDir(srcPath, destPath);
            } else {
              cpSync(srcPath, destPath);
            }
          } catch {}
        }
      }
      copyDir(publicDir, outDir);
    },
  };
}

export default defineConfig({
  plugins: [react(), copyPublicFilesPlugin()],
  publicDir: false,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
