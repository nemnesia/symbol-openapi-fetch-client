import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isMinify = mode === 'production';
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'SymbolOpenApiFetchClient',
        formats: ['es', 'cjs', 'umd'] as const,
        fileName: (format) => `symbol-openapi-fetch-client.${format}${isMinify ? '.min' : ''}.js`,
      },
      outDir: 'dist/browser',
      target: 'es2018',
      emptyOutDir: false,
      sourcemap: true,
      minify: isMinify,
    },
  };
});
