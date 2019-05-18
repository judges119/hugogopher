const fs = require('fs');
const path = require('path');

module.exports = function readContentDirs(location) {
  return fs.promises.readdir(location)
    .then(function(files) {
      return files.map(function (file) {
        return file;
      });
    });
}
