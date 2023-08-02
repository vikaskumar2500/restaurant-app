import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import MyContext from "../../../store/MyContext";

const MealItem = (props) => {
  // console.log({...props.meal});
  const {meal} = props;
  const price = meal.price.toFixed(2);

  const myCtx = useContext(MyContext);

  const addMealItemHandler = (amount) => {
    myCtx.addItem({
      id:meal.id,
      name:meal.name,
      desc:meal.desc,
      price:price,
      amount: amount,
    });
  };

  return (
    <li key={props.meal.id} className="meal-item">
      <div className="about">
        <h3>{props.meal.name}</h3>
        <div className="description">{props.meal.desc}</div>
        <div className="price">${props.meal.price}</div>
      </div>
      <MealItemForm onAddMealItem={addMealItemHandler} />
    </li>
  );
};

export default MealItem;
