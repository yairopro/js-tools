const reduceObject = require("./reduceObject");

module.exports = function groupProperties(by, groupsNeeded) {
    return reduceObject(
        (result, value, key, object) => {
            const byKey = by(value, key, object); // get key

            if (!result[byKey]) // create new group
                result[byKey] = {};

            result[byKey][key] = value; // set value in group
            return result; // return accumulator
        },
        // create initial
        () => (groupsNeeded || [])
            .reduce((initial, key) => {
                initial[key] = {};
                return initial;
            }, {}),
    );
};