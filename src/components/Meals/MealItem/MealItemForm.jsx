import Input from "../../UI/Input";
import "./MealItemForm.css";
import { useRef } from "react";

const MealItemForm = (props) => {

  const enteredInputRef = useRef();
  // console.log(enteredInputRef);
  const mealItemFormHandler=e=> {
    e.preventDefault();
    props.onAddMealItem(+enteredInputRef.current.value);
  }

  return (
    <form className="meal-item-form" onSubmit={mealItemFormHandler}>
      <Input
        type="number"
        id='amount'
        label="Amount"
        defaultValue={1}
        min={1}
        step={1}
        max={5}
        ref={enteredInputRef}
      />

      <button type="submit">+Add</button>

    </form>
  );
};

export default MealItemForm;
