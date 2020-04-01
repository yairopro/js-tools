const forEach = require("./forEach");

module.exports = function map(object, mapProperty){
	const result  = {};
	forEach(object, (value, key) => result[key] = mapProperty(value, key));
	return result;
};
