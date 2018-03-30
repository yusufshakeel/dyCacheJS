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
    it('should set key "num" to 10 and then assert that it is equal to 10.', function () {
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

});