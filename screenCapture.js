var webPage = require('webpage');
var page = webPage.create();
var pokemon = require("system").args[1];
var url = 'http://www.' + pokemon + '.com';

page.viewportSize = { width: 1920, height: 1080 };

page.open(url, function start(status) {

	page.render('images/' + pokemon + '.jpeg', {format: 'jpeg', quality: '100'});

	console.log('captured:', url);

	phantom.exit();

});