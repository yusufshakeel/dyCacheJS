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
var myCacheObj = new dyCache();
output('myCacheObj created!: var myCacheObj = new dyCache()');
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
var myCacheObj2 = new dyCache();
output('myCacheObj2 created!: var myCacheObj2 = new dyCache()');
console.log(myCacheObj2);

// get all the keys
output("Get all the keys: myCacheObj2.keys()");
outputJSON(myCacheObj2.keys());
console.log(myCacheObj2);

// set a key having JSON object value
myCacheObj2.oSet('user', {username: 'yusufshakeel', points: 10});
output("Set a key having JSON object value: myCacheObj2.oSet('user', { username: 'yusufshakeel', points: 10 })");
console.log(myCacheObj2);

// get value of a key having JSON object value
output("Get value of a key having JSON object value: myCacheObj2.oGet('user')");
outputJSON(myCacheObj2.oGet('user'));
console.log(myCacheObj2);

// get all the keys
output("Get all the keys: myCacheObj2.keys()");
outputJSON(myCacheObj2.keys());
console.log(myCacheObj2);


// set a key having JSON object value in an array
myCacheObj2.arrPush('users', {username: 'yusufshakeel', points: 10});
output("Push JSON value in an array key: myCacheObj2.arrPush('users', { username: 'yusufshakeel', points: 10 })");
console.log(myCacheObj2);

// get value of a key having JSON object value in an array
output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
outputJSON(myCacheObj2.arrGet('users'));
console.log(myCacheObj2);

// set a key having JSON object value in an array
myCacheObj2.arrPush('users', {username: 'dawoodshakeel', points: 20});
output("Push JSON value in an array key: myCacheObj2.arrPush('users', { username: 'dawoodshakeel', points: 20 })");
console.log(myCacheObj2);

// get value of a key having JSON object value in an array
output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
outputJSON(myCacheObj2.arrGet('users'));
console.log(myCacheObj2);

// set a key having JSON object value in an array
myCacheObj2.arrPush('users', {username: 'janedoe', points: 30});
output("Push JSON value in an array key: myCacheObj2.arrPush('users', { username: 'janedoe', points: 30 })");
console.log(myCacheObj2);

// get value of a key having JSON object value in an array
output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
outputJSON(myCacheObj2.arrGet('users'));
console.log(myCacheObj2);

// set a key having JSON object value in an array
myCacheObj2.arrPush('users', {username: 'johndoe', points: 40});
output("Push JSON value in an array key: myCacheObj2.arrPush('users', { username: 'johndoe', points: 40 })");
console.log(myCacheObj2);

// get value of a key having JSON object value in an array
output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
outputJSON(myCacheObj2.arrGet('users'));
console.log(myCacheObj2);

// find total number of keys in the cache
output("Total number of elements in array key: myCacheObj2.length('users')");
output(myCacheObj2.length('users'));
console.log(myCacheObj2);

// get value of a key having JSON object value in an array at index 1
output("Get value of a key having JSON object value in an array at index 1: myCacheObj2.arrGet('users', 1)");
outputJSON(myCacheObj2.arrGet('users', 1));
console.log(myCacheObj2);

// get value of a key having JSON object value in an array from index 1 to 3
output("Get value of a key having JSON object value in an array from index 1 to 3: myCacheObj2.arrGet('users', 1, 3)");
outputJSON(myCacheObj2.arrGet('users', 1, 3));
console.log(myCacheObj2);

// merge array
myCacheObj2.arrMerge('users', [{username: 'helloworld', points: 50}, {username: 'qwerty', points: 60}]);
output("Merge array: myCacheObj2.arrMerge('users', [{ username: 'helloworld', points: 50 }, { username: 'qwerty', points: 60 }])");
console.log(myCacheObj2);

// find total number of keys in the cache
output("Total number of elements in array key: myCacheObj2.length('users')");
output(myCacheObj2.length('users'));
console.log(myCacheObj2);

