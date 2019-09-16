module.exports = function formatHugo(hugo_md_string) {
  const regex = /([{\[]{1}([,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]|".*?")+[}\]]{1})\n\n([^]+)$/;
  const result = regex.exec(hugo_md_string)
  return {
    metadata: JSON.parse(result[1]),
    post: result[2]
  };
}
