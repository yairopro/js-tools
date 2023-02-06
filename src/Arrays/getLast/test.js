const getLast = require("./index");

test('getLast(array)', () => {
	expect(getLast([3, 2, 1])).toBe(1);
	expect(getLast([3, 2])).toBe(2);
	expect(getLast([3])).toBe(3);
	expect(getLast([])).toBe(undefined);

	expect(getLast(undefined)).toBe(undefined);
	expect(getLast({})).toBe(undefined);
	expect(getLast(1)).toBe(undefined);
	expect(getLast("")).toBe(undefined);
	expect(getLast("abc")).toBe(undefined);
});