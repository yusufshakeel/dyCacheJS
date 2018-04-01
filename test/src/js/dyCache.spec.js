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

const assert = require('chai').assert;
const dyCacheSpec = require('../../../src/js/dyCache.forTest.min');

describe('Testing dyCacheJS', function () {

    let obj;

    /**
     * Before each test instantiate and object of the
     * dyCacheJS class.
     */
    beforeEach(function () {
        obj = new dyCacheSpec();
    });

    /**
     * Assert that obj is an instance of the dyCacheJS class.
     */
    it('check obj is an instance of dyCacheJS class.', function () {
        assert.instanceOf(obj, dyCacheSpec, 'obj is instance of dyCacheJS class');
    });

    /**
     * test set() and get() methods
     */
    describe('Testing set() and get()', () => {

        it('should set "num" key to numeric value', function () {
            obj.set('num', 10);
            assert.equal(obj.get('num'), 10);
        });

        it('should set "str" key to string value', function () {
            obj.set('str', 'Yusuf Shakeel');
            assert.equal(obj.get('str'), 'Yusuf Shakeel');
        });

        it('should set "arr" key to array value', function () {
            obj.set('arr', [1, 'hello', [1, 2], {a: 1}]);
            assert.deepEqual(obj.get('arr'), [1, 'hello', [1, 2], {a: 1}]);
        });

        it('should set "obj" key to object value', function () {
            let value = {
                a: 10,
                b: [1, 2, 3],
                c: {m: 10},
                d: 'string'
            };
            obj.set('obj', value);
            assert.deepEqual(obj.get('obj'), value);
        });

        it('should return "undefined" for non-existing key', function () {
            assert.isUndefined(obj.get('unknown'));
        });

    });

    /**
     * test cache methods
     */
    describe('Testing cache methods', () => {

        it('should return total number of keys in the cache using length()', function () {
            obj.set('num', 1);
            obj.set('str', 'yusufshakeel');
            obj.set('arr', [1, 2]);
            obj.set('obj', {m: 10});
            assert.equal(obj.length(), 4);
        });

        it('should list all the keys in the cache using keys()', function () {
            obj.set('num', 1);
            obj.set('str', 'yusufshakeel');
            obj.set('arr', [1, 2]);
            obj.set('obj', {m: 10});
            assert.deepEqual(obj.keys(), ['num', 'str', 'arr', 'obj']);
        });

        it('should delete a key in the cache using del()', function () {
            obj.set('num', 1);
            obj.set('str', 'yusufshakeel');
            obj.set('arr', [1, 2]);
            obj.set('obj', {m: 10});
            obj.del('obj');
            assert.deepEqual(obj.keys(), ['num', 'str', 'arr']);
        });

        it('should check if a key exists in the cache using exists()', function () {
            obj.set('num', 1);
            obj.set('str', 'yusufshakeel');
            obj.set('arr', [1, 2]);
            obj.set('obj', {m: 10});
            assert.isTrue(obj.exists('obj'));
        });

        it('should purge keys from the cache using purge()', function () {
            obj.set('num', 1);
            obj.set('str', 'yusufshakeel');
            obj.set('arr', [1, 2]);
            obj.set('obj', {m: 10});
            obj.purge();
            assert.deepEqual(obj.keys(), []);
        });

    });

    /**
     * test array methods
     */
    describe('Testing array methods', () => {

        describe('Testing arrPush()', () => {

            it('should push number value in array from right', function () {
                obj.arrPush('arr', 10);
                obj.arrPush('arr', 20);
                obj.arrPush('arr', 30);
                assert.equal(obj.arrGet('arr', 2), 30);
            });

            it('should push string value in array from right', function () {
                obj.arrPush('arr', 'hello');
                obj.arrPush('arr', 'hi');
                obj.arrPush('arr', 'hey');
                assert.equal(obj.arrGet('arr', 2), 'hey');
            });

            it('should push array value in array from right', function () {
                obj.arrPush('arr', [1, 2, 3]);
                obj.arrPush('arr', [4, 5, 6]);
                obj.arrPush('arr', [7, 8, 9]);
                assert.deepEqual(obj.arrGet('arr', 2), [7, 8, 9]);
            });

            it('should push object value in array from right', function () {
                obj.arrPush('arr', {a: 1});
                obj.arrPush('arr', {b: 2});
                obj.arrPush('arr', {c: 3});
                assert.deepEqual(obj.arrGet('arr', 2), {c: 3});
            });

        });

        describe('Testing arrMPush()', () => {

            it('should push multiple number values in array from right', function () {
                obj.arrMPush('arr', [10, 20]);
                obj.arrMPush('arr', [30, 40]);
                obj.arrMPush('arr', [50, 60]);
                assert.equal(obj.arrGet('arr', 5), 60);
            });

            it('should push multiple string values in array from right', function () {
                obj.arrMPush('arr', ['hello', 'hi']);
                obj.arrMPush('arr', ['hey']);
                assert.equal(obj.arrGet('arr', 2), 'hey');
            });

            it('should push multiple array values in array from right', function () {
                obj.arrMPush('arr', [[1, 2, 3], [4, 5, 6]]);
                obj.arrMPush('arr', [[7, 8, 9]]);
                assert.deepEqual(obj.arrGet('arr', 2), [7, 8, 9]);
            });

            it('should push multiple object values in array from right', function () {
                obj.arrMPush('arr', [{a: 1}, {b: 2}]);
                obj.arrMPush('arr', [{c: 3}]);
                assert.deepEqual(obj.arrGet('arr', 2), {c: 3});
            });

        });

        describe('Testing arrLPush()', () => {

            it('should push number value in array from left', function () {
                obj.arrLPush('arr', 10);
                obj.arrLPush('arr', 20);
                obj.arrLPush('arr', 30);
                assert.equal(obj.arrGet('arr', 0), 30);
            });

            it('should push string value in array from left', function () {
                obj.arrLPush('arr', 'hello');
                obj.arrLPush('arr', 'hi');
                obj.arrLPush('arr', 'hey');
                assert.equal(obj.arrGet('arr', 0), 'hey');
            });

            it('should push array value in array from left', function () {
                obj.arrLPush('arr', [1, 2, 3]);
                obj.arrLPush('arr', [4, 5, 6]);
                obj.arrLPush('arr', [7, 8, 9]);
                assert.deepEqual(obj.arrGet('arr', 0), [7, 8, 9]);
            });

            it('should push object value in array from left', function () {
                obj.arrLPush('arr', {a: 1});
                obj.arrLPush('arr', {b: 2});
                obj.arrLPush('arr', {c: 3});
                assert.deepEqual(obj.arrGet('arr', 0), {c: 3});
            });

        });

        describe('Testing arrMLPush()', () => {

            it('should push multiple number values in array from left', function () {
                obj.arrMLPush('arr', [10, 20]);
                obj.arrMLPush('arr', [30, 40]);
                obj.arrMLPush('arr', [50, 60]);
                assert.equal(obj.arrGet('arr', 0), 50);
            });

            it('should push multiple string values in array from left', function () {
                obj.arrMLPush('arr', ['hello', 'hi']);
                obj.arrMLPush('arr', ['hey']);
                assert.equal(obj.arrGet('arr', 0), 'hey');
            });

            it('should push multiple array values in array from left', function () {
                obj.arrMLPush('arr', [[1, 2, 3], [4, 5, 6]]);
                obj.arrMLPush('arr', [[7, 8, 9]]);
                assert.deepEqual(obj.arrGet('arr', 0), [7, 8, 9]);
            });

            it('should push multiple object values in array from left', function () {
                obj.arrMLPush('arr', [{a: 1}, {b: 2}]);
                obj.arrMLPush('arr', [{c: 3}]);
                assert.deepEqual(obj.arrGet('arr', 0), {c: 3});
            });

        });

        describe('Testing arrGet()', () => {

            it('should list all the elements in the array using arrGet(key)', function () {
                for (let i = 0; i < 3; i++) {
                    obj.arrPush('num', i);
                }
                assert.deepEqual(obj.arrGet('num'), [0, 1, 2]);
            });

            it('should get the element at given index in the array using arrGet(key, index)', function () {
                for (let i = 0; i < 3; i++) {
                    obj.arrPush('num', i);
                }
                assert.deepEqual(obj.arrGet('num', 1), 1);
            });

            it('should get all the elements in the array from "index" to "end" using arrGet(key, index, end)', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.deepEqual(obj.arrGet('num', 5, 7), [5, 6, 7]);
            });

            it('should return null for non-existing key', function () {
                assert.isNull(obj.arrGet('unknown'));
            });

        });

        describe('Testing arrLength()', () => {

            it('should check the total number of elements in the array', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.equal(obj.arrLength('num'), 10);
            });

            it('should return -1 for non-existing key', function () {
                assert.equal(obj.arrLength('unknown'), -1);
            });

        });

        describe('Testing arrPop()', () => {

            it('should pop element from the right side of the array', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.equal(obj.arrPop('num'), 9);
            });

            it('should return null for non-existing key', function () {
                assert.isNull(obj.arrPop('unknown'));
            });

        });

        describe('Testing arrLPop()', () => {

            it('should pop element from the left side of the array', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.equal(obj.arrLPop('num'), 0);
            });

            it('should return null for non-existing key', function () {
                assert.isNull(obj.arrLPop('unknown'));
            });

        });

        describe('Testing arrInsertAt()', () => {

            it('should insert a number value at a given index', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isTrue(obj.arrInsertAt('arr', 3, 1000));
                assert.equal(obj.arrGet('arr', 3), 1000);
            });

            it('should insert a string value at a given index', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isTrue(obj.arrInsertAt('arr', 3, 'Yusuf Shakeel'));
                assert.equal(obj.arrGet('arr', 3), 'Yusuf Shakeel');
            });

            it('should insert an array value at a given index', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isTrue(obj.arrInsertAt('arr', 3, [100, 200]));
                assert.deepEqual(obj.arrGet('arr', 3), [100, 200]);
            });

            it('should insert an object value at a given index', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isTrue(obj.arrInsertAt('arr', 3, {a: 10, b: 20}));
                assert.deepEqual(obj.arrGet('arr', 3), {a: 10, b: 20});
            });

            it('should return false for non-existing key', function () {
                assert.isFalse(obj.arrInsertAt('arr', 3, {a: 10, b: 20}));
            });

            it('should return false for inserting at invalid index', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isFalse(obj.arrInsertAt('arr', 99, {a: 10, b: 20}));
            });

            it('should return false when value is missing', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isFalse(obj.arrInsertAt('arr', 99));
            });

        });

        describe('Testing arrMInsertAt()', () => {

            it('should insert multiple number values at a given index', function () {
                for (let i = 1; i <= 3; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isTrue(obj.arrMInsertAt('arr', 1, [10, 20]));
                assert.deepEqual(obj.arrGet('arr'), [1, 10, 20, 2, 3]);
            });

            it('should insert multiple string values at a given index', function () {
                for (let i = 1; i <= 3; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isTrue(obj.arrMInsertAt('arr', 1, ['a', 'b']));
                assert.deepEqual(obj.arrGet('arr'), [1, 'a', 'b', 2, 3]);
            });

            it('should insert multiple array values at a given index', function () {
                for (let i = 1; i <= 3; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isTrue(obj.arrMInsertAt('arr', 1, [['a', 10], ['b', 20]]));
                assert.deepEqual(obj.arrGet('arr'), [1, ['a', 10], ['b', 20], 2, 3]);
            });

            it('should insert multiple object values at a given index', function () {
                for (let i = 1; i <= 3; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isTrue(obj.arrMInsertAt('arr', 1, [{a: 1}, {b: 2}]));
                assert.deepEqual(obj.arrGet('arr'), [1, {a: 1}, {b: 2}, 2, 3]);
            });

            it('should return false for non-existing key', function () {
                assert.isFalse(obj.arrMInsertAt('arr', 1, [1, 2]));
            });

            it('should return false for inserting at invalid index', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isFalse(obj.arrMInsertAt('arr', 99, [1, 2]));
            });

            it('should return false when value is missing', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.arrPush('arr', i);
                }
                assert.isFalse(obj.arrMInsertAt('arr', 99));
            });

        });

        describe('Testing arrUpdateElem()', () => {

            it('should update an element at a given index in the array', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.isTrue(obj.arrUpdateElem('num', 7, 77));
            });

            it('should return false when trying to update invalid index value', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.isFalse(obj.arrUpdateElem('num', 99, 77));
            });

        });

        describe('Testing arrDeleteElem()', () => {

            it('should delete an element at a given index from the array and return it', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.deepEqual(obj.arrDeleteElem('num', 7), [7]);
            });

            it('should return false when trying to delete element from an invalid index', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.isFalse(obj.arrDeleteElem('num', 99));
            });

        });

        describe('Testing arrDeleteElems()', () => {

            it('should delete 3 elements from given "index" from the array and return it', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.deepEqual(obj.arrDeleteElems('num', 4, 3), [4, 5, 6]);
            });

            it('should return false when trying to delete elements from an invalid index', function () {
                for (let i = 0; i < 10; i++) {
                    obj.arrPush('num', i);
                }
                assert.isFalse(obj.arrDeleteElems('num', 99, 9));
            });

        });

    });

    /**
     * Testing object methods
     */
    describe('Testing object methods', () => {

        describe('Testing oSet() and oGet()', () => {

            it('should set "num" key to numeric value in object referred by "obj" key in the cache', function () {
                obj.oSet('obj', 'num', 10);
                assert.equal(obj.oGet('obj', 'num'), 10);
            });

            it('should set "str" key to string value in object referred by "obj" key in the cache', function () {
                obj.oSet('obj', 'str', 'Yusuf Shakeel');
                assert.equal(obj.oGet('obj', 'str'), 'Yusuf Shakeel');
            });

            it('should set "arr" key to array value in object referred by "obj" key in the cache', function () {
                let value = [
                    1,
                    'hello',
                    [1, 2],
                    {a: 1}
                ];
                obj.oSet('obj', 'arr', value);
                assert.deepEqual(obj.oGet('obj', 'arr'), value);
            });

            it('should set "obj" key to object value in object referred by "obj" key in the cache', function () {
                let value = {
                    a: 10,
                    b: [1, 2, 3],
                    c: {m: 10},
                    d: 'string'
                };
                obj.oSet('obj', 'obj', value);
                assert.deepEqual(obj.oGet('obj', 'obj'), value);
            });

            it('should return "undefined" for non-existing oKey in the object referred by "key" in the cache', function () {
                let value = {
                    a: 10,
                    b: [1, 2, 3],
                    c: {m: 10},
                    d: 'string'
                };
                obj.oSet('obj', 'obj', value);
                assert.isUndefined(obj.oGet('obj', 'unknown'));
            });

            it('should return "undefined" for non-existing "key" in the cache', function () {
                assert.isUndefined(obj.oGet('unknown'));
            });

        });

        describe('Testing oGetAll()', () => {

            it('should return all the key value pairs saved in the object referred by "key" in the cache', function () {
                let players = {
                    "p1": {
                        "id": "p1",
                        "username": "yusufshakeel"
                    },
                    "p2": {
                        "id": "p2",
                        "username": "dawoodshakeel"
                    }
                };
                obj.oSet('players', 'p1', players.p1);
                obj.oSet('players', 'p2', players.p2);
                assert.deepEqual(obj.oGetAll('players'), players);
            });

            it('should return "undefined" for non-existing key', function () {
                assert.isUndefined(obj.oGetAll('unknown'));
            });
        });

        describe('Testing oGetKeys()', () => {

            it('should list all the keys in the object referred by "key" in the cache', function () {
                let players = {
                    "p1": {
                        "id": "p1",
                        "username": "yusufshakeel"
                    },
                    "p2": {
                        "id": "p2",
                        "username": "dawoodshakeel"
                    }
                };
                obj.oSet('players', 'p1', players.p1);
                obj.oSet('players', 'p2', players.p2);
                assert.deepEqual(obj.oGetKeys('players'), ['p1', 'p2']);
            });

            it('should return false for non-existing "key" in the cache', function () {
                assert.isFalse(obj.oGetKeys('unknown'));
            });
        });

        describe('Testing oExists()', () => {

            it('should return true if "oKey" exists in the object referred by "key" in the cache', function () {
                let players = {
                    "p1": {
                        "id": "p1",
                        "username": "yusufshakeel"
                    },
                    "p2": {
                        "id": "p2",
                        "username": "dawoodshakeel"
                    }
                };
                obj.oSet('players', 'p1', players.p1);
                obj.oSet('players', 'p2', players.p2);
                assert.isTrue(obj.oExists('players', 'p1'));
            });

            it('should return false for non-existing "oKey" in the object referred by "key" in the cache', function () {
                assert.isFalse(obj.oExists('players', 'unknown'));
            });

            it('should return false for non-existing "key" in the cache', function () {
                assert.isFalse(obj.oExists('unknown', 'unknown'));
            });

        });

        describe('Testing oLength()', () => {

            it('should return total number of oKeys in the object referred by "key" in the cache', function () {
                let players = {
                    "p1": {
                        "id": "p1",
                        "username": "yusufshakeel"
                    },
                    "p2": {
                        "id": "p2",
                        "username": "dawoodshakeel"
                    }
                };
                obj.oSet('players', 'p1', players.p1);
                obj.oSet('players', 'p2', players.p2);
                assert.equal(obj.oLength('players'), 2);
            });

            it('should return -1 for non-existing "key" in the cache', function () {
                assert.equal(obj.oLength('unknown'), -1);
            });

        });

        describe('Testing oDel()', () => {

            it('should return true on successfully deleting "oKey" from the object referred by "key" in the cache', function () {
                let players = {
                    "p1": {
                        "id": "p1",
                        "username": "yusufshakeel"
                    },
                    "p2": {
                        "id": "p2",
                        "username": "dawoodshakeel"
                    }
                };
                obj.oSet('players', 'p1', players.p1);
                obj.oSet('players', 'p2', players.p2);
                assert.isTrue(obj.oDel('players', 'p2'));
            });

            it('should return false when trying to delete non-existing "oKey" key from the object referred as "key" in the cache', function () {
                let players = {
                    "p1": {
                        "id": "p1",
                        "username": "yusufshakeel"
                    },
                    "p2": {
                        "id": "p2",
                        "username": "dawoodshakeel"
                    }
                };
                obj.oSet('players', 'p1', players.p1);
                obj.oSet('players', 'p2', players.p2);
                assert.isFalse(obj.oDel('players', 'unknown'));
            });

            it('should return false when trying to delete "oKey" key from a non-existing object in the cache', function () {
                let players = {
                    "p1": {
                        "id": "p1",
                        "username": "yusufshakeel"
                    },
                    "p2": {
                        "id": "p2",
                        "username": "dawoodshakeel"
                    }
                };
                obj.oSet('players', 'p1', players.p1);
                obj.oSet('players', 'p2', players.p2);
                assert.isFalse(obj.oDel('unknown', 'not-known'));
            });

        });

    });

    describe('Testing Stack Methods', () => {

        describe('Testing stackInit()', () => {

            it('should initialise an empty stack referred by key in the cache', function () {
                obj.stackInit('stack');
                assert.equal(obj.stackLength('stack'), 0);
            });

        });

        describe('Testing stackPush() and stackPeek()', () => {

            it('should push a number value in the stack referred by key in the cache', function () {
                obj.stackPush('stack', 10);
                assert.equal(obj.stackPeek('stack'), 10);
            });

            it('should push a string value in the stack referred by key in the cache', function () {
                obj.stackPush('stack', 'hello');
                assert.equal(obj.stackPeek('stack'), 'hello');
            });

            it('should push an array value in the stack referred by key in the cache', function () {
                obj.stackPush('stack', [1, 2]);
                assert.deepEqual(obj.stackPeek('stack'), [1, 2]);
            });

            it('should push an object value in the stack referred by key in the cache', function () {
                obj.stackPush('stack', {a: 10});
                assert.deepEqual(obj.stackPeek('stack'), {a: 10});
            });

        });

        describe('Testing stackPeek()', () => {

            it('should return top element in the stack referred by key in the cache', function () {
                obj.stackPush('stack', 10);
                obj.stackPush('stack', 20);
                obj.stackPush('stack', 30);
                assert.equal(obj.stackPeek('stack'), 30);
            });

            it('should return "null" for non-existing key', function () {
                assert.isNull(obj.stackPeek('unknown'));
            });

        });

        describe('Testing stackPop()', () => {

            it('should pop a number value in the stack referred by key in the cache', function () {
                obj.stackPush('stack', 10);
                assert.equal(obj.stackPop('stack'), 10);
            });

            it('should pop a string value in the stack referred by key in the cache', function () {
                obj.stackPush('stack', 'hello');
                assert.equal(obj.stackPop('stack'), 'hello');
            });

            it('should pop an array value in the stack referred by key in the cache', function () {
                obj.stackPush('stack', [1, 2]);
                assert.deepEqual(obj.stackPop('stack'), [1, 2]);
            });

            it('should pop an object value in the stack referred by key in the cache', function () {
                obj.stackPush('stack', {a: 10});
                assert.deepEqual(obj.stackPop('stack'), {a: 10});
            });

            it('should return "undefined" for non-existing key', function () {
                assert.isUndefined(obj.stackPop('unknown'));
            });

        });

        describe('Testing stackExists()', () => {

            it('should return true for existing stack referred by key in the cache', function () {
                obj.stackPush('stack', 'hello');
                assert.isTrue(obj.stackExists('stack'));
            });

            it('should return false for non-existing stack', function () {
                assert.isFalse(obj.stackExists('unknown'));
            });

        });

        describe('Testing stackLength()', () => {

            it('should return total number of elements in the stack referred by key in the cache', function () {
                for (let i = 1; i <= 10; i++) {
                    obj.stackPush('stack', i);
                }
                assert.equal(obj.stackLength('stack'), 10);
            });

            it('should return -1 for non-existing stack', function () {
                assert.equal(obj.stackLength('unknown'), -1);
            });

        });

        describe('Testing stackIsEmpty()', () => {

            it('should return true for empty stack referred by key in the cache', function () {
                obj.stackInit('stack');
                assert.isTrue(obj.stackIsEmpty('stack'));
            });

            it('should return false for non-empty stack referred by key in the cache', function () {
                obj.stackInit('stack');
                obj.stackPush('stack', 10);
                assert.isFalse(obj.stackIsEmpty('stack'));
            });

            it('should return "undefined" for non-existing stack', function () {
                assert.isUndefined(obj.stackIsEmpty('unknown'));
            });

        });

        describe('Testing stackPurge()', () => {

            it('should return true after purging stack referred by key in the cache', function () {
                obj.stackInit('stack');
                obj.stackPush('stack', 10);
                assert.isTrue(obj.stackPurge('stack'));
            });

            it('should return false for non-existing stack', function () {
                assert.isFalse(obj.stackPurge('unknown'));
            });

        });

        describe('Testing stackDelete()', () => {

            it('should return true after deleting stack referred by key in the cache', function () {
                obj.stackInit('stack');
                obj.stackPush('stack', 10);
                assert.isTrue(obj.stackDelete('stack'));
            });

            it('should return false for non-existing stack', function () {
                assert.isFalse(obj.stackDelete('unknown'));
            });

        });

    });

});