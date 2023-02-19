"use strict";
const getLastIndex = require("./index");
test('getLastIndex(array)', () => {
    expect(getLastIndex([3, 2, 1])).toBe(2);
    expect(getLastIndex([3, 2])).toBe(1);
    expect(getLastIndex([3])).toBe(0);
    expect(getLastIndex([])).toBe(0);
    expect(getLastIndex(undefined)).toBe(undefined);
    expect(getLastIndex({})).toBe(undefined);
    expect(getLastIndex(1)).toBe(undefined);
    expect(getLastIndex("")).toBe(undefined);
    expect(getLastIndex("abc")).toBe(undefined);
});
