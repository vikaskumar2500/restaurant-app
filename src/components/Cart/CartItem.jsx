import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li key={props.id} className="cart-item">
      <h3>{props.name}</h3>
      <div className="cart-about">
        <div className="price">${props.price}</div>
        <div className="amount">x{props.amount}</div>
        <div className="cart-actions">
          <button type="button" className="btn btn1">
            -
          </button>
          <button type="button" className="btn btn2">
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
