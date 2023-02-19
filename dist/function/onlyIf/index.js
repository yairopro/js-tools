"use strict";
const { curry } = require("ramda");
function onlyIf(predicate, run) {
    return function (...params) {
        if (predicate instanceof Function ? predicate(...params) : predicate)
            return run instanceof Function ? run(...params) : run;
    };
}
module.exports = curry(onlyIf);
