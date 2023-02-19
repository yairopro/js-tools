"use strict";
module.exports = function (object) {
    if (!object)
        return;
    return Object.keys(object)
        .map(key => [key, object[key]]);
};
