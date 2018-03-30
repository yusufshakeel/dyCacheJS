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




// purge()
obj.purge();
output("After purge", 'collapse-purge');
outputJSON(obj, 'collapse-purge');