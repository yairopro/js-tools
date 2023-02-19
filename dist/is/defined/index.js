"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
/**
 * Tells if a value is defined.
 * @returns {boolean} True if input different from null or undefined.
 */
const isDefined = (0, ramda_1.complement)(ramda_1.isNil);
exports.default = isDefined;
