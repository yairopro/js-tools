const getLastIndex = require("../getLastIndex");

module.exports = function getLast(array){
	if (!array)
		return undefined;

	const lastIndex = getLastIndex(array);
	if (!(lastIndex >= 0))
		return undefined;

	return array[lastIndex];
}