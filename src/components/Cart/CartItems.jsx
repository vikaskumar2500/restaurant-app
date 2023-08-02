import React, { useContext } from "react";
import Modal from "../UI/Modal";
import MyContext from "../../store/MyContext";
import "./CartItems.css";
import CartItem from "./CartItem";

const CartItems = () => {
  const myCtx = useContext(MyContext);

  const closeButtonHandler = () => {
    myCtx.showCartHandler(false);
  };

  return (
    <Modal>
      <ul className="cart-items">
        {myCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </ul>
      <div className="total-price">
        <h2>Total Price</h2>
        <span>${myCtx.totalPrice.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button type="button" className="close" onClick={closeButtonHandler}>
          Close
        </button>
        <button type="button" className="order">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default CartItems;
