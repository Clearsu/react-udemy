import "./Input.css";

const Input = (props) => {
  return (
    <div className="input-group">
      <p>
        <label htmlFor={props.firstHtmlFor}>{props.text1} ($)</label>
        <input type="number" id={props.firstId} />
      </p>
      <p>
        <label htmlFor={props.secondHtmlFor}>{props.text2} ($)</label>
        <input type="number" id={props.secondId} />
      </p>
    </div>
  );
};

export default Input;
