module.exports = function getLastIndexOf(array) {
	if (!(array && (array.length >= 0)))
		return undefined;

	return Math.max(array.length - 1, 0);
};