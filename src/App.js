import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <Meals />
    </React.Fragment>
  );
};

export default App;
