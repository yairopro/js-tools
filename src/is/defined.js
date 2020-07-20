/**
 * Tells if a value is defined.
 * @param {*} value 
 * @returns {boolean} True if value different from null or undefined.
 */
function isDefined(value) {
	return value !== null && value !== undefined;
}

module.exports = isDefined;