"use strict";
const divert = require("./index");
test('divert(...path)', () => {
    const fn = jest.fn(x => x + 1);
    // wrapp the mock fn because it's constructor is not Function
    const result = divert((...x) => fn(...x))(1);
    expect(result).toBe(1);
    expect(fn.mock.calls[0]).toEqual([1]);
});
