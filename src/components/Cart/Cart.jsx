import "./Cart.css";
import cartImage from "../../assests/cart.jpg";

const Cart = () => {
  return (
    <button type="button" className="button">
      <span className="icon">
        <img src={cartImage} alt="not found" />
      </span>
      <span>Your Cart</span>
      <span className='badge'>0</span>
    </button>
  );
};

export default Cart;
