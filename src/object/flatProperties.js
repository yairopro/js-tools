const reduceObject = require("./reduceObject");

module.exports = function flatProperties(depth = 1) {
    return reduceObject(
        (acc, value, key) => {
            if (value instanceof Object) {
                if (depth > 1)
                    value = flatProperties(depth - 1)(value);
            }
            else
                value = { [key]: value };

            return Object.assign(acc, value);
        },
        () => ({}),
    );
}