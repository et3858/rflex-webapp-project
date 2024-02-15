import { defineConfig, splitVendorChunkPlugin, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import buildOptions from './build_options';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer() as PluginOption,
  ],
  build: buildOptions,
});
