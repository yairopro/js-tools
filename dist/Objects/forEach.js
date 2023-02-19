"use strict";
const mapProperties = require("../object/mapProperties");
module.exports = function forEach(object, apply) {
    mapProperties(apply)(object);
    return object;
};
