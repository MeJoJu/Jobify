import React from "react";

function FormRow({ type, name, LabelText, defaultValue = "" }) {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {LabelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}

export default FormRow;
