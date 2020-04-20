const forEach = require("./forEach");

module.exports = function filter(object, accept) {
	const result = {};
	forEach(
		object,
		(value, key) => {
			if (accept(value, key))
				result[key] = value;
		},
	);
	return result;
};
