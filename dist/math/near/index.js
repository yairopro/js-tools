"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
/**
 * @param threshold Included
 * @returns If input is near target by threshold
 */
function near_core(threshold, target, input) {
    return Math.abs(input - target) <= threshold;
}
const near = (0, ramda_1.curry)(near_core);
exports.default = near;
