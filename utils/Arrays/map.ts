export default function map(map){
	return function mapper(array){
		return array?.map(map);
	}
}
