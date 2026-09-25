import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
    plugins: [react(), tailwindcss()],
    base: mode === 'production' ? '/inkflow-web/' : '/',
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src'),
        },
    },
}));
