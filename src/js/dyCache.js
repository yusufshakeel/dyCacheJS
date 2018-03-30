/*!
 * dyCacheJS
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyCacheJS
 *
 * MIT license
 * Copyright (c) 2018 Yusuf Shakeel
 *
 * Date: 2016-12-27 Tuesday
 */
/*! dyCacheJS | (c) 2018 Yusuf Shakeel | https://github.com/yusufshakeel/dyCacheJS */
var dyCache = /** @class */ (function () {
    function dyCache() {
        this._cache = {};
    }
    dyCache.prototype.dyCache = function () {
    };
    /**
     * This will return the total number of keys in the cache.
     *
     * @param {string} key  (optional)
     * @returns {number}
     */
    dyCache.prototype.length = function (key) {
        if (typeof key !== 'undefined') {
            return Object.keys(this._cache[key]).length;
        }
        return Object.keys(this._cache).length;
    };
    /**
     * This will return all the keys in the cache.
     *
     * @returns {any}
     */
    dyCache.prototype.keys = function () {
        return Object.keys(this._cache);
    };
    /**
     * This method will delete a key from the cache.
     *
     * @param {string} key
     */
    dyCache.prototype.del = function (key) {
        delete this._cache[key];
    };
    /**
     * This will purge the cache.
     */
    dyCache.prototype.purge = function () {
        this._cache = {};
    };
    /**
     * This method will check if the key exists in the cache.
     *
     * @param {string} key
     * @returns {boolean}
     */
    dyCache.prototype.exists = function (key) {
        return typeof this._cache[key] !== "undefined";
    };
    /**
     * This method allows to set a key and value.
     *
     * @param {string} key
     * @param {number | string} value
     */
    dyCache.prototype.set = function (key, value) {
        this._cache[key] = value;
    };
    /**
     * This function will return the value of the entered key.
     *
     * @param {string} key
     * @returns {number | string}
     */
    dyCache.prototype.get = function (key) {
        return this._cache[key];
    };
    /**
     * This method will set a key having object value.
     *
     * @param {string} key
     * @param value
     */
    dyCache.prototype.oSet = function (key, value) {
        this._cache[key] = value;
    };
    /**
     * This function will return the object value for given key.
     *
     * @param {string} key
     */
    dyCache.prototype.oGet = function (key) {
        return this._cache[key];
    };
    /**
     * This will push new value in an array at the right side.
     *
     * @param {string} key
     * @param value
     */
    dyCache.prototype.arrPush = function (key, value) {
        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
        }
        this._cache[key].push(value);
    };
    /**
     * This function will push value at the left side of the array
     * referred by the given key.
     *
     * @param {string} key
     * @param value
     */
    dyCache.prototype.arrLPush = function (key, value) {
        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
            this._cache[key].push(value);
        }
        else {
            this._cache[key].unshift(value);
        }
    };
    /**
     * This method will pop element of the array from the right
     * referred by the given key.
     *
     * If array does not exists then return null.
     *
     * @param {string} key
     * @returns {any}
     */
    dyCache.prototype.arrPop = function (key) {
        if (this.exists(key)) {
            return this._cache[key].pop();
        }
        return null;
    };
    /**
     * This method will pop element of the array from the left
     * referred by the given key.
     *
     * If array does not exists then return null.
     *
     * @param {string} key
     * @returns {any}
     */
    dyCache.prototype.arrLPop = function (key) {
        if (this.exists(key)) {
            return this._cache[key].shift();
        }
        return null;
    };
    /**
     * This will return elements of the array referred by given key.
     *
     * @param {string} key
     * @param {number} index    (optional)
     * @param {number} end      (optional)
     * @returns {any}
     */
    dyCache.prototype.arrGet = function (key, index, end) {
        if (typeof index !== "undefined") {
            if (typeof end !== "undefined") {
                return this._cache[key].slice(index, end + 1);
            }
            else {
                return this._cache[key][index];
            }
        }
        return this._cache[key].slice(0);
    };
    /**
     * This will merge arr array in given array denoted by given key.
     *
     * @param {string} key
     * @param arr
     */
    dyCache.prototype.arrMerge = function (key, arr) {
        this._cache[key] = this._cache[key].concat(arr);
    };
    /**
     * This will create an object by the reference by key.
     * Then it will add a property okey and set it to oValue value.
     *
     * @param {string} key
     * @param {string} oKey
     * @param oValue
     */
    dyCache.prototype.oMSet = function (key, oKey, oValue) {
        // if key does not exists in the cache
        if (!this.exists(key)) {
            this._cache[key] = {};
        }
        this._cache[key][oKey] = oValue;
    };
    /**
     * This will return the value of oKey property of the given key
     * in the cache.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {any}
     */
    dyCache.prototype.oMGet = function (key, oKey) {
        return this._cache[key][oKey];
    };
    /**
     * This will return all the key value pairs in the
     * object referred by the given key in the cache.
     *
     * @param {string} key
     * @returns {any}
     */
    dyCache.prototype.oMGetAll = function (key) {
        return this._cache[key];
    };
    return dyCache;
}());
