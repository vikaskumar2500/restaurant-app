import Modal from "../UI/Modal";
import "./CartItem.css";
import { v4 as uuidv4 } from "uuid";

const CartItem =()=> {
  const dummyMeal = {
    id: uuidv4(),
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  };

  return (
    <Modal>
      <div className="name">{dummyMeal.name}</div>
      <div className="total-amount">
        <h2>Total Amount</h2>
        <span>${dummyMeal.price}</span>
      </div>
      <div className="actions">
        <button type="button" className="close">Close</button>
        <button type="button" className="order">Order</button>
      </div>
    </Modal>
  );
};

export default CartItem;
