import React from "react";
import ReactHtmlParser from "react-html-parser";
import "bulma/css/bulma.css";
import "../../css/index.css";
import ATCButton from "../ATCButton/index";

const SingleProduct = props => {
  const {
    name,
    regular_price,
    price,
    short_description,
    description,
    // images,
    wordpress_id
  } = props.product;

  return (
    <div id="single_product">
      <div id="product_info">
        {/* <img src={images[0].src} alt="Placeholder" /> */}
        <div id="description">{description}</div>
        <div id="item_details">{ReactHtmlParser(short_description)}</div>
      </div>
      <div id="product_atc">
        <div className="atc card">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
              </div>
            </div>
            <div className="content">
              <div>
                <s>${regular_price}</s>
              </div>
              <div>${price}</div>
            </div>
            <ATCButton product_id={wordpress_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
