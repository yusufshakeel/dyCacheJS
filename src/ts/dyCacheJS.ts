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

class dyCacheJS {

    private _cache: any = {};

    dyCacheJS() {
    }

    /**
     * This will return the total number of keys in the cache.
     *
     * @param {string} key  (optional)
     * @returns {number}
     */
    public length(key?: string): number {
        if (typeof key !== 'undefined') {
            console.log('key set');
            return Object.keys(this._cache[key]).length;
        }
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
        return typeof this._cache[key] !== "undefined"
    }

    /**
     * This method allows to set a key and value.
     *
     * @param {string} key
     * @param {number | string} value
     */
    public set(key: string, value: number | string): void {
        this._cache[key] = value;
    }

    /**
     * This function will return the value of the entered key.
     *
     * @param {string} key
     * @returns {number | string}
     */
    public get(key: string): number | string {
        return this._cache[key];
    }

    /**
     * This method will set a key having JSON object value.
     *
     * @param {string} key
     * @param value
     */
    public oset(key: string, value: any): void {
        this._cache[key] = value;
    }

    /**
     * This function will return the JSON object value for given key.
     *
     * @param {string} key
     */
    public oget(key: string): any {
        return this._cache[key];
    }

    /**
     * This will push new value in an array.
     *
     * @param {string} key
     * @param value
     */
    public arrSet(key: string, value: any): void {
        if (!this.exists(key)) {
            this._cache[key] = [];
        }
        this._cache[key].push(value);
    }

    /**
     * This will return elements of the array referred by given key.
     *
     * @param {string} key
     * @returns {any}
     */
    public arrGet(key: string): any {
        return this._cache[key];
    }

}