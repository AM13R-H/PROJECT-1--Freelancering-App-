function RHFSelect({ label, name, register, errors, options, validationSchema }) {
  return (
    <div className="flex flex-col">
      <label className="text-secondary-0" htmlFor={name}>{label}</label>
      <select
      {...register(name , validationSchema)}
        className="w-full p-1 rounded-lg text-secondary-0 border-2 bg-transparent"
        name={name}
      >
        {options.map((singelOption) => (
            <option key={singelOption.value} value={singelOption.value}>{singelOption.label}</option>
        ))}
      </select>
      {errors && errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  );
}

export default RHFSelect;
