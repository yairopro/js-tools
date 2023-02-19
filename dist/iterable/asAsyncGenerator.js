"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asAsyncGenerator = void 0;
async function* asAsyncGenerator(iterable) {
    yield* iterable;
}
exports.asAsyncGenerator = asAsyncGenerator;
