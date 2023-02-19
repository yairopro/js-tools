"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const _1 = __importDefault(require("."));
(0, mocha_1.test)("near(target, threshold, input)", () => {
    (0, chai_1.assert)((0, _1.default)(0, 1, .5), "Doesn't respect: positive near to 0");
    (0, chai_1.assert)((0, _1.default)(0, 1, -.5), "Doesn't respect: negative near to 0");
    (0, chai_1.assert)((0, _1.default)(0, 1, 1), "Doesn't respect: positive at limit near to 0");
    (0, chai_1.assert)((0, _1.default)(0, 1, -1), "Doesn't respect: negative at limit near to 0");
    (0, chai_1.assert)(!(0, _1.default)(0, 1, 2), "Doesn't respect: positive away from 0");
    (0, chai_1.assert)(!(0, _1.default)(0, 1, -2), "Doesn't respect: negative away from 0");
    (0, chai_1.assert)((0, _1.default)(5, 1, 5.5), "Doesn't respect: positive near to 5");
    (0, chai_1.assert)((0, _1.default)(5, 1, 4.5), "Doesn't respect: negative near to 5");
    (0, chai_1.assert)((0, _1.default)(5, 1, 6), "Doesn't respect: positive at limit near to 5");
    (0, chai_1.assert)((0, _1.default)(5, 1, 4), "Doesn't respect: negative at limit near to 5");
    (0, chai_1.assert)(!(0, _1.default)(5, 1, 7), "Doesn't respect: positive away from 5");
    (0, chai_1.assert)(!(0, _1.default)(5, 1, 3), "Doesn't respect: negative away from 5");
    (0, chai_1.assert)((0, _1.default)(0)(1)(.5), "Isn't curried");
});
