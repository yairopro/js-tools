const getLastIndexOf = require("../../Arrays/getLastIndexOf");

Object.defineProperties(Array.prototype, {
	first: {
		configurable: true,
		get: function (){
			return this[0];
		},

		set: function(value){
			this[0] = value;
		},
	},

	lastIndex: {
		configurable: true,
		get: function (){
			return getLastIndexOf(this);
		},
	},

	last: {
		configurable: true,
		get: function (){
			return this[this.lastIndex];
		},

		set: function(value){
			this[this.lastIndex] = value;
		},
	}
});