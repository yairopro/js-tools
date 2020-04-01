module.exports = function join(separator){
	return function (array){
		return array?.join(separator);
	};
};
