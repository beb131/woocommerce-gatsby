import React from "react";
import { Link } from "gatsby";
import "bulma/css/bulma.css";
import ReactHtmlParser from "react-html-parser";

const Products = props => {
  const data = props.data;

  return (
    <>
      {data.allWcProducts.edges.map(({ node }) => {
        const { id, name, slug, description, images } = node;

        return (
          <div className="product card" key={id}>
            <Link to={slug}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={images[0].src} alt="Placeholder" />
                </figure>
              </div>
            </Link>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <Link to={slug}>
                    <p className="title is-4">{name}</p>
                  </Link>
                </div>
              </div>
              <div className="content">
                <div className="excerpt">{ReactHtmlParser(description)}</div>
                <Link to={slug}>
                  <button className="button is-link">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
