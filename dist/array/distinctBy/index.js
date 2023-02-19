"use strict";
const curry = require('ramda/src/curry');
function distinctBy(areEquals, array) {
    if (areEquals === undefined)
        areEquals = Object.is;
    if (array)
        return array.reduce((result, item, index) => {
            if (!index
                || result.every(picked => picked !== item
                    && !areEquals(item, picked)))
                result.push(item);
            return result;
        }, []);
}
module.exports = curry(distinctBy);
