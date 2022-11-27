const { sveltePreprocess } = require('svelte-preprocess/dist/autoProcess');
const autoprefixer = require('autoprefixer');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	// "svelteOptions": {
	//   "preprocess": import("../svelte.config.js").preprocess
	// },
	svelteOptions: {
		preprocess: sveltePreprocess({
			postcss: {
				plugins: [autoprefixer()]
			},
			babel: {
				presets: [
					[
						'@babel/preset-env',
						{
							loose: true,
							// No need for babel to resolve modules
							modules: false,
							targets: {
								// ! Very important. Target es6+
								esmodules: true
							}
						}
					]
				]
			}
		})
	}
	// "features": {
	//   "storyStoreV7": true
	// }
};
