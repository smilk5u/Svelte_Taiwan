import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
            // this will match a file
            'my-file': 'path/to/my-file.js',

            // this will match a directory and its contents
            // (`my-directory/x` resolves to `path/to/my-directory/x`)
            'my-directory': 'path/to/my-directory',

            // an alias ending /* will only match
            // the contents of a directory, not the directory itself
            'my-directory/*': 'path/to/my-directory/*'
        }
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
