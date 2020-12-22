exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query Slugs {
            posts: allContentfulPost {
                nodes {
                slug
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panic('Error loading lesson', JSON.stringify(result.errors));
    }

    result.data.posts.nodes.forEach(post => {
        actions.createPage({
            path: `/${post.slug}/`,
            component: require.resolve("./src/templates/post-template.js"),
            context: {
              slug: post.slug,
            },
          })
    })
}