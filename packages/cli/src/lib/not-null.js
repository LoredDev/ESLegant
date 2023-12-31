// eslint-disable-next-line no-secrets/no-secrets
/**
 * JSDoc types lack a non-null assertion.
 * @template T
 * @param {T} value - The value which to assert against null or undefined.
 * @returns {NonNullable<T>} The said value.
 * @throws {TypeError} If the value is unexpectedly null or undefined.
 * @see https://github.com/Microsoft/TypeScript/issues/23405#issuecomment-873331031
 * @see https://github.com/Microsoft/TypeScript/issues/23405#issuecomment-1249287966
 * @author Jimmy Wärting - https://github.com/jimmywarting
 */
export default function notNull(value) {
	// Use `==` to check for both null and undefined
	if (value === null || value === undefined)
		throw new Error('did not expect value to be null or undefined');
	return value;
}
