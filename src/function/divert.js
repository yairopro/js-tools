module.exports = function divert(effect){
	return function (...input){
		try {
			effect(...input);
		}
		catch (error){
			console.error("Error in divert effect:\n", error);
		}
		
		return input[0];
	}
};
