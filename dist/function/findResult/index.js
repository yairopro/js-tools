"use strict";
const { of, unless } = require('ramda');
const correctParams = require('../correctParams');
const toFns = unless(Array.isArray, of);
const factory = correctParams([toFns]);
exports.findResult = factory((fns) => (...params) => {
    for (const fn of fns) {
        if (fn instanceof Function) {
            const result = fn(...params);
            if (result !== undefined)
                return result;
        }
    }
});
exports.findResultAsync = factory((fns) => async (...params) => {
    for (const fn of fns) {
        if (fn instanceof Function) {
            const result = await fn(...params);
            if (result !== undefined)
                return result;
        }
    }
});
