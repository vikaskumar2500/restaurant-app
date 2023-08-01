import "./Input.css";

const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        min={props.min}
        step={props.step}
        max={props.max}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default Input;
