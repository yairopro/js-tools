"use strict";
const { identity, dec, inc } = require('ramda');
const { mapEach, mapOnly } = require('./index');
test('mapEach( fns[], items[] )', () => {
    expect(mapEach([dec, inc, identity], [1, 1, 1, 1])).toEqual([0, 2, 1, 1]);
});
test('mapOnly( fns[], items[] )', () => {
    expect(mapOnly([dec, inc, identity, identity], [1, 1, 1])).toEqual([0, 2, 1, undefined]);
    expect(mapOnly([dec], [1, 1, 1])).toEqual([0]);
});
