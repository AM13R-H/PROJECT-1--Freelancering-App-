function RadioInput({ name, value, register, validationSchema }) {
  return (
    <div className="space-x-2 hover:tracking-widest hover:cursor-pointer">
      <input
        {...register(name , validationSchema)}
        type="radio"
        name={name}
        id={value}
        value={value}
        className="radio__input"
      />
      <label htmlFor={value} className="label__Radio">
        {value}
      </label>
    </div>
  );
}

export default RadioInput;
