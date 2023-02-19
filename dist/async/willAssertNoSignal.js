"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function willAssertNoSignal(signal) {
    return () => signal?.throwIfAborted();
}
exports.default = willAssertNoSignal;
