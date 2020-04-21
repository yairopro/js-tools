/**
 * @param {object} config
 * @param {*} config.cache
 * @param {exist?} config.exist
 * @param {getter} config.get
 * @param {setter} config.set
 * 
 */
function caching({ cache, get, set, create, exist }) {
    return function (...params) {
        let value;

        const itExists = exist && exist(cache, params);

        if (itExists)
            value = get(cache, params);

        if (!value && !itExists) {
            value = create();
            set(cache, value);
        }

        return value;
    }
}

module.exports = caching;
module.exports.default = caching;

/**
 * Check if a value has been cached
 * @callback exist
 * @param {*} cache
 * @param {Array} params
 * @returns {boolean}
 */

/**
 * Get the value from cache
 * @callback getter
 * @param {*} cache
 * @param {Array} params
 */

/**
 * Save the value in cache
 * @callback setter
 * @param {*} cache
 * @param {*} value
 */