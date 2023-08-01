import "./MealItem.css";

const MealItem = (props) => {
  console.log(props.meal.id);
  return (
    <li key={props.meal.id} className="meal-item">
      <h3>{props.meal.name}</h3>
      <div className="description">{props.meal.desc}</div>
      <div className="price">${props.meal.price}</div>
    </li>
  );
};

export default MealItem;
