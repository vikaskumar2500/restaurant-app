import React from "react";

const MyContext = React.createContext({
  showCart:null,
  showCartHandler:()=> {},
})

export default MyContext;