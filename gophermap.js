const fs = require('fs');
const path = require('path');

module.exports = function gophermap(gophermap_listing, files_array, directory, post_dir, post) {
  const gophermap_listing_longer = gophermap_listing.concat({
    location: post_dir + path.sep + post.metadata.slug,
    title: post.metadata.title,
    date: post.metadata.date
  });
  if (gophermap_listing_longer.length === files_array.length) {
    const gophermap_listing_longer_sorted = gophermap_listing_longer.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    })
    fs.promises.writeFile('gopher' + path.sep + directory + path.sep + 'gophermap', gophermap_listing_longer_sorted.reduce((file, listing) => {
      return file + '0' + listing.date + ' ' +  listing.title + '	/' + listing.location + '\n';
    }, ''));
  }
  return gophermap_listing_longer;
}
