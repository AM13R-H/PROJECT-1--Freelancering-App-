// import { useState } from 'react';
import '../styles/sassCompiler/textFeild.min.css';

function Text_Feild({ name, label, type, register, validationSchema, requierd, errors }) {
  // console.log(errors);
  return (
    <div className={`relative flex flex-col bg-transparent`}>
      <label className="label__input" htmlFor={name}>
        {label} {requierd && <span className="text-red-500 text-xs">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        className="textField__input"
        id={name}
        name={name}
        type={type}
        autoComplete="off"
        // placeholder={`Enter ${name}`}
      />
      {errors && errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  );
}

export default Text_Feild;
