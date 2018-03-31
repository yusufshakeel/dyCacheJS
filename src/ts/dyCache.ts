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

class dyCache {

    private _cache: any = {};

    dyCache() {
    }

    /**
     * This will return the total number of keys in the cache.
     *
     * If key is present then fetch all elements/key-value pair for that key.
     * Use in scenarios where key represents an array or object.
     *
     * @returns {number}
     */
    public length(): number {
        return Object.keys(this._cache).length
    }

    /**
     * This will return all the keys in the cache.
     *
     * @returns {any}
     */
    public keys(): any {
        return Object.keys(this._cache);
    }

    /**
     * This method will delete a key from the cache.
     *
     * @param {string} key
     */
    public del(key: string): void {
        delete this._cache[key];
    }

    /**
     * This will purge the cache.
     */
    public purge(): void {
        this._cache = {};
    }

    /**
     * This method will check if the key exists in the cache.
     *
     * @param {string} key
     * @returns {boolean}
     */
    public exists(key: string): boolean {
        return typeof this._cache[key] !== "undefined";
    }

    /**
     * This method allows to set a key and value.
     *
     * @param {string} key
     * @param {any} value
     */
    public set(key: string, value: any): void {
        this._cache[key] = value;
    }

    /**
     * This method will return the value of the entered key.
     *
     * @param {string} key
     * @returns {any}
     */
    public get(key: string): any {
        return this._cache[key];
    }

    /**
     * This will push new value in an array at the right side.
     *
     * @param {string} key
     * @param value
     */
    public arrPush(key: string, value: any): void {

        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
        }
        this._cache[key].push(value);
    }

    /**
     * This will push multiple values in the array referred by key in the cache
     * from the right side.
     *
     * @param {string} key
     * @param value
     */
    public arrMPush(key: string, value: any): void {

        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
        }
        this._cache[key] = this._cache[key].concat(value);
    }

    /**
     * This method will push value at the left side of the array
     * referred by the given key.
     *
     * @param {string} key
     * @param value
     */
    public arrLPush(key: string, value: any): void {

        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
            this._cache[key].push(value);
        } else {
            this._cache[key].unshift(value);
        }
    }

    /**
     * This method will push multiple values in an array referred by key
     * in the cache from the left side.
     *
     * @param {string} key
     * @param value
     */
    public arrMLPush(key: string, value: any): void {

        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
            this._cache[key].push(value);
        } else {
            this._cache[key] = value.concat(this._cache[key]);
        }
    }

    /**
     * This method will pop element of the array from the right
     * referred by the given key.
     *
     * If array does not exists then return null.
     *
     * @param {string} key
     * @returns {any}
     */
    public arrPop(key: string): any {
        if (this.exists(key)) {
            return this._cache[key].pop();
        }
        return null;
    }

    /**
     * This method will pop element of the array from the left
     * referred by the given key.
     *
     * If array does not exists then return null.
     *
     * @param {string} key
     * @returns {any}
     */
    public arrLPop(key: string): any {
        if (this.exists(key)) {
            return this._cache[key].shift();
        }
        return null;
    }

    /**
     * This will return elements of the array referred by given key.
     *
     * @param {string} key
     * @param {number} index    (optional)
     * @param {number} end      (optional)
     * @returns {any}
     */
    public arrGet(key: string, index?: number, end?: number): any {

        // if key does not exists then return null
        if (!this.exists(key)) {
            return null;
        }

        // if index is set
        if (typeof index !== "undefined") {

            // if end is set
            if (typeof end !== "undefined") {
                return this._cache[key].slice(index, end + 1);
            } else {
                return this._cache[key][index];
            }
        }
        return this._cache[key].slice(0);
    }

    /**
     * This will merge value to the right side of the array
     * denoted by given key in the cache.
     *
     * Return true on success, false otherwise.
     *
     * @param {string} key
     * @param value
     * @returns {boolean}
     */
    public arrMerge(key: string, value: any): boolean {
        if (!this.exists(key)) {
            return false;
        }
        this._cache[key] = this._cache[key].concat([value]);
        return true;
    }

    /**
     * This will merge value to the left side of the array
     * denoted by given key in the cache.
     *
     * Return true on success, false otherwise.
     *
     * @param {string} key
     * @param value
     * @returns {boolean}
     */
    public arrLMerge(key: string, value: any): boolean {
        if (!this.exists(key)) {
            return false;
        }
        this._cache[key] = [value].concat(this._cache[key]);
        return true;
    }

    /**
     * This will return the total number of elements in the array referred
     * by key in the cache.
     *
     * If key does not exists then return -1.
     *
     * @param {string} key
     * @returns {number}
     */
    public arrLength(key: string): number {
        if (typeof key !== 'undefined' && typeof this._cache[key] !== "undefined") {
            return Object.keys(this._cache[key]).length;
        }
        return -1;
    }

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
    public arrUpdateElem(key: string, index: number, value: any): boolean {

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
    }

    /**
     * This method will delete element from the array referred by key in the cache.
     *
     * On success will return an array of deleted elements. Otherwise false.
     *
     * @param {string} key
     * @param {number} index This is the index of the element to be deleted.
     * @returns {any}
     */
    public arrDeleteElem(key: string, index: number): any {

        // if key does not exists
        if (typeof this._cache[key] === "undefined") {
            return false;
        }

        // if invalid index
        if (this.arrLength(key) < index || index < 0) {
            return false;
        }

        return this._cache[key].splice(index, 1);
    }

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
    public arrDeleteElems(key: string, start: number, deleteCount?: number): any {

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
        } else {
            return this._cache[key].splice(start, deleteCount);
        }

    }

    /**
     * This will create an object by the reference by key.
     * Then it will add a property okey and set it to oValue value.
     *
     * @param {string} key
     * @param {string} oKey
     * @param oValue
     */
    public oMSet(key: string, oKey: string, oValue: any): void {

        // if key does not exists in the cache
        if (!this.exists(key)) {
            this._cache[key] = {};
        }

        this._cache[key][oKey] = oValue;
    }

    /**
     * This will return the value of oKey property of the given key
     * in the cache.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {any}
     */
    public oMGet(key: string, oKey: string): any {
        return this._cache[key][oKey];
    }

    /**
     * This will return all the key value pairs in the
     * object referred by the given key in the cache.
     *
     * @param {string} key
     * @returns {any}
     */
    public oMGetAll(key: string): any {
        return this._cache[key];
    }

    /**
     * This will check if oKey exists in the object referred by key in the cache.
     *
     * On success return true, otherwise false.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {boolean}
     */
    public oMExists(key: string, oKey: string): boolean {
        return typeof this._cache[key] !== "undefined" && typeof this._cache[key][oKey] !== "undefined";
    }

    /**
     * This will delete a oKey from the object denoted by key in the cache.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {boolean}
     */
    public oMDel(key: string, oKey: string): boolean {
        if (!this.oMExists(key, oKey)) {
            return false;
        }
        delete this._cache[key][oKey];
        return true;
    }

    /**
     * This will return the total number of oKey-oValue pairs in the object referred
     * by key in the cache.
     *
     * If key does not exists then return -1.
     *
     * @param {string} key
     * @returns {number}
     */
    public oMLength(key: string): number {
        if (typeof key !== 'undefined' && typeof this._cache[key] !== "undefined") {
            return Object.keys(this._cache[key]).length;
        }
        return -1;
    }

}