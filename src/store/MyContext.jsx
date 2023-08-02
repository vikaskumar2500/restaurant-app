import React from "react";

const MyContext = React.createContext({
  showCart: null,
  showCartHandler: () => {},
  items: [],
  totalPrice: 0,
  addItem: () => {},
  deleteItem: () => {},
});

export default MyContext;
