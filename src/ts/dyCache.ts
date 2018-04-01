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
     * This will insert a value at a given index in the array referred by key
     * in the cache.
     *
     * On success return true, otherwise false.
     *
     * @param {string} key
     * @param {number} index
     * @param value
     * @returns {boolean}
     */
    public arrInsertAt(key: string, index: number, value: any): boolean {

        // if key does not exists in the cache
        if (!this.exists(key)) {
            return false;
        }

        // if index is invalid
        if (this.arrLength(key) < index || index < 0) {
            return false;
        }

        // if value does not exists
        if (typeof value === "undefined") {
            return false;
        }

        this._cache[key].splice(index, 0, value);
        return true;
    }

    /**
     * This will insert multiple values at a given index in the array
     * referred by key in the cache.
     *
     * On success return true, otherwise false.
     *
     * @param {string} key
     * @param {number} index
     * @param value
     * @returns {boolean}
     */
    public arrMInsertAt(key: string, index: number, value: any): boolean {

        // if key does not exists in the cache
        if (!this.exists(key)) {
            return false;
        }

        // if index is invalid
        if (this.arrLength(key) < index || index < 0) {
            return false;
        }

        // if value does not exists
        if (typeof value === "undefined") {
            return false;
        }

        for (let i = 0; i < value.length; i++) {
            this._cache[key].splice(index + i, 0, value[i]);
        }
        return true;
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
     * This will create an object by the reference key in the cache.
     * Then it will add a property oKey and assign the value oValue.
     *
     * @param {string} key
     * @param {string} oKey
     * @param oValue
     */
    public oSet(key: string, oKey: string, oValue: any): void {

        // if key does not exists in the cache
        if (!this.exists(key)) {
            this._cache[key] = {};
        }

        this._cache[key][oKey] = oValue;
    }

    /**
     * This will return the value of oKey property for the given object
     * referred by key in the cache.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {any}
     */
    public oGet(key: string, oKey: string): any {

        // if key does not exists
        if (!this.exists(key)) {
            return undefined;
        }
        return this._cache[key][oKey];
    }

    /**
     * This will return all the oKey-oValue value pairs in the
     * object referred by key in the cache.
     *
     * @param {string} key
     * @returns {any}
     */
    public oGetAll(key: string): any {
        return this._cache[key];
    }

    /**
     * This function will return the oKeys present in the object referred by
     * key in the cache.
     *
     * On success return an array. Otherwise false.
     *
     * @param {string} key
     * @returns {any}
     */
    public oGetKeys(key: string): any {

        // if key does not exists
        if (!this.exists(key)) {
            return false;
        }
        return Object.keys(this._cache[key]);
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
    public oExists(key: string, oKey: string): boolean {
        return typeof this._cache[key] !== "undefined" && typeof this._cache[key][oKey] !== "undefined";
    }

    /**
     * This will delete an oKey from the object denoted by key in the cache.
     *
     * @param {string} key
     * @param {string} oKey
     * @returns {boolean}
     */
    public oDel(key: string, oKey: string): boolean {
        if (!this.oExists(key, oKey)) {
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
    public oLength(key: string): number {
        if (typeof key !== 'undefined' && typeof this._cache[key] !== "undefined") {
            return Object.keys(this._cache[key]).length;
        }
        return -1;
    }

    /**
     * This will initialise a new stack in the cache and will refer it by key.
     * @param {string} key
     */
    public stackInit(key: string): void {
        this._cache[key] = [];
    }

    /**
     * This will create a stack in the cache and will refer it by key.
     *
     * @param {string} key
     * @param value
     */
    public stackPush(key: string, value: any): void {

        // create array for the key if not exists
        if (!this.exists(key)) {
            this._cache[key] = [];
        }
        this._cache[key].push(value);

    }

    /**
     * This will pop the last element from the right side of the stack
     * referred by key in the cache.
     *
     * On success return the element. Otherwise undefined.
     *
     * @param {string} key
     * @returns {any}
     */
    public stackPop(key: string): any {

        // if stack referred by the key exists in the cache
        if (typeof key !== 'undefined' && typeof this._cache[key] !== "undefined") {
            return this._cache[key].pop();
        }
        return undefined;
    }

    /**
     * This will check if stack referred by the key in the cache exists.
     *
     * On success return true. Otherwise false.
     *
     * @param {string} key
     * @returns {boolean}
     */
    public stackExists(key: string): boolean {
        return typeof this._cache[key] !== "undefined";
    }

    /**
     * This will return the last element in the stack referred by key
     * in the cache.
     *
     * On success return the value. Otherwise, null.
     *
     * @param {string} key
     * @returns {any}
     */
    public stackPeek(key: string): any {

        // if stack referred by the key exists in the cache
        if (typeof key !== 'undefined' && typeof this._cache[key] !== "undefined") {
            // return just the element like: 10
            // and not in an array like: [10]
            return this._cache[key].slice(-1)[0];
        }
        return null;

    }

    /**
     * This will return total number of elements in the stack referred by
     * key in the cache.
     *
     * On success return a number representing total number of elements.
     * Otherwise, -1.
     *
     * @param {string} key
     * @returns {number}
     */
    public stackLength(key: string): number {

        // if stack referred by the key exists in the cache
        if (typeof key !== 'undefined' && typeof this._cache[key] !== "undefined") {
            return Object.keys(this._cache[key]).length;
        }
        return -1;

    }

    /**
     * This will return true if stack referred by key in the cache is empty.
     * Otherwise false.
     *
     * @param {string} key
     * @returns {boolean}
     */
    public stackIsEmpty(key: string): boolean {

        // if stack referred by key does not exists then return false
        if (!this.stackExists(key)) {
            return undefined;
        }
        return this.stackLength(key) === 0;
    }

    /**
     * This will remove all the elements from the stack referred by key
     * in the cache.
     *
     * On success return true. Otherwise, false.
     *
     * @param {string} key
     * @returns {boolean}
     */
    public stackPurge(key: string): boolean {
        // if stack referred by key does not exists then return false
        if (!this.stackExists(key)) {
            return false;
        }
        this.stackInit(key);
        return true;
    }

    /**
     * This will delete the stack from the cache.
     *
     * On success return true. Otherwise false.
     *
     * @param {string} key
     * @returns {boolean}
     */
    public stackDelete(key: string): boolean {
        // if stack referred by key does not exists then return false
        if (!this.stackExists(key)) {
            return false;
        }
        this.del(key);
        return true;
    }

}