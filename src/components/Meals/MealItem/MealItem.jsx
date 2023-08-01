import "./MealItem.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

  return (
    <li key={props.meal.id} className="meal-item">
      <div className="about">
        <h3>{props.meal.name}</h3>
        <div className="description">{props.meal.desc}</div>
        <div className="price">${props.meal.price}</div>
      </div>
      <MealItemForm meal={props.meal} />
    </li>
  );
};

export default MealItem;
