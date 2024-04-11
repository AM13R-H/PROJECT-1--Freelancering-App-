import { useState } from "react";

function Text_Feild({
  value,
  onChange,
  name,
  label,
  type,
  inputStyle,
  labelStyle,
}) {

  return (
    <div
      className={`flex flex-col`}
    >
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className={inputStyle}
        id={name}
        name={name}
        type={type}
        autoComplete="off"
      />
    </div>
  );
}

export default Text_Feild;
