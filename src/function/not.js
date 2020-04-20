export default function not(fn){
	return function (value){
		return !fn(value);
	}
}
