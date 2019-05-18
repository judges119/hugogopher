const fs = require('fs');
const path = require('path');

const markdownRegex = /\.md$/;

module.exports = function readMarkdownFiles(directory) {
  return fs.promises.readdir(directory)
    .then(function(files) {
      return files.reduce(function (array, file) {
        if (file.match(markdownRegex)) {
            return array.concat(path.join(directory, file));
        }
      }, []);
    });
}
