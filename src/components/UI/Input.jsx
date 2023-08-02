import "./Input.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        min={props.min}
        step={props.step}
        max={props.max}
        defaultValue={props.defaultValue}
      />
    </div>
  );
});

export default Input;
