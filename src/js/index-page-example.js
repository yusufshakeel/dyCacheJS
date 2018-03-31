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

//------------------- helper ----------------//

function output(message, containerID) {
    var container = document.getElementById(containerID);
    var elNode = document.createElement('div');
    // elNode.appendChild(document.createTextNode(message));
    elNode.innerHTML = message;
    container.appendChild(elNode);
}

function outputJSON(data, containerID) {
    var container = document.getElementById(containerID);
    var elNode = document.createElement('pre');
    elNode.appendChild(document.createTextNode(JSON.stringify(data, undefined, 2)));
    container.appendChild(elNode);
}

//------------------- helper ends here ----------------//

// instantiate an object of dyCache class
var obj = new dyCache();
output("Instance of dyCache class created!", 'collapse-new-object');
outputJSON(obj, 'collapse-new-object');

// set('num', 10);
output("Adding a <code>num</code> key having numeric value <code>10</code>.", 'collapse-set');
obj.set('num', 10);
outputJSON(obj, 'collapse-set');

// set('str', 'Yusuf Shakeel');
output("Adding a <code>str</code> key having string value <code>'Yusuf Shakeel'</code>.", 'collapse-set');
obj.set('str', 'Yusuf Shakeel');
outputJSON(obj, 'collapse-set');

// get('num');
output("Get the value of key <code>num</code>", 'collapse-get');
outputJSON(obj.get('num'), 'collapse-get');

// get('str');
output("Get the value of key <code>str</code>", 'collapse-get');
outputJSON(obj.get('str'), 'collapse-get');

// length();
output("Total number of keys in the cache.", 'collapse-length');
outputJSON(obj.length(), 'collapse-length');

// keys();
output("All the keys in the cache.", 'collapse-keys');
outputJSON(obj.keys(), 'collapse-keys');

// del();
output("Delete <code>num</code> key from the cache.", 'collapse-del');
obj.del('num');
output("All the keys in the cache.", 'collapse-del');
outputJSON(obj.keys(), 'collapse-del');

// exists();
output("<code>num</code> key exists in the cache?", 'collapse-exists');
outputJSON(obj.exists('num'), 'collapse-exists');
output("<code>str</code> key exists in the cache?", 'collapse-exists');
outputJSON(obj.exists('str'), 'collapse-exists');

// oSet();
output("Create an <code>user</code> key in the cache to store object value.", 'collapse-oSet');
obj.oSet('user', {username: 'yusufshakeel', points: 10});
output("Create an <code>awesome</code> key in the cache to store object value.", 'collapse-oSet');
obj.oSet('awesome', { a: 10, b: 20, c: 'super'});
output("Content of the cache.", 'collapse-oSet');
outputJSON(obj, 'collapse-oSet');

// oGet();
output("Fetch the object value stored in <code>user</code> key in the cache.", 'collapse-oGet');
outputJSON(obj.oGet('user'), 'collapse-oGet');

// arrPush();
output("Create an <code>users</code> key in the cache which is an array and insert some data.", 'collapse-arrPush');
obj.arrPush('users', {username: 'yusufshakeel', points: 10});
obj.arrPush('users', {username: 'dawoodshakeel', points: 20});
obj.arrPush('users', {username: 'janedoe', points: 30});
obj.arrPush('users', {username: 'johndoe', points: 40});
output("Content of the cache.", 'collapse-arrPush');
outputJSON(obj, 'collapse-arrPush');
output("To know the total number of elements in the <code>users</code> array use <code>obj.length('users')</code>", 'collapse-arrPush');
outputJSON(obj.length('users'), 'collapse-arrPush');

// arrLPush();
output("Create an <code>users</code> key (if not exists) in the cache which is an array and insert given data from the left.", 'collapse-arrLPush');
obj.arrLPush('users', {username: 'qwerty', points: 50});
output("Content of the cache.", 'collapse-arrLPush');
outputJSON(obj, 'collapse-arrLPush');
output("Total number of elements in the <code>users</code> array use <code>obj.length('users')</code>", 'collapse-arrLPush');
outputJSON(obj.length('users'), 'collapse-arrLPush');

// arrGet();
output("Fetch all the elements of the array referred by <code>users</code> key in the cache.", 'collapse-arrGet');
outputJSON(obj.arrGet('users'), 'collapse-arrGet');
output("Fetch element of an array referred by <code>unknown</code> key that does not exists in the cache.", 'collapse-arrGet');
outputJSON(obj.arrGet('unknown'), 'collapse-arrGet');
output("Fetch element at index 1 in the array referred by <code>users</code> key in the cache.", 'collapse-arrGet');
outputJSON(obj.arrGet('users', 1), 'collapse-arrGet');
output("Fetch elements from index 1 to 3 in the array referred by <code>users</code> key in the cache.", 'collapse-arrGet');
outputJSON(obj.arrGet('users', 1, 3), 'collapse-arrGet');

