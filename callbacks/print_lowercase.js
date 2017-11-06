var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {

  var str = html;
  var res = str.toLowerCase;
  console.log(res);

}

getHTML(requestOptions, printLowerCase);