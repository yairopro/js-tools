"use strict";
const filterProperties = require("../object/filterProperties");
module.exports = function filter(object, accept) {
    return filterProperties(accept)(object);
};
