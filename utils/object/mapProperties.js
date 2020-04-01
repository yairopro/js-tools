const map = require("../Objects/map");

module.exports = function mapProperties(to) {
	return function (object){
		return map(object, to);
	}
};
