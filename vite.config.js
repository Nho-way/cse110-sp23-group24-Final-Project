import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'about-us': resolve(__dirname, 'pages/about-us/index.html'),
                'instruction': resolve(__dirname, 'pages/instructions/index.html'),
                'select-cards': resolve(__dirname, 'pages/select-cards/index.html'),
                '8-ball-intro': resolve(__dirname, 'pages/8-ball-intro/index.html'), 
                'about-us-8-ball': resolve(__dirname, 'pages/about-us1/index.html'),
                'result': resolve(__dirname, 'pages/result-page/index.html'),
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
});
