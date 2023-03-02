import {curry} from "ramda"

/**
 * @param threshold Included
 * @returns If input is near target by threshold
 */
function near_core(threshold: number, target: number, input: number){
	return Math.abs(input - target) <= threshold;
}


const near = curry(near_core);
export default near;