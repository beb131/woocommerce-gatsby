module.exports = {
  siteMetadata: {
    title: `Hotels At Home`,
    description: `Gatsby Wordpress`
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `localhost`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false
      }
    },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of Wordpress site
        api: "localhost",

        // set to false to not see verbose output during build
        // default: true
        verbose: true,

        // true if using https. otherwise false.
        https: false,
        api_keys: {
          consumer_key: "",
          consumer_secret: ""
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products", "products/categories", "products/attributes"],
        // Send the API keys as query string parameters instead of using the authorization header
        // OPTIONAL: defaults to false
        query_string_auth: false,
        // Version of the woocommerce API to use
        // OPTIONAL: defaults to 'wc/v3'
        api_version: "wc/v3",
        per_page: 100,
        // OPTIONAL: Custom WP REST API url prefix, only needed if not using
        // the default wp-json prefix.
        // wpAPIPrefix: "wp-rest",
        // OPTIONAL: Support for URLs with ports, e.g. 8080; defaults to no port
        port: "3030",
        // OPTIONAL: Encoding; default to 'utf8'
        encoding: "utf8"
      }
    }
  ]
};
