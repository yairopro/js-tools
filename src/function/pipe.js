module.exports = function pipe(...path) {
	return function pipe(...params){
		return path.reduce(
			(value, next, index) => !index ? /* first */ next(...params) : next(value),
			undefined
		);
	}
};
