import React, { Component } from "react";
import { graphql } from "gatsby";
import "bulma/css/bulma.css";
import axios from "axios";
import AuthContext from "../components/AuthWrapper/index";
import CartItems from "../components/CartItems/index";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3030/wp-json/cocart/v1/get-cart", {
        // headers: {
        //   Authorization: "Bearer " + this.props.token,
        // },
      })
      .then((res) => {
        console.log("Cart res:", res);
        this.setState(() => ({
          cart: res.data,
        }));
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <section className="section" id="cart">
        {/* {CartItem.length ? (
          <div className="empty-cart-container">
            <button
              className="button is-danger btn-empty-cart"
              onClick={cart.handleClearCart}
            >
              Empty Cart
            </button>
          </div>
        ) : (
          <h2 className="title is-2">
            Your cart is empty, shop <Link to="/">here</Link>
          </h2>
        )} */}
        <CartItems />
        {/* {subtotal > 0 && (
          <>
            <div id="subtotal_container">
              <p>
                Subtotal:
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(subtotal)}
              </p>
            </div>

            <div id="checkout_container">
              <button className="button is-link">Checkout</button>
            </div>
          </>
        )} */}
      </section>
    );
  }
}
