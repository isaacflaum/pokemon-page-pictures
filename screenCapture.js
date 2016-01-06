var webPage = require('webpage');
var page = webPage.create();
var pokemon = require("system").args[1];
var url = 'http://www.' + pokemon + '.com';

console.log('capturing ', url);

page.viewportSize = { width: 1920, height: 1080 };
page.open(url, function start(status) {
  page.render(pokemon + '.jpeg', {format: 'jpeg', quality: '100'});
  phantom.exit();
});