const trim = require("./index");

test('trim(array)', () => {
	expect(trim([undefined, 2, 1])).toEqual([2, 1]);
	expect(trim([3, 2, undefined])).toEqual([3, 2]);
	expect(trim([undefined, 3, 2, 1, undefined])).toEqual([3, 2, 1]);
	expect(trim([3])).toEqual([3]);
	expect(trim([])).toEqual([]);

	expect(trim(undefined)).toBe(undefined);
	expect(trim({})).toEqual({});
	expect(trim(1)).toBe(1);
	expect(trim(" abc ")).toBe(" abc ");
});