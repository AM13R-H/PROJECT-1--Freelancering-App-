import RadioInput from './RadioInput';

function RadioContainer({ register, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  console.log(errors);
  return (
    <div className="space-y-2 ">
      <div className="flex justify-between">
        {options.map((singelOption) => (
          <RadioInput
            name={name}
            value={singelOption}
            register={register}
            validationSchema={validationSchema}
          />
        ))}
      </div>
      <div className="text-center">
        {errors && errors[name] && <span>{errors[name]?.message}</span>}
      </div>
    </div>
  );
}

export default RadioContainer;
