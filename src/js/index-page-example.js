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
    elNode.appendChild(document.createTextNode(message));
    container.appendChild(elNode);
}

function outputJSON(data, containerID) {
    var container = document.getElementById(containerID);
    var elNode = document.createElement('pre');
    elNode.appendChild(document.createTextNode(JSON.stringify(data, undefined, 2)));
    container.appendChild(elNode);
}

//------------------- helper ends here ----------------//

var obj = new dyCache();

output("Instance of dyCache class created!", 'collapse-new-object');
outputJSON(obj, 'collapse-new-object');

// set('num', 10);
output("Adding a num key having numeric value 10.", 'collapse-set');
obj.set('num', 10);
outputJSON(obj, 'collapse-set');

// set('str', 'Yusuf Shakeel');
output("Adding a str key having string value 'Yusuf Shakeel'.", 'collapse-set');
obj.set('str', 'Yusuf Shakeel');
outputJSON(obj, 'collapse-set');

// get('num');
output("Get the value of key num", 'collapse-get');
outputJSON(obj.get('num'), 'collapse-get');

// get('str');
output("Get the value of key str", 'collapse-get');
outputJSON(obj.get('str'), 'collapse-get');