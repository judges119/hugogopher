const fs = require('fs');
const path = require('path');

module.exports = function gophermap(gophermap_listing, files_array, directory, post_dir, post) {
  const date = post.metadata.date;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const final_date = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), 8);

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
      return file + '0' + listing.title + '	/' + listing.location + '\n';
    }, ''));
  }
  return gophermap_listing_longer;
}
