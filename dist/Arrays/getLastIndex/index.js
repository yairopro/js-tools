"use strict";
module.exports = function getLastIndex(array) {
    if (!(array instanceof Array))
        return undefined;
    return Math.max(array.length - 1, 0);
};
