/**
 * Tells if a value is defined.
 * @param {*} value 
 * @returns {boolean} True if value different from null or undefined.
 */
module.exports = function isDefined(value) {
	return value !== null && value !== undefined;
}