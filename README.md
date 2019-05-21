# Hugo Gopher

This is a highly-opinionated tool that takes an existing [Hugo](https://gohugo.io/) project and compiles it as a [Gopher](https://en.wikipedia.org/wiki/Gopher_(protocol)) site.

## Directions

1. Install [Node.js](https://nodejs.org/), I think this requires at least Node 10.
2. Modify the constant `APS` in the `index.js` file to point to the `content` directory of your Hugo project.
3. Run `node index.js`
4. Copy the newly created `gopher/` directory to the root of your gopher namespace.

## Opinions And Limitations

* It only understands JSON front matter right now. I might add YAML/TOML later. On the plus side, you can convert all your existing content with `hugo convertToJsSON`.
* It uses the `gophermap` index file format used by [PyGopherd](http://gopher.quux.org:70/devel/gopher/pygopherd)
* It only works with Markdown files
* It outputs them as text files, the gophermap directories will reference them as plain text too.
* It names your posts after the `slug` property in your post front matter
* It creates directories for `year/month/day` and puts your posts in there.
