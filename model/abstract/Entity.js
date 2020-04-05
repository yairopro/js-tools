const Base = require("./Base");

export default class Entity extends Base {}
Entity.addProperties({
	id: {
		type: Number,
		ID: true,
		auto: true,
		storageFormat: ({INTEGER}) => INTEGER
	},
});
