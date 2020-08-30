const mapProperties = require("../object/mapProperties");

module.exports = function map(object, to){
	return mapProperties(to)(object);
};
