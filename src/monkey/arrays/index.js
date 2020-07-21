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
			return Math.max(this.length - 1, 0);
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