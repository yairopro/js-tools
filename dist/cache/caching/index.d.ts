export = caching;
/**
 * @param {object} config
 * @param {*} config.cache
 * @param {exist?} config.exist
 * @param {getter} config.get
 * @param {setter} config.set
 *
 */
declare function caching({ cache, get, set, create, exist }: {
    cache: any;
    exist: exist | null;
    get: getter;
    set: setter;
}): (...params: any[]) => any;
declare namespace caching {
    export { caching as default, exist, getter, setter };
}
/**
 * Check if a value has been cached
 */
type exist = (cache: any, params: any[]) => boolean;
/**
 * Get the value from cache
 */
type getter = (cache: any, params: any[]) => any;
/**
 * Save the value in cache
 */
type setter = (cache: any, value: any) => any;
