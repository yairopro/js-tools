"use strict";
const reduceObject = require("./reduceObject");
module.exports = function mapProperties(to) {
    // map by fn
    if (to instanceof Function)
        return reduceObject((result, value, key, object) => {
            result[key] = to(value, key, object);
            return result;
        }, () => ({}));
    // map by properties' fn
    if (to instanceof Object)
        return function propertyMapper(object) {
            return mapProperties((mapProperty, key) => mapProperty(object[key]))(to);
        };
};
