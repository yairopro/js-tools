"use strict";
const { zipWith, call, identity, curry } = require('ramda');
exports.mapEach = curry((fns, array) => array.map((item, index) => {
    const fn = fns[index];
    if (fn)
        return fn(item);
    return item;
}));
exports.mapOnly = curry((fns, array) => fns.map((fn, index) => fn(array[index])));
