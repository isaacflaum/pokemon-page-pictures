var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var async = require('async');
 
var childArgs = [
  path.join(__dirname, 'screenCapture.js'),
  'bulbasaur'
]
 
childProcess.execFile('phantomjs', childArgs, function(err, stdout, stderr) {
  // handle results
  if (err) {
  	throw err;
  }
  console.log(stdout);
});