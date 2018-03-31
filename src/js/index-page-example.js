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

// set('user', { username: 'yusufshakeel', points: 10 });
output("Adding a <code>user</code> key having string value <code>{ username: 'yusufshakeel', points: 10 }</code>.", 'collapse-set');
obj.set('user', { username: 'yusufshakeel', points: 10 });
outputJSON(obj, 'collapse-set');

// set('arr', [1, 2, 3]);
output("Adding a <code>arr</code> key having string value <code>[1, 2, 3]</code>.", 'collapse-set');
obj.set('arr', [1, 2, 3]);
outputJSON(obj, 'collapse-set');

// get('num');
output("Get the value of key <code>num</code>", 'collapse-get');
outputJSON(obj.get('num'), 'collapse-get');

// get('str');
output("Get the value of key <code>str</code>", 'collapse-get');
outputJSON(obj.get('str'), 'collapse-get');

// get('user');
output("Get the value of key <code>user</code>", 'collapse-get');
outputJSON(obj.get('user'), 'collapse-get');

// get('arr');
output("Get the value of key <code>arr</code>", 'collapse-get');
outputJSON(obj.get('arr'), 'collapse-get');

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

// purge()
obj.purge();
output("After purge", 'collapse-purge');
outputJSON(obj, 'collapse-purge');

// arrPush();
output("Create an <code>users</code> key in the cache which is an array and insert some data from right side.", 'collapse-arrPush');
obj.arrPush('users', {username: 'yusufshakeel', points: 10});
obj.arrPush('users', [1, 2, 3]);
obj.arrPush('users', 9999);
obj.arrPush('users', 'Hello World');
output("Content of the cache.", 'collapse-arrPush');
outputJSON(obj, 'collapse-arrPush');

// arrMPush();
output("Push multiple values in an array referred by <code>users</code> key in the cache from the right", 'collapse-arrMPush');
obj.arrMPush('users', [100, 'superman', ['a1', 'b2', 200], { id: 10, points: 20}]);
output("Content of the cache.", 'collapse-arrMPush');
outputJSON(obj, 'collapse-arrMPush');

// arrLPush();
output("Create an <code>users</code> key (if not exists) in the cache which is an array and insert given data from the left.", 'collapse-arrLPush');
obj.arrLPush('users', {username: 'qwerty', points: 50});
output("Content of the cache.", 'collapse-arrLPush');
outputJSON(obj, 'collapse-arrLPush');

// arrMLPush();
output("Push multiple values in an array referred by <code>users</code> key in the cache from the left", 'collapse-arrMLPush');
obj.arrMLPush('users', [1, 'hi', [1, 3], { m: 1 }]);
output("Content of the cache.", 'collapse-arrMLPush');
outputJSON(obj, 'collapse-arrMLPush');

// arrGet();
output("Fetch all the elements of the array referred by <code>users</code> key in the cache.", 'collapse-arrGet');
outputJSON(obj.arrGet('users'), 'collapse-arrGet');
output("Fetch element of an array referred by <code>unknown</code> key that does not exists in the cache.", 'collapse-arrGet');
output("To avoid ambiguity use <code>obj.exists(key)</code> to first check if the key exists", 'collapse-arrGet');
outputJSON(obj.arrGet('unknown'), 'collapse-arrGet');
output("Fetch element at index 1 in the array referred by <code>users</code> key in the cache.", 'collapse-arrGet');
outputJSON(obj.arrGet('users', 1), 'collapse-arrGet');
output("Fetch elements from index 1 to 3 in the array referred by <code>users</code> key in the cache.", 'collapse-arrGet');
outputJSON(obj.arrGet('users', 1, 3), 'collapse-arrGet');

// arrLength()
output("Total number of elements in the array referred by the key <code>users</code> in the cache.", 'collapse-arrLength');
outputJSON(obj.arrLength('users'), 'collapse-arrLength');
output("Total number of elements in the array referred by the key <code>unknown</code> in the cache.", 'collapse-arrLength');
outputJSON(obj.arrLength('unknown'), 'collapse-arrLength');

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

// arrUpdateElem();
output("Update value of an element at index 0 in the array referred by key <code>users</code> in the cache.", 'collapse-arrUpdateElem');
outputJSON(obj.arrUpdateElem('users', 0, { username: 'tintin', points: 50 }), 'collapse-arrUpdateElem');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache.", 'collapse-arrUpdateElem');
outputJSON(obj.arrGet('users'), 'collapse-arrUpdateElem');

