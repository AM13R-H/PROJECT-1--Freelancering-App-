function RadioInput({ name, value, onChange, inputStyle, labelStyle }) {
  return (
    <div className="space-x-2">
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        className={inputStyle}
      />
      <label htmlFor={value} className={labelStyle}>
        {value}
      </label>
    </div>
  );
}

export default RadioInput;
