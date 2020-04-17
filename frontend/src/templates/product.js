import React, { Component } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import SingleProduct from "../components/SingleProduct/index";

class Product extends Component {
  render() {
    const product = this.props.data.wcProducts;

    return (
      <>
        <SingleProduct product={product} />
      </>
    );
  }
}

Product.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
};

export default Product;

export const productQuery = graphql`
  query($id: String!) {
    wcProducts(id: { eq: $id }) {
      id
      name
      regular_price
      price
      short_description
      description
      wordpress_id
    }
  }
`;
