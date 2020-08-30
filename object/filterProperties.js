const reduceObject = require("./reduceObject");

module.exports = function filterProperties(accept) {
	return reduceObject(
		(result, value, key, object) => {
			if (accept(value, key, object))
				result[key] = value;
			return result;
		},
		() => ({}),
	);
};