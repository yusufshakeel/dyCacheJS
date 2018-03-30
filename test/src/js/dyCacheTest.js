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

const assert = chai.assert;

describe('Testing dyCacheJS', function() {

    let obj;

    /**
     * Before each test instantiate and object of the
     * dyCacheJS class.
     */
    beforeEach(function(){
        obj = new dyCache();
    });

    /**
     * Assert that obj is an instance of the dyCacheJS class.
     */
    it('should assert that obj is an instance of dyCacheJS class.', function () {
        assert.instanceOf(obj, dyCache, 'obj is instance of dyCacheJS class');
    });

    /**
     * set key "num" is set to 10 and then asser that it is equal to 10.
     */
    it('should assert that value of key "num" is equal to 10.', function () {
        obj.set('num', 10);
        assert.equal(obj.get('num'), 10);
    });

    /**
     * assert the total number of keys in the cache
     */
    it('should assert that total number of keys in the cache is 3', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.equal(obj.length(), 3);
    });

    /**
     * assert the keys in the cache
     */
    it('should assert that the cache has three keys', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.deepEqual(obj.keys(), ['num', 'str', 'prj']);
    });

    /**
     * delete key and assert that it is removed
     */
    it('should assert that a key is deleted from the cache', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        obj.del('prj');
        assert.deepEqual(obj.keys(), ['num', 'str']);
    });

    /**
     * assert that a key exists in the cache
     */
    it('should assert that a key exists in the cache', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.equal(obj.exists('num'), true);
    });

    /**
     * assert that a key does not exists in the cache
     */
    it('should assert that a key does not exists in the cache', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.equal(obj.exists('unknown'), false);
    });

    /**
     * assert that a key having object value is present in the cache
     */
    it('should assert that the key has an object value', function () {
        obj.oSet('user', {username: 'yusufshakeel', points: 10});
        assert.equal(obj.exists('user'), true);
        assert.deepEqual(obj.oGet('user'), {username: 'yusufshakeel', points: 10});
    });

    /**
     * assert that an array referred by a key in cache exists and
     * has the expected values
     */
    it('should assert an array referred by key exists and the value matches', function () {
        obj.arrPush('users', {username: 'yusufshakeel', points: 10});
        obj.arrPush('users', {username: 'dawoodshakeel', points: 20});

        // assert that the key exists
        assert.equal(obj.exists('users'), true);

        // assert that the value matches
        assert.deepEqual(obj.arrGet('users'), [{username: 'yusufshakeel', points: 10}, {username: 'dawoodshakeel', points: 20}]);
    });

    /**
     * assert that length of the cache is 0 after purge
     */
    it('should assert that length of the cache is 0 after purge', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.equal(obj.length(), 3);
        obj.purge();
        assert.equal(obj.length(), 0);
    });



});