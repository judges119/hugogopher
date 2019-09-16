const fs = require('fs');
const path = require('path');
const readContentDirs = require('./readContentDirs');
const readMarkdownFiles = require('./readMarkdownFiles');
const formatHugo = require('./formatHugo');
const createDir = require('./createDir');
const createPost = require('./createPost');
const gophermap = require('./gophermap');

const DIRECTORY = process.argv[2];

readContentDirs(DIRECTORY)
  .then(directories => directories.map(directory => {
    let gophermap_listing = [];
    readMarkdownFiles(DIRECTORY + path.sep + directory)
      .then(files => files.map((file, i, files_array) => fs.promises.readFile(file, 'utf8')
        .then(content => {
          const post = formatHugo(content)
          createDir(directory, post)
            .then((post_dir) => {
              gophermap_listing = gophermap(gophermap_listing, files_array, directory, post_dir, post);
              createPost(post_dir, post)
            })
        })
        .catch(console.log)
      ))
  }));
