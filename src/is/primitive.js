const isDefined = require("./defined");

/**
 * Tells if a value is a primitive.
 * @param {*} value 
 * @returns {boolean} True if value is one of string, number, boolean, null or undefined.
 */
module.exports = function isPrimitive(value){
	return !isDefined(value) || PRIMITIVES.includes(typeof value);
};

const PRIMITIVES = ["boolean", "number", "string"];