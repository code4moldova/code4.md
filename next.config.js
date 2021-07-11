const transpileModules = require('next-transpile-modules')
const withImages = require('next-images')

const withTM = transpileModules(['hast-util-sanitize'])

const config = {
  future: {
    webpack5: true,
  },
  redirects: async () => [
    {
      source: '/slack',
      destination: 'https://code4md.slack.com',
      permanent: false,
    },
    {
      source: '/patreon',
      destination: 'https://www.patreon.com/codeformoldova',
      permanent: false,
    },
    {
      source: '/facebook',
      destination: 'https://www.facebook.com/codeformoldova',
      permanent: false,
    },
    {
      source: '/instagram',
      destination: 'https://www.instagram.com/code4md',
      permanent: false,
    },
    {
      source: '/twitter',
      destination: 'https://twitter.com/Code4Moldova',
      permanent: false,
    },
    {
      source: '/linkedin',
      destination: 'https://www.linkedin.com/company/code4moldova',
      permanent: false,
    },
  ],
}

module.exports = withTM(withImages(config))
