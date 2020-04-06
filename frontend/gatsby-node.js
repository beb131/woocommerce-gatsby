const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.

  const result = await graphql(`
    {
      allWcProducts {
        edges {
          node {
            id
            name
            description
            price
            slug
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    console.error(result.errors);
  }

  // Access query results via object destructuring
  const { allWcProducts } = result.data;

  const productTemplate = path.resolve(`./src/templates/product.js`);
  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allWcProducts.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${edge.node.slug}/`,
      component: slash(productTemplate),
      context: {
        id: edge.node.id
      }
    });
  });
};
