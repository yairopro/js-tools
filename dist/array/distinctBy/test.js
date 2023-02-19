"use strict";
const distinctBy = require("./index");
test('distinctBy(areSame, array)', () => {
    expect(distinctBy(undefined, [1, 2, 3, 3, 2, 1])).toEqual([1, 2, 3]);
    expect(distinctBy((a, b) => a.p === b.p, [{ p: 1 }, { p: 2 }, { p: 1 }])).toEqual([{ p: 1 }, { p: 2 }]);
});
