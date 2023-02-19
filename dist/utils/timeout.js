"use strict";
const curry = require("ramda/src/curry");
function timeout(run, after) {
    const key = setTimeout(run, after);
    return () => clearTimeout(key);
}
module.exports = timeout;
