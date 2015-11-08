'use strict';

var through = require('through2');

module.exports = function(options) {
  return through.obj(function(file, encoding, callback) {
    var filePath = file.path.split('.');
    filePath[filePath.length - 1] = options.newPostFix;
    var newFilePath = filePath.join('.');
    file.path = newFilePath;

    callback(null, file);
  });
};
