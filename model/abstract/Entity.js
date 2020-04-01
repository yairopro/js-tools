const Base = require("./Base");

class Entity extends Base {}
Entity.addProperties({
	id: {
		type: Number,
		ID: true,
		auto: true,
		storageFormat: ({INTEGER}) => INTEGER
	},
});

module.exports = Entity;
