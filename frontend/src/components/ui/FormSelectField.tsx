"use client";
import { useField } from "formik";

const FormSelectField = ({
  className = null,
  label = "",
  name = "",
  options = [],
  ...otherProps
}) => {
  const [field, { error, touched }] = useField(name);
  const hasError = Boolean(error && touched);

  return (
    <label className="flex flex-col gap-1">
      <span className="font-semibold text-sm"> {label} </span>
      <select
        className="border-2 border-[#043464] p-2 w-60"
        {...field}
        {...otherProps}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-black"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div>
        {hasError && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </label>
  );
};

export default FormSelectField;
