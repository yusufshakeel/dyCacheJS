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
    it('should assert obj.set(key, value) and obj.get(key) i.e. key exists and its value is a number.', function () {
        obj.set('num', 10);
        assert.equal(obj.get('num'), 10);
    });

    /**
     * set key "str" is set to "Yusuf Shakeel" and then asser that it is equal to "Yusuf Shakeel".
     */
    it('should assert obj.set(key, value) and obj.get(key) i.e. key exists and its value is a string', function () {
        obj.set('str', "Yusuf Shakeel");
        assert.equal(obj.get('str'), "Yusuf Shakeel");
    });

    /**
     * set key is set to an object
     */
    it('should assert obj.set(key,value) and obj.get(key) i.e. key exists and its value is an object', function () {
        obj.set('user', {username: 'yusufshakeel', points: 10});
        assert.deepEqual(obj.get('user'), {username: 'yusufshakeel', points: 10});
    });

    /**
     * set key is set to an array
     */
    it('should assert obj.set(key,value) and obj.get(key) i.e. key exists and its value is an array', function () {
        obj.set('arr', [1, 2, 3]);
        assert.deepEqual(obj.get('arr'), [1, 2, 3]);
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
     * assert arrMPush - push multiple values
     */
    it('should assert obj.arrMPush(key, value) i.e. push multiple values in the array', function () {
        let value = [1, 'helloworld', [1, 2, 3], {id: 1, points: 10}];
        obj.arrMPush('data', value);
        assert.deepEqual(obj.arrGet('data'), value);
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

    it('should assert obj.arrUpdateElem(key, index, value) i.e. update value of an element at given index in the array', function () {
        obj.arrPush('users', {username: 'yusufshakeel', points: 10});
        obj.arrPush('users', {username: 'dawoodshakeel', points: 20});
        obj.arrPush('users', {username: 'qwerty', points: 30});

        // invalid key
        assert.equal(obj.arrUpdateElem('unknown', 3, 10), false);

        // invalid index
        assert.equal(obj.arrUpdateElem('user', 3, 10), false);

        // missing value
        assert.equal(obj.arrUpdateElem('user', 3), false);

        // correct key, index, value
        let newData = {username: 'janedoe', points: 40};
        assert.equal(obj.arrUpdateElem('users', 2, newData), true);

        // check new value
        assert.deepEqual(obj.arrGet('users', 2), newData);
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
     * assert multiple push from the left side
     */
    it('should assert obj.arrMLPush(key, value) i.e. push multiple elements in an array from the left', function () {
        for (let i = 1; i <= 3; i++) {
            obj.arrPush('numData', i);
        }
        obj.arrMLPush('numData', [100, 'hello world', { id: 10 }, [99, 98]]);
        assert.deepEqual(obj.arrGet('numData'), [100, 'hello world', { id: 10 }, [99, 98], 1, 2, 3]);
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
     * assert length of an array
     */
    it('should assert obj.arrLength(key) i.e. total number of elements in the array', function () {
        obj.arrPush('numArr', 1);
        obj.arrPush('numArr', {a: 1});
        obj.arrPush('numArr', {b: 2});
        assert.equal(obj.arrLength('numArr'), 3);
    });

    /**
     * this will delete element from the array referred by key in the cache.
     * delete will start from the start index.
     * total element to be deleted is denoted by delectCount
     */
    it('should assert arrDeleteElem(key, index) i.e. delete element from the array at index start', function () {
        for (let i = 0; i <= 5; i++) {
            obj.arrPush('numArr', i);
        }
        assert.deepEqual(obj.arrDeleteElem('numArr', 1), [1]);

        // index does not exists
        assert.equal(obj.arrDeleteElem('numArr', 10), false);

        // key does not exists
        assert.equal(obj.arrDeleteElem('unknown', 1), false);
    });

    /**
     * this will delete element from the array referred by key in the cache.
     * delete will start from the start index.
     * total element to be deleted is denoted by delectCount
     */
    it('should assert arrDeleteElems(key, start, deleteCount) i.e. delete N elements from the array starting from index start till N elements.', function () {
        for (let i = 0; i <= 5; i++) {
            obj.arrPush('numArr', i);
        }
        assert.deepEqual(obj.arrDeleteElems('numArr', 1, 3), [1, 2, 3]);
    });

    /**
     * this will delete element from the array referred by key in the cache.
     * delete will start from the start index.
     * total element to be deleted is denoted by delectCount
     */
    it('should assert arrDeleteElems(key, start, deleteCount) i.e. delete N elements from the array starting from index 0 till N elements.', function () {
        for (let i = 0; i <= 5; i++) {
            obj.arrPush('numArr', i);
        }
        assert.deepEqual(obj.arrDeleteElems('numArr', 0, 3), [0, 1, 2]);
    });

    /**
     * this will delete element from the array referred by key in the cache.
     * delete will start from the start index.
     * total element to be deleted is denoted by delectCount
     */
    it('should assert arrDeleteElems(key, start) i.e. delete all elements from the array starting from index start', function () {
        for (let i = 0; i <= 5; i++) {
            obj.arrPush('numArr', i);
        }
        assert.deepEqual(obj.arrDeleteElems('numArr', 1), [1, 2, 3, 4, 5]);
    });

    /**
     * assert oSet(key, oKey, oValue)
     */
    it('should assert obj.oSet(key, oKey, oValue) and obj.oGetAll(key) i.e. insert oKey-oValue in object referred by key in the cache and match all the entry', function () {
        obj.oSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});

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

        assert.deepEqual(obj.oGetAll('players'), match);
    });

    /**
     * assert oGet(key, oKey)
     */
    it('should assert obj.oGet(key, oKey, oValue) matches the right value', function () {
        obj.oSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});

        let match = {
            "id": "p1",
            "username": "yusufshakeel"
        };

        assert.deepEqual(obj.oGet('players', 'p1'), match);
    });

    /**
     * assert oExists(key, oKey)
     */
    it('should assert obj.oExists(key, oKey) i.e. check if oKey exists in the object referred by key in the cache', function () {
        obj.oSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});
        assert.equal(obj.oExists('players', 'p1'), true);
        assert.equal(obj.oExists('players', 'unknown'), false);
    });

    /**
     * assert oDel(key, oKey)
     */
    it('should assert obj.oDel(key, oKey) i.e. delete a oKey from the object referred by key in the cache', function () {
        obj.oSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});

        // assert that the p2 oKey exists in the
        assert.deepEqual(obj.oGet('players', 'p2'), {id: 'p2', username: 'dawoodshakeel'});

        // now delete oKey 'p2'
        assert.equal(obj.oDel('players', 'p2'), true);

    });

    /**
     * assert total number of oKey-oValue pair in the object referred by key
     */
    it('should assert obj.oLength(key) i.e. total number of oKey-oValue pairs in the object referred by key in the cache', function () {
        obj.oSet('players', 'p1', {id: 'p1', username: 'yusufshakeel'});
        obj.oSet('players', 'p2', {id: 'p2', username: 'dawoodshakeel'});
        assert.equal(obj.oLength('players'), 2);
    });

});