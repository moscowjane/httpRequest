var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  var str = html;
  var res = str.toUpperCase;
  console.log(res);

}

getHTML(requestOptions, printUpperCase);
