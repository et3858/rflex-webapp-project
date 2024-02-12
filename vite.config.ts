import { defineConfig, splitVendorChunkPlugin, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer() as PluginOption,
  ],
  build: {
    // cssMinify: false,
    chunkSizeWarningLimit: 1300, // in kilobytes
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // creating a chunk to 'ag-charts-react' deps. Reducing the vendor chunk size
          if (id.includes('ag-charts-react')) {
            return 'ag-charts-react';
          }

          if (id.includes('ag-grid-react')) {
            return 'ag-grid-react';
          }

          // One of the largest pieces of chunk to code-split
          if (id.includes("ag-charts-community")) {
            return 'ag-charts-community';
          }

          // One of the largest pieces of chunk to code-split
          if (id.includes("ag-grid-community")) {
            return 'ag-grid-community';
          }

          if (id.includes('rsuite')) {
            return 'rsuite';
          }

          // creating a chunk to redux deps. Reducing the vendor chunk size
          if (
            id.includes("@reduxjs/toolkit") ||
            id.includes("react-redux") ||
            id.includes("redux") ||
            id.includes("redux-persist") ||
            id.includes("redux-thunk")
          ) {
            return '@redux-things';
          }
        },
      },
    },
  },
})
