import React, { Fragment } from "react";
import Cart from "../Cart/Cart";
import "./Header.css";
import mealImage from "../../assests/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <nav className="header">
        <h1>Nirvana food</h1>
        <div>
          <Cart />
        </div>
      </nav>
      <div className="meal-image">
        <img src={mealImage} alt="not found" />
      </div>
    </Fragment>
  );
};

export default Header;
