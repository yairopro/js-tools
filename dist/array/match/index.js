"use strict";
const curry = require("curry");
const match = curry(function match(array1, array2) {
    // pointer
    if (array1 === array2)
        return true;
    // not defined
    if (!array1 || !array2)
        return (!array1 && !array2);
    // pass over
    let match = true;
    let length = Math.max(array1.length, array2.length);
    for (let i = 0; i < length && match; i++)
        match = Object.is(array1[i], array2[i]);
    return match;
});
module.exports = match;
