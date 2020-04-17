import React, { useContext } from "react";
import axios from "axios";
// import Cart from "../Cart/index";
import AuthContext from "../AuthWrapper/index";

const ATCButton = (props) => {
  //   console.log("Context: ", useContext(AuthContext));
  //   const token = useContext(AuthContext);
  console.log("ATC Token:", props.token);
  const handleATC = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3030/wp-json/cocart/v1/add-item",
        {
          product_id: props.product_id,
          quantity: 1,
        }
        // {
        //   headers: {
        //     Authorization: "Bearer " + props.token,
        //     "Content-Type": "application/json"
        //     // "User-Agent": "CoCart API/v1"
        //   }
        // }
      )
      .then((res) => {
        console.log("Posted");
        console.log("ATCButton res:", res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div id="atc_button_container">
      <button className="atc button is-link" onClick={handleATC}>
        Add to Cart
      </button>
      {/* <Cart token={props.token} /> */}
    </div>
  );
};

export default ATCButton;
