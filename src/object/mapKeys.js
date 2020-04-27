const reduceObject = require("./reduceObject");

module.exports = function mapKeys(to){
    return reduceObject(
        (result, value, key, object) => {
            key = to(value, key, object);
            result[key] = value;
            return result;
        },
        () => ({}),
    );
}