"use strict";
const isDefined = require('../../is/defined');
const getLast = require("../getLast");
module.exports = function trim(array) {
    if (!(array instanceof Array))
        return array;
    array = array.slice();
    while ((array.length > 0) && !isDefined(array[0]))
        array.shift();
    while ((array.length > 0) && !isDefined(getLast(array)))
        array.pop();
    return array;
};
