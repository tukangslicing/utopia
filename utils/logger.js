var fs = require('fs');

exports.write = function (message) {
  message = new Date() + " " + message;
  fs.writeFile(__dirname + '\\utopia.log', message, function (err) {
    console.log(err);
  });
};
