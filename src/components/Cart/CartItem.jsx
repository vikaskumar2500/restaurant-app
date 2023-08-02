import "./CartItem.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const CartItem = (props) => {
  const myCtx = useContext(MyContext);
  const deleteButtonHelper = (id) => {
    myCtx.deleteItem(id);
  };

  const addButtonHelper = () => {
    myCtx.addItem({
      ...props,
      amount: 1,
    });
  };

  return (
    <li key={props.id} className="cart-item">
      <h3>{props.name}</h3>
      <div className="cart-about">
        <div className="price">${props.price}</div>
        <div className="amount">x{props.amount}</div>
        <div className="cart-actions">
          <button
            type="button"
            className="btn btn1"
            onClick={deleteButtonHelper.bind(null, props.id)}
          >
            -
          </button>
          <button type="button" className="btn btn2" onClick={addButtonHelper}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
