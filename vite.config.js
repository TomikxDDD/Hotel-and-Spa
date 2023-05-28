/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
  
  plugins: [react()],
  // esbuild: {
  //   loader: 'jsx',
  //   include: /(src)\/.*\.jsx?$/,
  //   exclude: [],
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: { '.js': 'jsx' },
  //     plugins: [
  //       {
  //         name: 'load-js-files-as-jsx',
  //         setup(build) {
  //           build.onLoad(
  //             { filter: /(src)\/.*\.js$/ },
  //             async (args) => ({
  //               loader: 'jsx',
  //               contents: await fs.readFile(args.path, 'utf8'),
  //             })
  //           );
  //         },
  //       },
  //     ],
  //   },
  // }
})


