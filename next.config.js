const transpileModules = require('next-transpile-modules')
const withImages = require('next-images')

const withTM = transpileModules(['hast-util-sanitize'])

module.exports = withTM(
  withImages({
    future: {
      webpack5: true,
    },
  }),
)
