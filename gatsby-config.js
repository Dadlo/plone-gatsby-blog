module.exports = {
  siteMetadata: {
    title: 'Plone Gatsby Blog',
    description: 'Blog made with Plone + Gatsby',
    subTitle: 'Blog made with Plone + Gatsby',
    siteUrl: `https://dadlo.github.io/plone-gatsby-blog/`,
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPloneNewsItem } }) => {
              return allPloneNewsItem.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  title: edge.node.title,
                  description: edge.node.description,
                  date: edge.node.created,
                  url: site.siteMetadata.siteUrl + edge.node._path,
                  guid: site.siteMetadata.siteUrl + edge.node._path,
                  custom_elements: [{ "content:encoded": edge.node.text.react }],
                })
              })
            },
            query: `
              {
                allPloneNewsItem(sort: {order: DESC, fields: created}) {
                  edges {
                    node {
                      title
                      description
                      text {
                        react
                      }
                      _path
                      created
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Plone Gatsby Blog',
        short_name: 'plone_gatsby_blog',
        start_url: '/plone-gatsby-blog',
        background_color: '#ffffff',
        theme_color: '#007eb6',
        display: 'standalone',
        icon: 'src/images/icon.png',
    },
  },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
