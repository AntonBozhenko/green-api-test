module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/self-closing-comp': ['error', {
			component: true,
			html: true,
		}],
		'react/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
		}],
	},
};