// arrPop();
output("Pop element from the right side of the array referred by <code>users</code> key in the cache.", 'collapse-arrPop');
outputJSON(obj.arrPop('users'), 'collapse-arrPop');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache after pop.", 'collapse-arrPop');
outputJSON(obj.arrGet('users'), 'collapse-arrPop');

// arrLPop();
output("Pop element from the left side of the array referred by <code>users</code> key in the cache.", 'collapse-arrLPop');
outputJSON(obj.arrLPop('users'), 'collapse-arrLPop');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache after left pop.", 'collapse-arrLPop');
outputJSON(obj.arrGet('users'), 'collapse-arrLPop');

// arrMerge();
output("This will merge a value with existing array referred by <code>users</code> key in the cache at the right side.", 'collapse-arrMerge');
output("Merge Array: obj.arrMerge('users', [{username: 'qwerty', points: 50}])", 'collapse-arrMerge');
outputJSON(obj.arrMerge('users', [{username: 'qwerty', points: 50}]), 'collapse-arrMerge');
output("Merge Object: obj.arrMerge('users', {username: 'John Doe', points: 40})", 'collapse-arrMerge');
outputJSON(obj.arrMerge('users', {username: 'John Doe', points: 40}), 'collapse-arrMerge');
output("Merge Number: obj.arrMerge('users', 10)", 'collapse-arrMerge');
outputJSON(obj.arrMerge('users', 10), 'collapse-arrMerge');
output("Merge String: obj.arrMerge('users', 'Hello World')", 'collapse-arrMerge');
outputJSON(obj.arrMerge('users', 'Hello World'), 'collapse-arrMerge');
output("Merge to unknown key: obj.arrMerge('unknown', {username: 'John Doe', points: 40})", 'collapse-arrMerge');
outputJSON(obj.arrMerge('unknown', {username: 'John Doe', points: 40}), 'collapse-arrMerge');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache after merge.", 'collapse-arrMerge');
outputJSON(obj.arrGet('users'), 'collapse-arrMerge');

// arrLMerge();
output("This will merge a value with existing array referred by <code>users</code> key in the cache at the left side.", 'collapse-arrLMerge');
output("Merge String: obj.arrLMerge('users', 'Happy')", 'collapse-arrLMerge');
outputJSON(obj.arrLMerge('users', 'Happy'), 'collapse-arrLMerge');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache after merge.", 'collapse-arrLMerge');
outputJSON(obj.arrGet('users'), 'collapse-arrLMerge');

// purge()
obj.purge();
output("After purge", 'collapse-purge');
outputJSON(obj, 'collapse-purge');

// oMSet();
output("This will add <code>p1</code> oKey having value <code>{ id: 'p1', username: 'yusufshakeel' }</code> in the key <code>players</code> of the cache.", 'collapse-oMSet');
obj.oMSet('players', 'p1', { id: 'p1', username: 'yusufshakeel' });
output("Content of the cache.", 'collapse-oMSet');
outputJSON(obj, 'collapse-oMSet');
output("This will add <code>p2</code> oKey having value <code>{ id: 'p2', username: 'dawoodshakeel' }</code> in the key <code>players</code> of the cache.", 'collapse-oMSet');
obj.oMSet('players', 'p2', { id: 'p2', username: 'dawoodshakeel' });
output("Content of the cache.", 'collapse-oMSet');
outputJSON(obj, 'collapse-oMSet');

// oMGet();
output("This will fetch the value of oKey <code>p1</code> saved in the key <code>players</code> of the cache.", 'collapse-oMGet');
outputJSON(obj.oMGet('players', 'p1'), 'collapse-oMGet');

// oMGetAll();
output("This will fetch all the values saved in the key <code>players</code> of the cache.", 'collapse-oMGetAll');
outputJSON(obj.oMGetAll('players'), 'collapse-oMGetAll');
output("User <code>obj.length('players')</code> to get total number of oKey-oValue pairs in the key <code>players</code> of the cache.", 'collapse-oMGetAll');
outputJSON(obj.length('players'), 'collapse-oMGetAll');

// oMExists();
output("This will check if <code>p2</code> oKey exists in the object referred by key <code>players</code> in the cache.", 'collapse-oMExists');
outputJSON(obj.oMExists('players', 'p2'), 'collapse-oMExists');
output("This will check if <code>unknown</code> oKey exists in the object referred by key <code>players</code> in the cache.", 'collapse-oMExists');
outputJSON(obj.oMExists('players', 'unknown'), 'collapse-oMExists');

// oMDel();
output("This will delete <code>p2</code> oKey from the object referred by key <code>players</code> in the cache.", 'collapse-oMDel');
outputJSON(obj.oMDel('players', 'p2'), 'collapse-oMDel');
output("Fetch all values of <code>players</code> in the cache.", 'collapse-oMDel');
outputJSON(obj.oMGetAll('players'), 'collapse-oMDel');