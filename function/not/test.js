const not = require('./index');

test('not(fn)', () => {
	let result;

	result = not(i => i - 1)(1);
	expect(result).toBe(true);

	result = not()(1);
	expect(result).toBe(false);

	result = not(false)(true);
	expect(result).toBe(true);
});