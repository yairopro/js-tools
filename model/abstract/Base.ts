import Objects from "../../utils/Objects";

export default class Base {
	static properties: {[k: string]: any} = {};

	hydrate(object: Object){
		Object.assign(this, object);
		return this;
	}

	static fromJSON(object){
		if (!(object instanceof Object))
			return undefined;

		object = {...object};
		if (this.properties)
			Objects.forEach(this.properties, (value, key) => {
				if ((value instanceof Function) && (value.prototype instanceof Base) && object[key])
					object[key] = value.fromJSON(object[key]);
			});

		const instance = new this();
		instance.hydrate(object);
		return instance;
	}
}
