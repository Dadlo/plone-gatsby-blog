module.exports = {
  siteMetadata: {
    title: 'Plone Gatsby Blog',
    subTitle: 'Blog made with Plone + Gatsby',
  },
  pathPrefix: `/plone-gatsby-blog`,
  plugins: [
    {
      resolve: 'gatsby-source-plone',
      options: {
        baseUrl: 'http://b856bc3a.ngrok.io/Plone/',
        logLevel: 'DEBUG',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Plone Gatsby Blog',
        short_name: 'Plone',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#007eb6',
        display: 'standalone',
        icon: 'src/images/icon.png',
    },
  },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
