const match = require("./index");

test('match(array1, array2)', () => {
	expect(match(null, null)).toBe(true);
	expect(match(undefined, [])).toBe(false);
	expect(match([], [])).toBe(true);
	expect(match([undefined], [])).toBe(true);
	expect(match([1], [1, undefined])).toBe(true);
	expect(match([1, 2, 3], [2, 1])).toBe(false);
	expect(match([1, 2, 3], [1, 2, 3])).toBe(true);
});