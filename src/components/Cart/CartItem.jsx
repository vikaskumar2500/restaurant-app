import React, { useContext } from "react";
import Modal from "../UI/Modal";
import MyContext from "../../store/MyContext";
import "./CartItem.css";
import { v4 as uuidv4 } from "uuid";

const CartItem = () => {
  const myCtx = useContext(MyContext);

  const dummyMeal = {
    id: uuidv4(),
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  };

  const closeButtonHandler = () => {
    myCtx.showCartHandler(false);
  };

  return (
    <Modal>
      <div className="name">{dummyMeal.name}</div>
      <div className="total-amount">
        <h2>Total Amount</h2>
        <span>${dummyMeal.price}</span>
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

export default CartItem;
