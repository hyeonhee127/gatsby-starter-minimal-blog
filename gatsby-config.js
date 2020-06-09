require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Home`,
    siteLanguage: `en`,
    siteTitleAlt: `Hyeonhee Park Blog`,
    sitemap: 'Hi',
    siteMetadata: '.',
    siteHeadline: `HHHH`,
    footer:  '.',
    siteUrl: `https://hyeonheepark.netlify.app`,
    author: `@HyeonheePark`
    
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        showLineNumbers: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Sound`,
            slug: `/about`,
          },
          {
            title: `Game`,
            slug: `/about2`,
          },
        ],
        footer: [ 
          {



          }    


        ],

        

        externalLinks: [
          {
            name: `Facebook`,
            url: `https://www.facebook.com/hyeonhee127`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/hyeonheepark/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
