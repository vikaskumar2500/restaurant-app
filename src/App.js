import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import CartItems from "./components/Cart/CartItems";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <Meals />
      <CartItems/>
    </React.Fragment>
  );
};

export default App;
