import tsESLint from '@typescript-eslint/eslint-plugin';
import { jsFiles, tsFiles } from '../constants.js';
import tsParser from '@typescript-eslint/parser';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import importPlugin from 'eslint-plugin-i';
import process from 'node:process';

/** @type {import('eslint').Linter.FlatConfig} */
const config = {
	files: [...tsFiles, ...jsFiles],
	languageOptions: {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		parser: tsParser,
		parserOptions: {
			project: process.env.ESLEGANT_TSCONFIG ?? [
				'./{ts,js}config{.eslint,}.json',
				'./packages/*/{ts,js}config{.eslint,}.json',
				'./apps/*/{ts,js}config{.eslint,}.json',
			],
			tsconfigRootDir: process.env.ESLEGANT_ROOT ?? process.cwd(),
		},
	},
	plugins: {
		'@typescript-eslint': tsESLint,
		'import': importPlugin,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		'jsdoc': jsdocPlugin,
	},
	settings: {
		'import/extensions': [...tsFiles, ...jsFiles],
		'import/parsers': {
			'@typescript-eslint/parser': [...tsFiles, ...jsFiles ],
		},
		'import/resolver': {
			node: true,
			typescript: true,
		},
	},
};
export default config;
