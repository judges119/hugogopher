const fs = require('fs');
const path = require('path');

module.exports = function createPost(post_dir, post) {
  return fs.promises.writeFile(post_dir + path.sep + post.metadata.slug, post.post)
}
