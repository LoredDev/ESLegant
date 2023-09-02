/**
 * @file
 * Configuration object that adds necessary plugins for the other objects.
 * See more info on the configs type declaration file.
 * @license MIT
 * @author Guz013 <contact.guz013@gmail.com> (https://guz.one)
 */

import tsESLint from '@typescript-eslint/eslint-plugin';
// eslint-disable-next-line import/no-relative-parent-imports
import { jsFiles, tsFiles } from '../constants.js';
import unicornPlugin from 'eslint-plugin-unicorn';
// @ts-expect-error because the package doesn't export correct types
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
				'./*/{ts,js}config{.eslint,}.json',
				'./*/*/{ts,js}config{.eslint,}.json',
			],
			tsconfigRootDir: process.env.ESLEGANT_ROOT ?? process.cwd(),
		},
	},
	plugins: {
		'@typescript-eslint': tsESLint,
		'import': importPlugin,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		'jsdoc': jsdocPlugin,
		// @ts-expect-error because eslint-plugin-unicorn doesn't export correct types
		'unicorn': unicornPlugin,
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
		'jsdoc/mode': 'typescript',
	},
};
export default config;