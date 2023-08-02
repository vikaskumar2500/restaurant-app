import React, { useContext } from "react";
import "./Cart.css";
import cartImage from "../../assests/cart.jpg";
import MyContext from "../../store/MyContext";

const Cart = () => {
  const myCtx = useContext(MyContext);

  const cartButtonHandler = () => {
    console.log("it's running");
    myCtx.showCartHandler(true);
  };
  // console.log(myCtx.items);
  const totalAmount = myCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <button type="button" className="button" onClick={cartButtonHandler}>
      <span className="icon">
        <img src={cartImage} alt="not found" />
      </span>
      <span>Your Cart</span>
      <span className="badge">{totalAmount}</span>
    </button>
  );
};

export default Cart;
