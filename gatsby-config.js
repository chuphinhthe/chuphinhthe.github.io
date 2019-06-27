const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Chup hinh the',
    description: 'cách nhanh nhất để chụp hình thẻ mà ko cần phải đi đến tiệp chụp hình',
    author: '@steenify',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        images: path.join(__dirname, 'src/assets/images'),
        components: path.join(__dirname, 'src/components'),
        store: path.join(__dirname, 'src/store'),
        styles: path.join(__dirname, 'src/styles'),
        constants: path.join(__dirname, 'src/constants'),
        services: path.join(__dirname, 'src/services'),
        utils: path.join(__dirname, 'src/utils'),
        modules: path.join(__dirname, 'src/modules'),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
