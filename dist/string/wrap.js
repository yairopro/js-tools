"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is = require("../is");
function wrap(left, right) {
    return function (value) {
        if (!is.null(left))
            value = left + value;
        if (!is.null(right))
            value += right;
        return value;
    };
}
exports.default = wrap;
