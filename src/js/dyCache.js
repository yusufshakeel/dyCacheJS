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
     * If key is present then fetch all elements/key-value pair for that key.
     * Use in scenarios where key represents an array or object.
     *
     * @returns {number}
     */
    dyCache.prototype.length = function () {
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
     * @param {any} value
     */
    dyCache.prototype.set = function (key, value) {
        this._cache[key] = value;
    };
    /**
     * This method will return the value of the entered key.
     *
     * @param {string} key
     * @returns {any}
     */
    dyCache.prototype.get = function (key) {
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
     * This will push multiple values in the array referred by key in the cache
     * from the right side.
     *
     * @param {string} key
     * @param value
     */
    dyCache.prototype.arrMPush = function (key, value) {
        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
        }
        this._cache[key] = this._cache[key].concat(value);
    };
    /**
     * This method will push value at the left side of the array
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
     * This method will push multiple values in an array referred by key
     * in the cache from the left side.
     *
     * @param {string} key
     * @param value
     */
    dyCache.prototype.arrMLPush = function (key, value) {
        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
            this._cache[key].push(value);
        }
        else {
            this._cache[key] = value.concat(this._cache[key]);
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
        // if key does not exists then return null
        if (!this.exists(key)) {
            return null;
        }
        // if index is set
        if (typeof index !== "undefined") {
            // if end is set
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
     * This will return the total number of elements in the array referred
     * by key in the cache.
     *
     * If key does not exists then return -1.
     *
     * @param {string} key
     * @returns {number}
     */
    dyCache.prototype.arrLength = function (key) {
        if (typeof key !== 'undefined' && typeof this._cache[key] !== "undefined") {
            return Object.keys(this._cache[key]).length;
        }
        return -1;
    };
    /**
     * This will update the value at given index in an array
     * referred by key in the cache.
     *
     * On success return true. Otherwise false.
     *
     * @param {string} key
     * @param {number} index
     * @param value
     * @returns {boolean}
     */
    dyCache.prototype.arrUpdateElem = function (key, index, value) {
        // if key does not exists
        if (typeof this._cache[key] === "undefined") {
            return false;
        }
        // if invalid index
        if (this.arrLength(key) < index || index < 0) {
            return false;
        }
        // if value does not exists
        if (typeof value === "undefined") {
            return false;
        }
        this._cache[key][index] = value;
        return true;
    };
    /**
     * This method will delete element from the array referred by key in the cache.
     *
     * On success will return an array of deleted elements. Otherwise false.
     *
     * @param {string} key
     * @param {number} index This is the index of the element to be deleted.
     * @returns {any}
     */
    dyCache.prototype.arrDeleteElem = function (key, index) {
        // if key does not exists
        if (typeof this._cache[key] === "undefined") {
            return false;
        }
        // if invalid index
        if (this.arrLength(key) < index || index < 0) {
            return false;
        }
        return this._cache[key].splice(index, 1);
    };
    /**
     * This method will delete elements from the array referred by key in the cache.
     *
     * On success will return an array of deleted elements. Otherwise false.
     *
     * @param {string} key
     * @param {number} start This is the index from where deleting is started.
     * @param {number} deleteCount  (optional) If set will delete deleteCount number of elements.
     * @returns {any}
     */
    dyCache.prototype.arrDeleteElems = function (key, start, deleteCount) {
        // if key does not exists
        if (typeof this._cache[key] === "undefined") {
            return false;
        }
        // if invalid start
        if (this.arrLength(key) < start || start < 0) {
            return false;
        }
        // if deleteCount not defined - delete till end
        if (typeof deleteCount === "undefined") {
            return this._cache[key].splice(start);
        }
        else {
            return this._cache[key].splice(start, deleteCount);
        }
    };
    /**
     * This will create an object by the reference key in the cache.
     * Then it will add a property oKey and assign the value oValue.
     *
     * @param {string} key
     * @param {string} oKey
     * @param oValue
     */
    dyCache.prototype.oSet = function (key, oKey, oValue) {
        // if key does not exists in the cache
        if (!this.exists(key)) {
            this._cache[key] = {};
        }
        this._cache[key][oKey] = oValue;
    };
    /**
     * This will return the value of oKey property for the given object
     * referred by key in the cache.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {any}
     */
    dyCache.prototype.oGet = function (key, oKey) {
        return this._cache[key][oKey];
    };
    /**
     * This will return all the oKey-oValue value pairs in the
     * object referred by key in the cache.
     *
     * @param {string} key
     * @returns {any}
     */
    dyCache.prototype.oGetAll = function (key) {
        return this._cache[key];
    };
    /**
     * This will check if oKey exists in the object referred by key in the cache.
     *
     * On success return true, otherwise false.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {boolean}
     */
    dyCache.prototype.oExists = function (key, oKey) {
        return typeof this._cache[key] !== "undefined" && typeof this._cache[key][oKey] !== "undefined";
    };
    /**
     * This will delete an oKey from the object denoted by key in the cache.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {boolean}
     */
    dyCache.prototype.oDel = function (key, oKey) {
        if (!this.oExists(key, oKey)) {
            return false;
        }
        delete this._cache[key][oKey];
        return true;
    };
    /**
     * This will return the total number of oKey-oValue pairs in the object referred
     * by key in the cache.
     *
     * If key does not exists then return -1.
     *
     * @param {string} key
     * @returns {number}
     */
    dyCache.prototype.oLength = function (key) {
        if (typeof key !== 'undefined' && typeof this._cache[key] !== "undefined") {
            return Object.keys(this._cache[key]).length;
        }
        return -1;
    };
    return dyCache;
}());
