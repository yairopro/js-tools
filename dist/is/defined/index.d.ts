/**
 * Tells if a value is defined.
 * @returns {boolean} True if input different from null or undefined.
 */
declare const isDefined: <T>(input: T) => input is Exclude<T, nil>;
export default isDefined;
export type nil = undefined | null;
