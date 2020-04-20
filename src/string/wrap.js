const is = require("../is");

export default function wrap(left, right){
	return function (value){
		if (!is.null(left))
			value = left + value;

		if (!is.null(right))
			value += right;

		return value;
	}
}
