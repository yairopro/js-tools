"use strict";
module.exports = function diverge(effect) {
    return function (...input) {
        try {
            if (effect instanceof Function)
                effect(...input);
        }
        catch (error) {
            console.error("Error in divert effect:\n", error);
        }
        return input[0];
    };
};
