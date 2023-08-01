import Input from "../../UI/Input";
import "./MealItemForm.css";

const MealItemForm = (props) => {
  return (
    <form className="meal-item-form">
      <Input
        type="number"
        id={props.meal.id}
        label="Amount"
        defaultValue={1}
        min={1}
        step={1}
        max={5}
        className='meal-item-form'
      />

      <button type="submit">+Add</button>

    </form>
  );
};

export default MealItemForm;
