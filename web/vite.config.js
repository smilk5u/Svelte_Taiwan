import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
    plugins: [sveltekit()],
    define: {
        //'import.meta.env.BASE_URL': JSON.stringify('https://web.southpaw.kr:11000'),
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://web.southpaw.kr:11000',
                changeOrigin: true
            },
            '/home': {
              target: 'http://web.southpaw.kr:11000',
              changeOrigin: true
            }
        }
    }
});
