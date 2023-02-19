"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YEAR = exports.MONTH = exports.WEEK = exports.DAY = exports.HOUR = exports.MINUTE = exports.SECOND = void 0;
exports.SECOND = 1000;
exports.MINUTE = 60 * exports.SECOND;
exports.HOUR = 60 * exports.MINUTE;
exports.DAY = 24 * exports.HOUR;
exports.WEEK = 7 * exports.DAY;
exports.MONTH = 30 * exports.DAY;
exports.YEAR = 365 * exports.DAY; // 365 days is more precise than 12 months (=30 days)
