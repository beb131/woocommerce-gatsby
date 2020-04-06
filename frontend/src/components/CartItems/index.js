import React from "react";

const CartItems = props => {
  return (
    <div className="cart card">
      <header className="card-header"></header>
      <footer className="card-footer">
        <div className="card-footer-item">
          {/* <Link to={`/products/${ProductURL}`}> */}
          {/* <p className="card-header-title">{ItemName}</p> */}
          {/* </Link> */}
        </div>
        {/* Map extenions to card-footer-items */}
        {/* <div className="card-footer-item">'Extension'</div> */}
        <div className="card-footer-item">{/* price */}</div>
        <div className="card-footer-item">{/* total price */}</div>
        <div className="card-footer-item">
          <div className="quan">
            <input
              type="number"
              name="quantity"
              min="1"
              max="999"
              step="1"
              // value={newQuan}
              // onChange={onQuanUpdate}
              // onKeyDown={formatInput}
            />
          </div>
        </div>
        <div className="card-footer-item">
          <button
            className="button is-danger"
            // onClick={handleRemoveFromCart.bind(this, InvtID)}
          >
            Remove From Cart
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CartItems;
