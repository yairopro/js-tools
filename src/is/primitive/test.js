const isDefined = require("./index");

test('isPrimitive()', () => {
	expect(isDefined(null)).toBe(true);
	expect(isDefined(undefined)).toBe(true);

	expect(isDefined(false)).toBe(true);
	expect(isDefined(true)).toBe(true);

	expect(isDefined(0)).toBe(true);
	expect(isDefined(1)).toBe(true);
	expect(isDefined(-1)).toBe(true);

	expect(isDefined("")).toBe(true);
	expect(isDefined("a")).toBe(true);

	expect(isDefined(Symbol({}))).toBe(true);

	expect(isDefined({})).toBe(false);
});