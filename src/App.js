import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import CartItem from "./components/Cart/CartItem";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <Meals />
      <CartItem/>
    </React.Fragment>
  );
};

export default App;
