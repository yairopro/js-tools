import Objects from "../../utils/Objects";
import {ClassType, Nullable} from "../../types";


export default class Base {
	static properties: { [k: string]: any } = {};

	hydrate(object: Object) {
		Object.assign(this, object);
		return this;
	}

	copy<T extends Base>(this: T): T {
		const instance = new (this.constructor as ClassType<T>)();
		Objects.forEach((this.constructor as typeof Base).properties, (type, key) => instance[key] = this[key]);
		return instance;
	}

	equals(value: Nullable<Base>) {
		if (!value)
			return false;
		if (this === value)
			return true;

		return Object.keys((this.constructor as typeof Base).properties)
			.every(key =>
				this[key] === value[key]
				|| (
					this[key] instanceof Base
					&& this[key].equals(value[key])
				)
			);
	}


	static fromJSON<T extends Base>(this: ClassType<T> & typeof Base, object: object): T {
		const instance = new this();

		Objects.forEach(this.properties, (type, key) => {
			if (isABaseClass(type) && object[key])
				instance[key] = (type as typeof Base).fromJSON(object[key]);
			else
				instance[key] = object[key];
		});

		return instance;
	}
}

function isABaseClass(type) {
	return /* is class */ (type instanceof Function) && (type.prototype instanceof Base);
}
