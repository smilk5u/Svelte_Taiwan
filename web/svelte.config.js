import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
	},
	vite: {
		define: {
		  'process.env': dotenv.config().parsed,
		},
		hmr: {
			overlay: false,
		},
	  },
};

export default config;
