module.exports = {
  siteMetadata: {
    title: 'University Football Club',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'react-mdl',
    'gatsby-plugin-sass',
    'gatsby-plugin-anchor-links',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-sharp',
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["Quentin"],
    //       urls: ["/fonts/fonts.scss"],
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
          name: 'src',
          path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
          plugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: 'gatsby-remark-images',
                  options: {
                      maxWidth: 750,
                      linkImagesToOriginal: false
                  }
              }
          ]
      }
    }
  ]
}

