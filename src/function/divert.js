module.exports = function divert(effect){
	return function (...input){
		effect(...input);
		return input[0];
	}
};
