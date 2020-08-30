module.exports = function valuesOf(object){
	if (!(object instanceof Object)) return;
	return Object.keys(object).map(key => object[key]);
};
