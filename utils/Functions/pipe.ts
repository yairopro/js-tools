export default function pipe(functions) {
	return function pipe(...params){
		return functions.reduce(
			(value, next, index) => !index ? /* first */ next(...params) : next(value),
			null
		);
	}
}