// get value of a key having JSON object value in an array
output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
outputJSON(myCacheObj2.arrGet('users'));
console.log(myCacheObj2);

// pop the last element
output("Pop the last element: myCacheObj2.arrPop('users')");
outputJSON(myCacheObj2.arrPop('users'));
console.log(myCacheObj2);

// get value of a key having JSON object value in an array
output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
outputJSON(myCacheObj2.arrGet('users'));
console.log(myCacheObj2);

// set a key having JSON object value in an array
myCacheObj2.arrLPush('users', {username: 'qwerty', points: 60});
output("Push JSON value in an array key from the LEFT: myCacheObj2.arrLPush('users', {username: 'qwerty', points: 60})");
console.log(myCacheObj2);

// get value of a key having JSON object value in an array
output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
outputJSON(myCacheObj2.arrGet('users'));
console.log(myCacheObj2);

// lpop the first element
output("Pop the first element: myCacheObj2.arrLPop('users')");
outputJSON(myCacheObj2.arrLPop('users'));
console.log(myCacheObj2);

// get value of a key having JSON object value in an array
output("Get value of a key having JSON object value in an array: myCacheObj2.arrGet('users')");
outputJSON(myCacheObj2.arrGet('users'));
console.log(myCacheObj2);

// insert a key: value pair in an object
output("Add a key value pair in a object key: myCacheObj.oMSet('players', 'p01', { playerid: 'p01', name: 'Yusuf Shakeel', points: 10 })");
myCacheObj.oMSet('players', 'p01', { playerid: 'p01', name: 'Yusuf Shakeel', points: 10 });
console.log(myCacheObj);

// insert a key: value pair in an object
output("Add a key value pair in a object key: myCacheObj.oMSet('players', 'p02', { playerid: 'p02', name: 'Dawood Shakeel', points: 20 })");
myCacheObj.oMSet('players', 'p02', { playerid: 'p02', name: 'Dawood Shakeel', points: 20 });
console.log(myCacheObj);

// insert a key: value pair in an object
output("Add a key value pair in a object key: myCacheObj.oMSet('players', 'a01', { playerid: 'a01', name: 'John Doe', points: 30 })");
myCacheObj.oMSet('players', 'a01', { playerid: 'a01', name: 'John Doe', points: 30 });
console.log(myCacheObj);

// insert a key: value pair in an object
output("Add a key value pair in a object key: myCacheObj.oMSet('players', '101', { playerid: '101', name: 'Jane Doe', points: 40 })");
myCacheObj.oMSet('players', '101', { playerid: '101', name: 'Jane Doe', points: 40 });
console.log(myCacheObj);

// get total number of key value pair in an object
output("Total number of key value pair in the object: myCacheObj.length('players')");
outputJSON(myCacheObj.length('players'));
console.log(myCacheObj);

// get value of specific key in an object
output("Get value of specific key: myCacheObj.oMGet('players', 'p01')");
outputJSON(myCacheObj.oMGet('players', 'p01'));
console.log(myCacheObj);

// get all key value pair for an object referred by a given key in cache
output("Get all the key value pairs of an object referred by key: myCacheObj.oMGetAll('players')");
outputJSON(myCacheObj.oMGetAll('players'));
console.log(myCacheObj);




//--------- purge ----------//
// // purge the cache
// myCacheObj.purge();
// output("Purge the cache: myCacheObj.purge()");
// console.log(myCacheObj);
//
// // get all the keys
// output("Get all the keys: ");
// outputJSON(myCacheObj.keys());
// console.log(myCacheObj);
//
// // purge the cache
// myCacheObj2.purge();
// output("Purge the cache: myCacheObj2.purge()");
// console.log(myCacheObj2);
//
// // get all the keys
// output("Get all the keys: myCacheObj2.keys()");
// outputJSON(myCacheObj2.keys());
// console.log(myCacheObj2);