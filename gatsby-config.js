require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `HHHome`,
    siteLanguage: `en`,
    siteTitleAlt: `Hyeonhee Park Blog`,
    siteUrl: `https://hyeonheepark.netlify.app`,

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
            slug: `/Blog`,
          },
          {
            title: `Sound`,
            slug: `/Sound`,
          },
          {
            title: `Game`,
            slug: `/Game`,
          },
          {
            title: `Music`,
            slug: `/Music`,
          },

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

