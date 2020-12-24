require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: 'Evbeff',
    description: "Evbeff's writing."
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `fzphekrg5op5`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet'
  ],
}
