import React, { Fragment } from "react";
import Cart from "../Cart/Cart";
import "./Header.css";
import mealImage from "../../assests/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <h1>ReactMeals</h1>
        <div>
          <Cart />
        </div>
      </div>
      <div className="meal-image">
        <img src={mealImage} alt="not found" />
      </div>
    </Fragment>
  );
};

export default Header;
