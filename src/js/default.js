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

window.onload = function () {
    var container = document.getElementById('result-container');

    output("Page ready");

    function getTimestamp() {
        return new Date().toUTCString();
    }

    function output(message) {
        var elNode = document.createElement('div');
        elNode.appendChild(document.createTextNode(getTimestamp() + ": " + message));
        container.appendChild(elNode);
    }

    function outputJSON(data) {
        output('JSON');
        var elNode = document.createElement('pre');
        elNode.appendChild(document.createTextNode(JSON.stringify(data, undefined, 2)));
        container.appendChild(elNode);
    }

    //-------------- now do some actions -----------------//

    // create object of dyCacheJS class
    var myCacheObj = new dyCacheJS();
    output('myCacheObj created!: var myCacheObj = new dyCacheJS()');
    console.log(myCacheObj);

    // get all the keys
    output("Get all the keys: myCacheObj.keys()");
    outputJSON(myCacheObj.keys());
    console.log(myCacheObj);

    // set a key having number value
    myCacheObj.set('num', 10);
    output("Set a key having number value: myCacheObj.set('num', 10)");
    console.log(myCacheObj);

    // get the key
    output("Get value of a key: myCacheObj.get('num')");
    outputJSON(myCacheObj.get('num'));
    console.log(myCacheObj);

    // set a key having string value
    myCacheObj.set('str', 'Yusuf Shakeel');
    output("Set a key having string value: myCacheObj.set('str', 'Yusuf Shakeel')");
    console.log(myCacheObj);

    // get the key
    output("Get value of a key: myCacheObj.get('str')");
    outputJSON(myCacheObj.get('str'));
    console.log(myCacheObj);

    // find total number of keys in the cache
    output("Total number of keys in the cache: myCacheObj.length()");
    output(myCacheObj.length());
    console.log(myCacheObj);

    // get all the keys
    output("Get all the keys: myCacheObj.keys()");
    outputJSON(myCacheObj.keys());
    console.log(myCacheObj);

    // check if key exists
    output("Check if key exists: myCacheObj.exists('num')");
    outputJSON(myCacheObj.exists('num'));
    console.log(myCacheObj);

    // check if key exists
    output("Check if key exists: myCacheObj.exists('num2')");
    outputJSON(myCacheObj.exists('num2'));
    console.log(myCacheObj);

    // delete key
    myCacheObj.del('num');
    output("Delete key: myCacheObj.del('num')");
    console.log(myCacheObj);

    // get all the keys
    output("Get all the keys: myCacheObj.keys()");
    outputJSON(myCacheObj.keys());
    console.log(myCacheObj);

    // create another object of dyCacheJS class
    var myCacheObj2 = new dyCacheJS();
    output('myCacheObj2 created!: var myCacheObj2 = new dyCacheJS()');
    console.log(myCacheObj2);

    // get all the keys
    output("Get all the keys: myCacheObj2.keys()");
    outputJSON(myCacheObj2.keys());
    console.log(myCacheObj2);

    // set a key having JSON object value
    myCacheObj2.oset('user', { username: 'yusufshakeel', points: 10 });
    output("Set a key having JSON object value: myCacheObj2.oset('user', { username: 'yusufshakeel', points: 10 })");
    console.log(myCacheObj2);

    // get value of a key having JSON object value
    output("Get value of a key having JSON object value: myCacheObj2.oget('user')");
    outputJSON(myCacheObj2.oget('user'));
    console.log(myCacheObj2);

    // get all the keys
    output("Get all the keys: myCacheObj2.keys()");
    outputJSON(myCacheObj2.keys());
    console.log(myCacheObj2);

    // set a key having JSON object value in an array
    myCacheObj2.arrSet('users', { username: 'yusufshakeel', points: 10 });
    output("Set a key having JSON object value: myCacheObj2.arrSet('users', { username: 'yusufshakeel', points: 10 })");
    console.log(myCacheObj2);

    // get value of a key having JSON object value in an array
    output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
    outputJSON(myCacheObj2.arrGet('users'));
    console.log(myCacheObj2);

    // set a key having JSON object value in an array
    myCacheObj2.arrSet('users', { username: 'dawoodshakeel', points: 20 });
    output("Set a key having JSON object value: myCacheObj2.arrSet('users', { username: 'dawoodshakeel', points: 20 })");
    console.log(myCacheObj2);

    // get value of a key having JSON object value in an array
    output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
    outputJSON(myCacheObj2.arrGet('users'));
    console.log(myCacheObj2);

    // find total number of keys in the cache
    output("Total number of elements in array key: myCacheObj2.length('users')");
    output(myCacheObj2.length('users'));
    console.log(myCacheObj2);


    //--------- purge ----------//
    // purge the cache
    myCacheObj.purge();
    output("Purge the cache: myCacheObj.purge()");
    console.log(myCacheObj);

    // get all the keys
    output("Get all the keys: ");
    outputJSON(myCacheObj.keys());
    console.log(myCacheObj);

    // purge the cache
    myCacheObj2.purge();
    output("Purge the cache: myCacheObj2.purge()");
    console.log(myCacheObj2);

    // get all the keys
    output("Get all the keys: myCacheObj2.keys()");
    outputJSON(myCacheObj2.keys());
    console.log(myCacheObj2);
};