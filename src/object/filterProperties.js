const filter = require("../Objects/filter");

module.exports = function mapProperties(to) {
	return function (object){
		return filter(object, to);
	}
};
