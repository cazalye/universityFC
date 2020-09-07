const path = require('path')


module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const newsTemplate = path.resolve('./src/templates/news.js')
    const res = await graphql(`
        query {
            allContentfulNews {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulNews.edges.forEach((edge) => {
        createPage({
            component: newsTemplate,
            path: `/news/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
