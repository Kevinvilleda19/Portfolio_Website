import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust this if deploying to a subdirectory
  resolve: {
    alias: {
      '@': '/src', // Optional: Add an alias for cleaner imports
    },
  },
  server: {
    open: true, // Automatically opens the browser on server start
  },
});
