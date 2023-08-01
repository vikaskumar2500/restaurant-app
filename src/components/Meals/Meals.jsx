import MealItem from "./MealItem/MealItem";
import "./Meals.css";
import { v4 as uuidv4 } from "uuid";

const Meals = () => {
  const meals = [
    {
      id: uuidv4(),
      name: "Sushi",
      desc: "Finest fish and veggies",
      price: 22.99,
    },

    {
      id: uuidv4(),
      name: "Schnitzel",
      desc: "A german specility",
      price: 16.5,
    },

    {
      id: uuidv4(),
      name: "Burger",
      desc: "A delicious indian Burger",
      price: 20.49,
    },
  ];

  return (
    <ul className="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
