const polyApply = require("poly-apply");

module.exports = function not(fn = x => x){
	return function negation(...params){
		return !polyApply(fn, params);
	};
};