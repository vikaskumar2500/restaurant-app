import MyContext from "./MyContext";
import React, { useState, useReducer } from "react";

const defaultItem = {
  items: [],
  totalPrice: 0,
};

// implement the cartReducer outside the function!
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (cartItemIndex !== -1) {
      state.items[cartItemIndex].amount += action.item.amount;
      return {
        items: state.items,
        totalPrice: state.totalPrice + action.item.price * action.item.amount,
      };
    } else {
      return {
        items: [action.item, ...state.items],
        totalPrice: state.totalPrice + action.item.price * action.item.amount,
      };
    }
  } else if (action.type === "DELETE") {
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    // console.log(cartItemIndex);

    if (state.items[cartItemIndex].amount === 1) {
      return {
        items: state.items.filter((item) => item.id !== action.id),
        totalPrice: state.totalPrice - state.items[cartItemIndex].price,
      };
    } else {
      state.items[cartItemIndex].amount -= 1;
      return {
        items: state.items,
        totalPrice: state.totalPrice - state.items[cartItemIndex].price,
      };
    }
  } else return defaultItem;
};

const MyContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);

  // I am using useReducer for the mangement all those enter-related items
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultItem);

  const showCartHandler = (isShow) => {
    setShowCart(isShow);
  };

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const deleteItemHandler = (id) => {
    dispatchCart({ type: "DELETE", id: id });
  };

  return (
    <MyContext.Provider
      value={{
        showCart: showCart,
        showCartHandler: showCartHandler,
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemHandler,
        deleteItem: deleteItemHandler,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
