module.exports = function pipe(...path) {
	return function pipe(...params) {
		return path.reduce(
			(value, next, index) => next ? (
				!index ? /* first */ next(...params) : next(value)
			) : value,
			undefined
		);
	}
};
