"use strict";
module.exports = function* buildColumnIterator(table, columnIndex) {
    for (let rowIndex = 0; rowIndex < table.length; rowIndex++)
        yield table[rowIndex][columnIndex];
};
