module.exports = function forEach(object, apply) {
	Object.keys(object)
		.forEach(key => apply(object[key], key));
};
