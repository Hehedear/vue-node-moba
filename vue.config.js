module.exports = {
  // eslint-disable-next-line no-path-concat
  outputDir: __dirname + '/../server/admin',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/'
}
