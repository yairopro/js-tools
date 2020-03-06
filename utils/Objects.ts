import { Nullable } from "../types";

export default {
	forEach<T>(object: {[k: string]: T}, apply: (value: T, property: string) => void) {
		Object.keys(object)
			.forEach(key => apply(object[key], key));
	},


	getDescriptions(target: Object) : ObjectDescription {
		const result: ObjectDescription = {};
		forEach(target, (key, description) => result[key] = description);
		return result;
	},
};

export interface ObjectDescription {
	[key: string]: Nullable<PropertyDescriptor>
}


// ----

const ANCESTOR = Object.getPrototypeOf({});

function forEach(target: Object, run: (key: string, description: Nullable<PropertyDescriptor>) => void){
	const runned: {[k: string]: boolean} = {}; // memories properties already passed on
	let node = target;

	while (ANCESTOR !== node && node) {
		for (const key of Object.getOwnPropertyNames(node)){
			if (key !== "constructor" && !runned[key]){
				runned[key] = true;
				run(key, Object.getOwnPropertyDescriptor(node, key));
			}
		}

		node = Object.getPrototypeOf(node);
	}
}
