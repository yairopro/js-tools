"use strict";
const { T, F, identity } = require('ramda');
const onlyIf = require('./index');
test('onlyIf()', () => {
    expect(onlyIf(true, 1)()).toBe(1);
    expect(onlyIf(T, 2)()).toBe(2);
    expect(onlyIf(F, 3)()).toBe(undefined);
    expect(onlyIf(0, 4)()).toBe(undefined);
    expect(onlyIf(identity, () => 5)(true)).toBe(5);
    expect(onlyIf(identity, () => 6)(false)).toBe(undefined);
});
