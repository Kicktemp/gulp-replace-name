'use strict';

var through = require('through2');
var path = require('path');

module.exports = function(reg, value) {
  return through.obj(function(file, encoding, callback) {
    var pathArr = file.path.split(path.sep);
   pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace(reg, value);
    var newFilePath = pathArr.join(path.sep);
    file.path = newFilePath;

    callback(null, file);
  });
};
