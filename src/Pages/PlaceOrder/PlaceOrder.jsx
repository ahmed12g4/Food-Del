import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)
  

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required/>
          <input type="text" placeholder="Last name" required/>
        </div>
        <input type="email" placeholder="Email address" required/>
        <input type="text" placeholder="Street" required/>
        <div className="multi-fields">
          <input type="text" placeholder="City" required/>
          <input type="text" placeholder="State" required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" required/>
          <input type="text" placeholder="Country" required/>
        </div>
        <input type="text" placeholder="Phone" required/>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button type="submit" >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
