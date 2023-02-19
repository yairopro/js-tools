"use strict";
const apply = require("poly-apply");
module.exports = function pipe(...path) {
    return function pipe(...params) {
        return path.reduce((value, next, index) => apply(next || DEFAULT_NEXT, !index ? params : [value]), undefined);
    };
};
const DEFAULT_NEXT = x => x;
