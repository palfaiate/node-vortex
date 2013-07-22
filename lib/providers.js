var path = require('path');

// ---

var VirtualBox = require(path.join(__dirname, 'virtualbox.js')).Provider;
var Amazon = require(path.join(__dirname, 'amazon.js')).Provider;

// ---

var instances = {};

// ---

function instance(name) {
	if (!instances.hasOwnProperty(name)) {
		if (exports.hasOwnProperty(name)) {
			instances[name] = new exports[name]();
			
			instances[name].name = name;
		} else {
			throw new Error('provider ' + name + ' not found');
		}
	}
	
	return instances[name];
}

// ---

exports.VirtualBox = VirtualBox;
exports.Amazon = Amazon;
exports.instance = instance;