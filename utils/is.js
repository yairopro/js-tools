function is() {

}

is.null = function (value) {
	return value === null || value === undefined;
};

is.primitive = function (value){
	return Boolean(
		is.null(value)
		|| ["boolean", "number", "string"]
	);
};

module.exports = is;
