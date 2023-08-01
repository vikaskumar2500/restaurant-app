
import MyContext from "./MyContext";
import React, {useState} from "react";

const MyContextProvider =props=> {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler=(isShow)=> {
    setShowCart(isShow);
  }

  return <MyContext.Provider 
  value={{
    showCart:showCart,
    showCartHandler:showCartHandler,
  }}
    >
    {props.children}
  </MyContext.Provider>
}

export default MyContextProvider;