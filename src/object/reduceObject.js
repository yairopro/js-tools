module.exports = function reduceObject(to, factorInitial) {
    return function reducer(object) {
        let accumulator = factorInitial(object);
        Object.keys(object)
            .forEach(key => {
                const value = object[key];
                accumulator = to(accumulator, value, key, object);
            });
        return accumulator;
    }
}