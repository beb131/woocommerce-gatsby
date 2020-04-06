import React from "react";
import { graphql } from "gatsby";
import "bulma/css/bulma.css";
import Products from "../components/Products/index";
// import Hero from "../components/Hero/index";

const Homepage = props => {
  const data = props.data;

  return (
    <>
      <Products data={data} />
    </>
  );
};

export default Homepage;

export const pageQuery = graphql`
  query {
    allWcProducts {
      edges {
        node {
          id
          name
          slug
          regular_price
          price
          short_description
          description
          images {
            src
          }
        }
      }
    }
  }
`;
