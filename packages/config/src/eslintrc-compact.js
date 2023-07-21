import { FlatCompat } from '@eslint/eslintrc';
import javascript from '@eslint/js';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

// mimic CommonJS variables
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const eslintrc = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: javascript.configs.recommended,
	allConfig: javascript.configs.all,
});