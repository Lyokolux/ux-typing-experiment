module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: [
		'*.cjs',
		'src/components/Blob/BlobsArrangement.svelte'
	],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	extends: "airbnb-base/legacy",
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		"no-unused-vars": "off",
		"no-undef-init": "off",
		"indent": ["error", 2],
		semi: ["error", "never"],
		"@typescript-eslint/no-unused-vars": ["error"]
	}
};
