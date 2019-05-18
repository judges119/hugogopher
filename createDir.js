const fs = require('fs');
const path = require('path');

module.exports = function createDir(directory, post) {
  const date = post.metadata.date;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const post_path = 'gopher' + path.sep + directory + path.sep + year + path.sep + month + path.sep + day;
  return fs.promises.mkdir(post_path, { recursive: true })
    .then(() => post_path);
}
