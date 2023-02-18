import {curry} from "ramda"

function floor_core(decimals: number, input: number){
	const factor = 10 ** decimals;
	return Math.trunc(input * factor)  / factor ;
}


const floor = curry(floor_core);
export default floor;