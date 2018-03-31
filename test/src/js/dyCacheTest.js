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

describe('Testing dyCacheJS', function () {

    let obj;

    /**
     * Before each test instantiate and object of the
     * dyCacheJS class.
     */
    beforeEach(function () {
        obj = new dyCache();
    });

    /**
     * Assert that obj is an instance of the dyCacheJS class.
     */
    it('should assert obj is an instance of dyCacheJS class.', function () {
        assert.instanceOf(obj, dyCache, 'obj is instance of dyCacheJS class');
    });

    /**
     * set key "num" is set to 10 and then asser that it is equal to 10.
     */
    it('should assert obj.set("num", 10) and obj.get("num") i.e. key "num" exists and its value is 10', function () {
        obj.set('num', 10);
        assert.equal(obj.get('num'), 10);
    });

    /**
     * assert the total number of keys in the cache
     */
    it('should assert obj.length() i.e. total number of keys in the cache is 3', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.equal(obj.length(), 3);
    });

    /**
     * assert the keys in the cache
     */
    it('should assert obj.keys() i.e. match the keys of the cache', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.deepEqual(obj.keys(), ['num', 'str', 'prj']);
    });

    /**
     * delete key and assert that it is removed
     */
    it('should assert obj.del("prj") that is a key is deleted from the cache', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        obj.del('prj');
        assert.deepEqual(obj.keys(), ['num', 'str']);
    });

    /**
     * assert that a key exists in the cache
     */
    it('should assert obj.exists("num") i.e. a key exists in the cache', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.equal(obj.exists('num'), true);
        assert.equal(obj.exists('unknown'), false);
    });

    /**
     * assert that a key having object value is present in the cache
     */
    it('should assert obj.oSet() and obj.oGet() i.e. the key has an object value', function () {
        obj.oSet('user', {username: 'yusufshakeel', points: 10});
        assert.equal(obj.exists('user'), true);
        assert.deepEqual(obj.oGet('user'), {username: 'yusufshakeel', points: 10});
    });

    /**
     * assert that an array referred by a key in cache exists and
     * has the expected values
     */
    it('should assert obj.arrPush() and obj.arrGet() i.e. an array referred by key exists and the value matches', function () {
        obj.arrPush('users', {username: 'yusufshakeel', points: 10});
        obj.arrPush('users', {username: 'dawoodshakeel', points: 20});

        // assert that the key exists
        assert.equal(obj.exists('users'), true);

        // assert that the value matches
        assert.deepEqual(obj.arrGet('users'), [{username: 'yusufshakeel', points: 10}, {
            username: 'dawoodshakeel',
            points: 20
        }]);
    });

    /**
     * assert that length of the cache is 0 after purge
     */
    it('should assert obj.purge() i.e. length of the cache is 0 after purge', function () {
        obj.set('num', 1);
        obj.set('str', 'Yusuf shakeel');
        obj.set('prj', 'p1');
        assert.equal(obj.length(), 3);
        obj.purge();
        assert.equal(obj.length(), 0);
    });

    /**
     * assert that after arrLPush the data matches
     */
    it('should assert obj.arrLPush() and obj.arrGet() i.e. the data in the key matches after arrLPush', function () {
        let data = [];
        for (let i = 1; i <= 10; i++) {
            data.unshift(i);
            obj.arrLPush('numData', i);
        }
        assert.deepEqual(obj.arrGet('numData'), data);
    });

    /**
     * assert arrGet
     */
    it('should assert obj.arrGet() returns all the values', function () {
        let data = [];
        for (let i = 1; i <= 10; i++) {
            data.push(i);
            obj.arrPush('numData', i);
        }
        assert.deepEqual(obj.arrGet('numData'), data);
    });

    /**
     * assert arrGet(key, index)
     */
    it('should assert obj.arrGet(key, index) returns the value at an index', function () {
        let data = [];
        for (let i = 0; i <= 10; i++) {
            data.push(i);
            obj.arrPush('numData', i);
        }
        assert.deepEqual(obj.arrGet('numData', 5), 5);
    });

    /**
     * assert arrGet(key, index, end)
     */
    it('should assert obj.arrGet(key, index, end) returns the value from start index to end', function () {
        let data = [];
        for (let i = 0; i <= 10; i++) {
            data.push(i);
            obj.arrPush('numData', i);
        }
        assert.deepEqual(obj.arrGet('numData', 3, 5), [3, 4, 5]);
    });

    /**
     * assert arrPop(key)
     */
    it('should assert obj.arrPop(key) returns the value from the end', function () {
        let data = [];
        for (let i = 1; i <= 10; i++) {
            data.push(i);
            obj.arrPush('numData', i);
        }
        assert.deepEqual(obj.arrPop('numData'), 10);
    });

    /**
     * assert arrLPop(key)
     */
    it('should assert obj.arrLPop(key) returns the value from the start', function () {
        let data = [];
        for (let i = 1; i <= 10; i++) {
            data.push(i);
            obj.arrPush('numData', i);
        }
        assert.deepEqual(obj.arrLPop('numData'), 1);
    });

    /**
     * assert arrMerge(key, value)
     */
    it('should assert obj.arrMerge(key, value) matches the new array', function () {
        obj.arrPush('numArr', 1);
        obj.arrPush('numArr', {a: 1});
        obj.arrPush('numArr', {b: 2});
        obj.arrMerge('numArr', [10, 20, 30]);
        assert.deepEqual(obj.arrGet('numArr'), [1, {a: 1}, {b: 2}, [10, 20, 30]]);
    });

    /**
     * assert arrLMerge(key, value)
     */
    it('should assert obj.arrLMerge(key, value) matches the new array', function () {
        obj.arrPush('numArr', 1);
        obj.arrPush('numArr', {a: 1});
        obj.arrPush('numArr', {b: 2});
        obj.arrLMerge('numArr', [10, 20, 30]);
        assert.deepEqual(obj.arrGet('numArr'), [[10, 20, 30], 1, {a: 1}, {b: 2}]);
    });

    /**
     * assert length of an array
     */
    it('should assert obj.arrLength(key) i.e. total number of elements in the array', function () {
        obj.arrPush('numArr', 1);
        obj.arrPush('numArr', {a: 1});
        obj.arrPush('numArr', {b: 2});
        obj.arrLMerge('numArr', [10, 20, 30]);
        assert.equal(obj.arrLength('numArr'), 4);
    });

    /**
     * assert oMSet(key, oKey, oValue)
     */
    it('should assert obj.oMSet(key, oKey, oValue) and obj.oMGetAll(key) i.e. insert oKey-oValue in object referred by key in the cache and match all the entry', function () {
        obj.oMSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oMSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});

        let match = {
            "p1": {
                "id": "p1",
                "username": "yusufshakeel"
            },
            "p2": {
                "id": "p2",
                "username": "dawoodshakeel"
            }
        };

        assert.deepEqual(obj.oMGetAll('players'), match);
    });

    /**
     * assert oMGet(key, oKey)
     */
    it('should assert obj.oMGet(key, oKey, oValue) matches the right value', function () {
        obj.oMSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oMSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});

        let match = {
            "id": "p1",
            "username": "yusufshakeel"
        };

        assert.deepEqual(obj.oMGet('players', 'p1'), match);
    });

    /**
     * assert oMExists(key, oKey)
     */
    it('should assert obj.oMExists(key, oKey) i.e. check if oKey exists in the object referred by key in the cache', function () {
        obj.oMSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oMSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});
        assert.equal(obj.oMExists('players', 'p1'), true);
        assert.equal(obj.oMExists('players', 'unknown'), false);
    });

    /**
     * assert oMDel(key, oKey)
     */
    it('should assert obj.oMDel(key, oKey) i.e. delete a oKey from the object referred by key in the cache', function () {
        obj.oMSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oMSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});

        // assert that the p2 oKey exists in the
        assert.deepEqual(obj.oMGet('players', 'p2'), {id: 'p2', username: 'dawoodshakeel'});

        // now delete oKey 'p2'
        assert.equal(obj.oMDel('players', 'p2'), true);

    });

    /**
     * assert total number of oKey-oValue pair in the object referred by key
     */
    it('should assert obj.oMLength(key) i.e. total number of oKey-oValue pairs in the object referred by key in the cache', function () {
        obj.oMSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oMSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});
        assert.equal(obj.oMLength('players'), 2);
    });

});