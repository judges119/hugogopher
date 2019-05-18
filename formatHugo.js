module.exports = function formatHugo(hugo_md_string) {
  const regex = /^(\{\n[\s\S]+\n\})\n\n([^]+)$/;
  const result = regex.exec(hugo_md_string)
  return {
    metadata: JSON.parse(result[1]),
    post: result[2]
  };
}
