require('./index');

test('Array.prototype.first', () => {
	const original = ['a', 2, 'c', 4];
	const copy = original.slice();

	expect(copy.first).toBe('a');
	expect(copy).toEqual(original);

	copy.first = 1;
	expect(copy.first).toBe(1);
	expect(copy).not.toEqual(original);
	expect(copy.slice(1)).toEqual(original.slice(1));
});

test('Array.prototype.last', () => {
	const original = ['a', 2, 'c', 4];
	const copy = original.slice();

	expect(copy.last).toBe(4);
	expect(copy).toEqual(original);

	copy.last = 'd';
	expect(copy.last).toBe('d');
	expect(copy).not.toEqual(original);
	expect(copy.slice(0, -1)).toEqual(original.slice(0, -1));
});