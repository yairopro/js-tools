const { apply, curry, pipe } = require('ramda');
const { mapEach } = require('../mapEach');

const correctParams = curry( (correctors, fn) => pipe(Array.of, mapEach(correctors), apply(fn)) );
module.exports = correctParams;