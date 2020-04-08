const Objects = require("../../utils/Objects");

export default class Base {
	hydrate(object) {
		Object.assign(this, object);
		return this;
	}

	copy() {
		const instance = new this.constructor();
		Objects.forEach(this.constructor.properties, (type, key) => instance[key] = this[key]);
		return instance;
	}

	equals(value) {
		if (!value)
			return false;

		if (this === value)
			return true;

		return Object.keys(this.constructor.properties)
			.every(key =>
				this[key] === value[key]
				|| (
					this[key] instanceof Base
					&& this[key].equals(value[key])
				)
			);
	}

	toJSON(){
		return Objects.map(
			this.constructor.properties,
			(type, key) => this[key]
		);
	}

	static fromJSON(object) {
		const instance = new this();
		instance.hydrate(object);
		return instance;
	}

	static addProperties(properties){
		properties = Objects.map(properties, (type) => {
			if (type instanceof Function)
				type = {type};

			type = {
				...DEFAULT_PROPERTY_CONFIG,
				...type,
			};

			return type;
		});

		this.properties = {
			...this.properties,
			...properties
		};

		return this;
	}
}

Base.properties = {};

const DEFAULT_PROPERTY_CONFIG = {
	// type
	ID: false,
	nullable: true,
	auto: false,
	// storageFormat
};
