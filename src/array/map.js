module.exports = function map(to){
	return function mapper(array){
		return array?.map(to);
	};
};