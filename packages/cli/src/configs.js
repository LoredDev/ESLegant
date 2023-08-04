
/** @type {import('./types').Config[]} */
export default [
	{
		name: 'framework',
		type: 'multiple',
		description: 'The UI frameworks being used in the project',
		manual: true,
		options: [
			{
				name: 'svelte',
				packages: { '@eslit/svelte': 'svelte' },
				rules: ['svelte.default'],
				detect: ['**/*.svelte', 'svelte.config.{js,ts,cjs,cts}'],
			},
			{
				name: 'vue',
				packages: { '@eslint/vue': 'vue' },
				rules: ['vue.default'],
				detect: ['nuxt.config.{js,ts,cjs,cts}', '**/*.vue'],
			},
		],
	},
];
