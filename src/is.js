function is() {

}

is.primitive = function (value){
	return Boolean(
		is.null(value)
		|| ["boolean", "number", "string"]
	);
};

module.exports = is;
