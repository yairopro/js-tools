const {dec, sum, unapply } = require('ramda');
const correctParams = require('./index');

test('correctParams( correctors, fn )', () => {
	expect(correctParams([dec, , () => 0], Math.max)(5, 5, 5)).toBe(5);
	expect(correctParams([dec, , () => 0], unapply(sum))(5, 5, 5)).toBe(9);
});