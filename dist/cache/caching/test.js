"use strict";
const caching = require("./index");
test("Test caching() with a simple add(a, b)", () => {
    let calculated = 0; // track number of times add was called.
    // function that will create new values
    function add(a, b) {
        calculated++;
        return a + b;
    }
    const keyOf = ([a, b]) => `${a} + ${b}`; // utility function to generate key
    // main function to test
    const fn = caching({
        cache: {},
        get: (cache, params) => cache[keyOf(params)],
        set: (cache, value, params) => cache[keyOf(params)] = value,
        create: add,
    });
    // --- start tests ---
    expect(fn(1, 2)).toBe(3); // calcul once, calculated: 0 -> 1
    expect(calculated).toBe(1); // check
    expect(fn(1, 2)).toBe(3); // get result from cache, calculated: 1 -> 1
    expect(calculated).toBe(1); // check
    expect(fn(3, 5)).toBe(8); // calcul second time, calculated: 1 -> 2
    expect(calculated).toBe(2); // check
    expect(fn(3, 5)).toBe(8); // get result from cache, calculated: 2 -> 2
    expect(calculated).toBe(2); // check
});
