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

    beforeEach(function(){
        obj = new dyCache();
    });

    it('should assert that obj is an instance of dyCacheJS class.', function () {
        assert.instanceOf(obj, dyCache, 'obj is instance of dyCacheJS class');
    });

    it('should set key num to 10 and then assert that it is equal to 10.', function () {
        obj.set('num', 10);
        assert.equal(10, obj.get('num'));
    });

});