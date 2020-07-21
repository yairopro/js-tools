const pipe = require("./index");

test('pipe(...path)', () => {
	let result = pipe(i => i)(1);
	expect(result).toBe(1);

	result = pipe(
		i => i + 1,
		i => i + 2,
	)(1);
	expect(result).toBe(4);

	result = pipe(
		i => i + 1,
		null && (() => 0),
		i => i + 2,
	)(1);
	expect(result).toBe(4);
});