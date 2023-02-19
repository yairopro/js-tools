"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
function floor_core(decimals, input) {
    const factor = 10 ** decimals;
    return Math.trunc(input * factor) / factor;
}
const floor = (0, ramda_1.curry)(floor_core);
exports.default = floor;
