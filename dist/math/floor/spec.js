"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const _1 = __importDefault(require("."));
(0, mocha_1.test)("floor(decimals, input)", () => {
    const input = 10.9999;
    (0, chai_1.assert)((0, _1.default)(0, input) === 10, "Doesn't floor to 0 decimals");
    (0, chai_1.assert)((0, _1.default)(1, input) === 10.9, "Doesn't floor to 1 decimals");
    (0, chai_1.assert)((0, _1.default)(2, input) === 10.99, "Doesn't floor to 2 decimals");
    // curry
    (0, chai_1.assert)((0, _1.default)(0)(input) === 10, "Isn't curried");
});
