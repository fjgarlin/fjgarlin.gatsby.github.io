module.exports = {
    siteMetadata: {
        title: 'fjgarlin',
        author: 'Fran Garcia-Linares'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
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