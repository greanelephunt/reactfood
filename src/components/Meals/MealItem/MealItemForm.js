import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    if (enteredAmount.trim().length === 0 || +enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(+enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: 1,
          defaultValue: 1,
        }}
        label="Amount"
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default MealItemForm;
