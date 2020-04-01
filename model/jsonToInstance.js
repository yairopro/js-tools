const Objects = require("../utils/Objects");
const is = require("../utils/is");

module.exports = function jsonToInstance(object, type){
	if (!is.null(object)){
		if (primitives.includes(type))
			return type(object);

		if (isABaseClass(type)) {
			const properties = Objects.map(
				type.properties,
				(propType, propName) => jsonToInstance(object[propName], propType),
			);

			return type.fromJSON(properties);
		}
	}

	return object;
};

const primitives = [String, Number, Boolean];

function isABaseClass(type) {
	return /* is class */ (type instanceof Function) && (type.prototype instanceof Base);
}
