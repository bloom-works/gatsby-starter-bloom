module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: `@bloom-works`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: false,
        purgeOnly: [`src/css/style.css`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `XXXXXXXX`, // TODO
        head: false,
        anonymize: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
  ],
};
