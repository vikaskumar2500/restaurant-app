import React, {useContext} from "react";
import "./Cart.css";
import cartImage from "../../assests/cart.jpg";
import MyContext from "../../store/MyContext";

const Cart = () => {
  const myCtx = useContext(MyContext);
  const cartButtonHandler=()=> {
    myCtx.showCartHandler(true);
  }

  return (
    <button type="button" className="button" onClick={cartButtonHandler}>
      <span className="icon">
        <img src={cartImage} alt="not found" />
      </span>
      <span>Your Cart</span>
      <span className='badge'>0</span>
    </button>
  );
};

export default Cart;
