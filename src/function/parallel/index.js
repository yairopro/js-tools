const polyApply = require("poly-apply");

module.exports = function parallel(...fns) {
	return function inParallel(...params) {
		return fns.reduce((last, fn) => {
			try {
				return polyApply(fn, params);
			} catch (error) {
				console.error("Error in parallel fns:\n", error);
			}

			return last;
		},
			undefined,
		);
	};
}