const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    // Create slug for markdown files.
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Blog pages.
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const blogPages = await graphql(`
        query {
            allFile(filter: {sourceInstanceName: {eq: "blog"}, extension: {eq: "md"}}) {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `)
    blogPages.data.allFile.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.name}`,
            context: {
                slug: edge.node.name
            }
        })
    })
}