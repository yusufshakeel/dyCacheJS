"use strict";
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
var dyCacheJS = /** @class */ (function () {
    function dyCacheJS() {
        this._cache = {};
    }
    dyCacheJS.prototype.dyCacheJS = function () {
    };
    /**
     * This will return the total number of keys in the cache.
     *
     * @param {string} key  (optional)
     * @returns {number}
     */
    dyCacheJS.prototype.length = function (key) {
        if (typeof key !== 'undefined') {
            console.log('key set');
            return Object.keys(this._cache[key]).length;
        }
        return Object.keys(this._cache).length;
    };
    /**
     * This will return all the keys in the cache.
     *
     * @returns {any}
     */
    dyCacheJS.prototype.keys = function () {
        return Object.keys(this._cache);
    };
    /**
     * This method will delete a key from the cache.
     *
     * @param {string} key
     */
    dyCacheJS.prototype.del = function (key) {
        delete this._cache[key];
    };
    /**
     * This will purge the cache.
     */
    dyCacheJS.prototype.purge = function () {
        this._cache = {};
    };
    /**
     * This method will check if the key exists in the cache.
     *
     * @param {string} key
     * @returns {boolean}
     */
    dyCacheJS.prototype.exists = function (key) {
        return typeof this._cache[key] !== "undefined";
    };
    /**
     * This method allows to set a key and value.
     *
     * @param {string} key
     * @param {number | string} value
     */
    dyCacheJS.prototype.set = function (key, value) {
        this._cache[key] = value;
    };
    /**
     * This function will return the value of the entered key.
     *
     * @param {string} key
     * @returns {number | string}
     */
    dyCacheJS.prototype.get = function (key) {
        return this._cache[key];
    };
    /**
     * This method will set a key having JSON object value.
     *
     * @param {string} key
     * @param value
     */
    dyCacheJS.prototype.oset = function (key, value) {
        this._cache[key] = value;
    };
    /**
     * This function will return the JSON object value for given key.
     *
     * @param {string} key
     */
    dyCacheJS.prototype.oget = function (key) {
        return this._cache[key];
    };
    /**
     * This will push new value in an array.
     *
     * @param {string} key
     * @param value
     */
    dyCacheJS.prototype.arrSet = function (key, value) {
        if (!this.exists(key)) {
            this._cache[key] = [];
        }
        this._cache[key].push(value);
    };
    /**
     * This will return elements of the array referred by given key.
     *
     * @param {string} key
     * @returns {any}
     */
    dyCacheJS.prototype.arrGet = function (key) {
        return this._cache[key];
    };
    return dyCacheJS;
}());