// arrDeleteElem();
output("Delete element at index 0 from array referred by key <code>users</code> in the cache.", 'collapse-arrDeleteElem');
outputJSON(obj.arrDeleteElem('users', 0), 'collapse-arrDeleteElem');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache after merge.", 'collapse-arrDeleteElem');
outputJSON(obj.arrGet('users'), 'collapse-arrDeleteElem');

// arrDeleteElems();
output("Delete 3 elements from index 2 from array referred by key <code>users</code> in the cache.", 'collapse-arrDeleteElems');
outputJSON(obj.arrDeleteElems('users', 2, 3), 'collapse-arrDeleteElems');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache after merge.", 'collapse-arrDeleteElems');
outputJSON(obj.arrGet('users'), 'collapse-arrDeleteElems');
output("Delete all elements from index 6 till end from array referred by key <code>users</code> in the cache.", 'collapse-arrDeleteElems');
outputJSON(obj.arrDeleteElems('users', 6), 'collapse-arrDeleteElems');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache after merge.", 'collapse-arrDeleteElems');
outputJSON(obj.arrGet('users'), 'collapse-arrDeleteElems');
output("Delete elements from the start index from array referred by key <code>users</code> in the cache.", 'collapse-arrDeleteElems');
outputJSON(obj.arrDeleteElems('users', 0, 3), 'collapse-arrDeleteElems');
output("Fetch all the elements of the array referred by <code>users</code> key in the cache after merge.", 'collapse-arrDeleteElems');
outputJSON(obj.arrGet('users'), 'collapse-arrDeleteElems');

// purge()
obj.purge();
output("Content of the cache after purge.", 'collapse-oSet');
outputJSON(obj, 'collapse-oSet');

// oSet();
output("This will add <code>p1</code> oKey having value <code>{ id: 'p1', username: 'yusufshakeel' }</code> in the key <code>players</code> of the cache.", 'collapse-oSet');
obj.oSet('players', 'p1', { id: 'p1', username: 'yusufshakeel' });
output("Content of the cache.", 'collapse-oSet');
outputJSON(obj, 'collapse-oSet');
output("This will add <code>p2</code> oKey having value <code>{ id: 'p2', username: 'dawoodshakeel' }</code> in the key <code>players</code> of the cache.", 'collapse-oSet');
obj.oSet('players', 'p2', { id: 'p2', username: 'dawoodshakeel' });
output("Content of the cache.", 'collapse-oSet');
outputJSON(obj, 'collapse-oSet');

// oGet();
output("This will fetch the value of oKey <code>p1</code> saved in the key <code>players</code> in the cache.", 'collapse-oGet');
outputJSON(obj.oGet('players', 'p1'), 'collapse-oGet');
output("This will fetch the value of a non-existing oKey <code>unknown</code>.", 'collapse-oGet');
output("To avoid ambiguity use <code>obj.oExists(key, oKey)</code> to check if the <code>oKey</code> exists in the object referred by <code>key</code>.", 'collapse-oGet');
outputJSON(obj.oGet('players', 'unknown'), 'collapse-oGet');

// oGetAll();
output("This will fetch all the values saved in the key <code>players</code> of the cache.", 'collapse-oGetAll');
outputJSON(obj.oGetAll('players'), 'collapse-oGetAll');

// oExists();
output("This will check if <code>p2</code> oKey exists in the object referred by key <code>players</code> in the cache.", 'collapse-oExists');
outputJSON(obj.oExists('players', 'p2'), 'collapse-oExists');
output("This will check if <code>unknown</code> oKey exists in the object referred by key <code>players</code> in the cache.", 'collapse-oExists');
outputJSON(obj.oExists('players', 'unknown'), 'collapse-oExists');

// oLength();
output("Total number of oKey in the object referred by key <code>players</code> in the cache.", 'collapse-oLength');
outputJSON(obj.oLength('players'), 'collapse-oLength');
output("Total number of oKey in the object referred by key <code>unknown</code> in the cache.", 'collapse-oLength');
outputJSON(obj.oLength('unknown'), 'collapse-oLength');

// oDel();
output("This will delete <code>p2</code> oKey from the object referred by key <code>players</code> in the cache.", 'collapse-oDel');
outputJSON(obj.oDel('players', 'p2'), 'collapse-oDel');
output("Fetch all values of <code>players</code> in the cache.", 'collapse-oDel');
outputJSON(obj.oGetAll('players'), 'collapse-oDel');