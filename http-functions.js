var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {

  response.setEncoding('utf8');

  var storage = '';

  response.on('data', function (data) {

  storage += data;

  });

  response.on('end', function(data) {
    callback(storage);
  });

});

};
