var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var async = require('async');
var pokemonNames = require('./pokemonNames');

async.eachLimit(pokemonNames, 20, function (name, callback) {
	var childArgs = [
		path.join(__dirname, 'screenCapture.js'),
  		name
	];

	childProcess.execFile('phantomjs', childArgs, function (err, stdout) {
  		if (err) {
  			console.log(err);
  		}

  		console.log(stdout);

  		callback();
	
	});

});

 
